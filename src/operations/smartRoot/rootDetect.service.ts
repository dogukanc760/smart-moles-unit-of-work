import { Injectable } from '@nestjs/common';
import datasource from 'src/config/migration.config';
import { GatewayDTO } from 'src/units/gateway/gateway.dto';
import { GatewayService } from 'src/units/gateway/gateway.service';
import { SmartRootDTO } from 'src/units/smartRoot/smartRoot.dto';
import { SmartRootService } from 'src/units/smartRoot/smartRoot.service';
import { SmartRootDetailFirstDTO } from 'src/units/smartRoot/smartRootDetailFirst/smartRootDetailFirst.dto';
import { SmartRootDetailFirstService } from 'src/units/smartRoot/smartRootDetailFirst/smartRootDetailFirst.service';
import { SmartRootDetailSecondDTO } from 'src/units/smartRoot/smartRootDetailSecond/smartRootDetailSecond.dto';
import { SmartRootDetailSecondService } from 'src/units/smartRoot/smartRootDetailSecond/smartRootDetailSecond.service';
import { SensorCardsDTO } from 'src/units/workGroup/sensors/sensorCards/sensorCards.dto';
import { SensorCardsService } from 'src/units/workGroup/sensors/sensorCards/sensorCards.service';
import { SensorMoistureLogService } from 'src/units/workGroup/sensors/sensorMoistureLogs/sensorMoistureLog.service';
import { PumpCardsService } from 'src/units/workGroup/valveCards/pumpCards/pumpCards.service';
import { ValveCardsDTO } from 'src/units/workGroup/valveCards/valveCards/valveCards.dto';
import { ValveCardsService } from 'src/units/workGroup/valveCards/valveCards/valveCards.service';
import { WorkGroupDTO } from 'src/units/workGroup/workGroup/workGroup.dto';
import { WorkGroupService } from 'src/units/workGroup/workGroup/workGroup.service';

@Injectable()
export class RootDetect {
  constructor(
    private readonly sensorMoistureLogService: SensorMoistureLogService,
    private readonly gatewayService: GatewayService,
    private readonly workGroupService: WorkGroupService,
    private readonly sensorCardService: SensorCardsService,
    private readonly pumpService: PumpCardsService,
    private readonly valveCardsService: ValveCardsService,
    private readonly smartRootService: SmartRootService,
    private readonly smartRootDetailFirstService: SmartRootDetailFirstService,
    private readonly smartRootDetailSecondService: SmartRootDetailSecondService,
  ) {}

  public async Process() {
    let workGroups = Array<WorkGroupDTO>();
    let smartRoot = Array<SmartRootDTO>();
    let valveCards = Array<ValveCardsDTO>();
    let sensorCards = Array<SensorCardsDTO>();
    let gatewayClosed = Array<GatewayDTO>();
    let smartRootDetailFirst = Array<SmartRootDetailFirstDTO>();
    let smartRootDetailSecond = Array<SmartRootDetailSecondDTO>();
    const gateways = await this.gatewayService.getAll();
    // BİR SENSÖRE AİT TOPLAM DATANIN DELTA DEĞERİ VE DELTA ZAMAN DEĞERİNİN BÖLÜMÜ BİZE
    // TOPLAM DEĞİŞİMİN YÜZDELİK CİNSİNDEN DEĞERİNİ VERİR
    let deltaData = 0;
    let deltaTime;
    let lastChangeData;
    let lastChangeDataArray: string[];
    // ÖNCE GATEWAYLERİ LİSTELİYORUZ VE GATEWAYE BAĞLI WORKGROUPLARI DAHA SONRA
    // WORKGROUPLARINA BAĞLI OLAN VALVECARDSLARI ÇEKİYORUZ
    // VALVECARDSLARDA İSOPEN FALSE OLAN YANİ KAPALI DURUMDA OLAN VANALAR İLE SMARTROOT İŞLEMLERİMİZİ YAPACAĞIZ
    gateways.forEach(async (gateway) => {
      workGroups.push(
        ...(await this.workGroupService.getByGateway(gateway.contentId)),
      );
      workGroups.forEach(async (workGroup) => {
        // VANA KARTLARIMIZI ALDIK VE ISOPEN===FALSE YANI KAPALI OLANLARI FİLTRELEYİP ÇEKTİK.
        valveCards.push(
          ...(await (
            await this.valveCardsService.getByWorkGroup(workGroup.contentId)
          ).filter((v) => v.IsOpen === false)),
        );
      });
      // İLK BAŞTA BÜTÜN WORKGROUPLARI ALMIŞTIK FAKAT BİZE SADECE VANASI KAPALI OLANLAR LAZIMDI
      // O YÜZDEN VANALARI KAPALI OLANLARI ALDIKTAN SONRA. KAPALI OLAN VANALARIN BAĞLI OLDUĞU WORKGROUPLARI ÇEKTİK
      // AYRI AYRI WORKGROUPSDTO REFERANSI ALMAMAK ICIN BURADA WORKGROUPS GENERIC ARRAYI BOSALTIYORUZ.
      workGroups = [];
      valveCards.forEach(async (valveCard) => {
        workGroups.push(await this.workGroupService.get(valveCard.WorkGroupID));
      });
      // ARTIK ELIMIZDE VANASI KAPALI OLAN VE SMARTROOT İÇİN İŞLEMLER YAPABİLECEĞİMİZ WORKGROUPLAR VAR
      // ŞIMDI ISE BU WORK GROUPLARIN BAĞLI OLDUĞU GATEWAYLERİ BULACAĞIZ.
      // ÇÜNKÜ SMARTROOTLAR GATEWAYLERE BAĞLI BİR ÜNİTEDİR.
      // YANİ, VANASI KAPANMIŞ OLAN WORKGROUP-GATEWAYLERE BAĞLI SMARTROOTLARI ELDE ETMİŞ OLACAĞIZ
      // BURADA GATEWAY GENERİC ARRAYINI SIFIRLAYAMIYORUZ ÇÜNKÜ HALA ONA AİT DÖNGÜNÜN İÇERİSİNDEYİZ.
      workGroups.forEach(async (workGroup) => {
        gatewayClosed.push(await this.gatewayService.get(workGroup.GatewayID));
      });
      // ARTIK BU GATEWAYLARI DE ALDIĞIMIZA GÖRE ŞİMDİ SMARTROOTLARLA ÇALISMAYA BAŞLAYABİLİRİZ.
      // BUNUDA BASKA BİR PROCESS DÖNGÜSÜNDE YAPACAĞIZ.
    });

    // VANASI KAPALI OLAN GATEWAYLERE GÖRE SMARTROOTLARIMIZI ALIYORUZ
    // VANASI KAPALI OLANLARI ALMAMIZIN SEBEBİ, DÜŞEY NEM HAREKETLERİNİ İNCELEYECEK OLMAMIZ.
    // SMARTROOTDETAILFIRST SENSORLERDEN TOPLANAN VERİLERDİR
    // SON 1 VE 2. VERİ WEB PANELDE Kİ SMARTROOT 1.VERİ VE SMARTROOT 2.VERİ OLARAK YER ALMAKTADIR
    // SMARTROOTSDETAILSECOND İSE HER BİR SENSÖRDE Kİ KÖK TESPİTİ İÇİN KULLANILACAK MATEMATKSEL FORMULDE KI VERILERIN TUTULDUĞU
    // VE TEKRAR UI TARAFINA ÇEKILDIGI TABLODUR.
    // BU YUZDENDIR Kİ SENSÖRLERDEN VERİLERİ TOPLAYIP FIRST TABLOSUNA, VERILERI ISLEDIKTEN SONRA SECOND TABLOSUNA YAZACAĞIZ
    // BELIRLI PAREMETRELERE GÖRE SECOND TABLOSUNDA ISLENMIS VERILER ILE KARSILASTIRDIKTAN SONRA ORADA KOK OLUP OLMADIGINI BULACAGIZ

    gatewayClosed.forEach(async (gateway) => {
      smartRoot.push(
        ...(await this.smartRootService.getByGateway(gateway.contentId)),
      );
      smartRoot.forEach(async (smart) => {
        smartRootDetailFirst.push(
          ...(
            await this.smartRootDetailFirstService.getBySmartRoot(
              smart.contentId,
            )
          ).filter((x) => x.lastChangedDateTime.getUTCDay() - 7),
        );
        // SENSOR DATALARINI BÜYÜKTEN KÜÇÜĞE SIRALAR
        // BU NOKTADA HER BİR SENSÖRDE 32 VERİ VAR VE 32 SENSÖRÜNDE TEK TEK VERİLERİNİN ALINIP İŞLENMESİ GEREK
        // BU YÜZDEN SENSORDATAS İÇİN AYRI BİR DÖNGÜSEL İŞLEM YAPMAN GEREKİYOR.
        smartRootDetailFirst.forEach(async (root, index) => {
          root.SensorDatas = root.SensorDatas.sort((previous, next) =>
            previous > next ? -1 : 1,
          );
          for (let i = 0; i < root.SensorDatas.length; i++) {
            for (let j = 0; j <= i; j++) {
              deltaData += Number(root.SensorDatas[j]) * 1.1;
              deltaTime += Date.parse(
                root.lastChangedDateTime.toLocaleDateString(),
              );
              lastChangeDataArray.push(deltaData.toString());
            }
          }

          lastChangeDataArray = lastChangeDataArray.sort((prev, next) =>
            prev > next ? -1 : 1,
          );

          const secondResult = await this.smartRootDetailSecondService.create({
            createdAt: new Date(),
            isDeleted: false,
            SensorDatas: lastChangeDataArray,
            lastChangedDateTime: new Date(),
            Sensors: root.Sensors,
            SmartRootID: root.SmartRootID,
            updatedAt: new Date(),
            contentId: '',
          });
          const detectResult = this.detectExistsRoot(secondResult);
          if (detectResult) {
            /// BURADA KÖKLER SON 7 GÜNDE EŞLEŞİYOR ONA GÖRE BİR DATA RETURN EDİP İŞLEM YAPMALIYIZ
            return await this.smartRootDetailSecondService.getBySmartRoot(
              root.contentId,
            );
          }
          return await this.smartRootDetailSecondService.getBySmartRoot(
            root.contentId,
          );
          /// EĞER İF İÇERİSİNE GİRMEZSE KÖKLER SON 7 GÜNDE DATA OLARAK EŞLEŞMİYORDUR ONA GÖRE VERİ DÖNMEMİZ GEREKİR.
        });

        lastChangeData = deltaData / deltaTime;
      });
    });
  }

  public async detectExistsRoot(
    smartRootDetailSecond: SmartRootDetailSecondDTO,
  ) {
    let exists = false;
    const getSmartRoot = await (
      await this.smartRootDetailSecondService.getAll()
    ).filter((x) => x.contentId === smartRootDetailSecond.contentId);

    getSmartRoot.forEach((element, index) => {
      element.SensorDatas[index] === smartRootDetailSecond.SensorDatas[index]
        ? (exists = true)
        : (exists = false);
    });

    return exists;
  }

  public async detectExistsRootFirst(
    smartRootDetailSecond: SmartRootDetailSecondDTO,
  ) {
    let exists = false;
    const getSmartRoot = await (
      await this.smartRootDetailSecondService.getAll()
    ).filter((x) => x.contentId === smartRootDetailSecond.contentId);

    getSmartRoot.forEach((element, index) => {
      element.SensorDatas[index] === smartRootDetailSecond.SensorDatas[index]
        ? (exists = true)
        : (exists = false);
    });

    return exists;
  }

  public async writeLog() {}

  public async calculateFirst(sensorData: number, sensorTime: Date, sensor) {}

  public async calculateSecond() {}
}
