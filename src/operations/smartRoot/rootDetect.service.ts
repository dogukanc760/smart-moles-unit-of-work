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
    // B??R SENS??RE A??T TOPLAM DATANIN DELTA DE??ER?? VE DELTA ZAMAN DE??ER??N??N B??L??M?? B??ZE
    // TOPLAM DE????????M??N Y??ZDEL??K C??NS??NDEN DE??ER??N?? VER??R
    let deltaData = 0;
    let deltaTime;
    let lastChangeData;
    let lastChangeDataArray: string[];
    // ??NCE GATEWAYLER?? L??STEL??YORUZ VE GATEWAYE BA??LI WORKGROUPLARI DAHA SONRA
    // WORKGROUPLARINA BA??LI OLAN VALVECARDSLARI ??EK??YORUZ
    // VALVECARDSLARDA ??SOPEN FALSE OLAN YAN?? KAPALI DURUMDA OLAN VANALAR ??LE SMARTROOT ????LEMLER??M??Z?? YAPACA??IZ
    gateways.forEach(async (gateway) => {
      workGroups.push(
        ...(await this.workGroupService.getByGateway(gateway.contentId)),
      );
      workGroups.forEach(async (workGroup) => {
        // VANA KARTLARIMIZI ALDIK VE ISOPEN===FALSE YANI KAPALI OLANLARI F??LTRELEY??P ??EKT??K.
        valveCards.push(
          ...(await (
            await this.valveCardsService.getByWorkGroup(workGroup.contentId)
          ).filter((v) => v.IsOpen === false)),
        );
      });
      // ??LK BA??TA B??T??N WORKGROUPLARI ALMI??TIK FAKAT B??ZE SADECE VANASI KAPALI OLANLAR LAZIMDI
      // O Y??ZDEN VANALARI KAPALI OLANLARI ALDIKTAN SONRA. KAPALI OLAN VANALARIN BA??LI OLDU??U WORKGROUPLARI ??EKT??K
      // AYRI AYRI WORKGROUPSDTO REFERANSI ALMAMAK ICIN BURADA WORKGROUPS GENERIC ARRAYI BOSALTIYORUZ.
      workGroups = [];
      valveCards.forEach(async (valveCard) => {
        workGroups.push(await this.workGroupService.get(valveCard.WorkGroupID));
      });
      // ARTIK ELIMIZDE VANASI KAPALI OLAN VE SMARTROOT ??????N ????LEMLER YAPAB??LECE????M??Z WORKGROUPLAR VAR
      // ??IMDI ISE BU WORK GROUPLARIN BA??LI OLDU??U GATEWAYLER?? BULACA??IZ.
      // ????NK?? SMARTROOTLAR GATEWAYLERE BA??LI B??R ??N??TED??R.
      // YAN??, VANASI KAPANMI?? OLAN WORKGROUP-GATEWAYLERE BA??LI SMARTROOTLARI ELDE ETM???? OLACA??IZ
      // BURADA GATEWAY GENER??C ARRAYINI SIFIRLAYAMIYORUZ ????NK?? HALA ONA A??T D??NG??N??N ????ER??S??NDEY??Z.
      workGroups.forEach(async (workGroup) => {
        gatewayClosed.push(await this.gatewayService.get(workGroup.GatewayID));
      });
      // ARTIK BU GATEWAYLARI DE ALDI??IMIZA G??RE ????MD?? SMARTROOTLARLA ??ALISMAYA BA??LAYAB??L??R??Z.
      // BUNUDA BASKA B??R PROCESS D??NG??S??NDE YAPACA??IZ.
    });

    // VANASI KAPALI OLAN GATEWAYLERE G??RE SMARTROOTLARIMIZI ALIYORUZ
    // VANASI KAPALI OLANLARI ALMAMIZIN SEBEB??, D????EY NEM HAREKETLER??N?? ??NCELEYECEK OLMAMIZ.
    // SMARTROOTDETAILFIRST SENSORLERDEN TOPLANAN VER??LERD??R
    // SON 1 VE 2. VER?? WEB PANELDE K?? SMARTROOT 1.VER?? VE SMARTROOT 2.VER?? OLARAK YER ALMAKTADIR
    // SMARTROOTSDETAILSECOND ??SE HER B??R SENS??RDE K?? K??K TESP??T?? ??????N KULLANILACAK MATEMATKSEL FORMULDE KI VERILERIN TUTULDU??U
    // VE TEKRAR UI TARAFINA ??EKILDIGI TABLODUR.
    // BU YUZDENDIR K?? SENS??RLERDEN VER??LER?? TOPLAYIP FIRST TABLOSUNA, VERILERI ISLEDIKTEN SONRA SECOND TABLOSUNA YAZACA??IZ
    // BELIRLI PAREMETRELERE G??RE SECOND TABLOSUNDA ISLENMIS VERILER ILE KARSILASTIRDIKTAN SONRA ORADA KOK OLUP OLMADIGINI BULACAGIZ

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
        // SENSOR DATALARINI B??Y??KTEN K????????E SIRALAR
        // BU NOKTADA HER B??R SENS??RDE 32 VER?? VAR VE 32 SENS??R??NDE TEK TEK VER??LER??N??N ALINIP ????LENMES?? GEREK
        // BU Y??ZDEN SENSORDATAS ??????N AYRI B??R D??NG??SEL ????LEM YAPMAN GEREK??YOR.
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
            /// BURADA K??KLER SON 7 G??NDE E??LE????YOR ONA G??RE B??R DATA RETURN ED??P ????LEM YAPMALIYIZ
            return await this.smartRootDetailSecondService.getBySmartRoot(
              root.contentId,
            );
          }
          return await this.smartRootDetailSecondService.getBySmartRoot(
            root.contentId,
          );
          /// E??ER ??F ????ER??S??NE G??RMEZSE K??KLER SON 7 G??NDE DATA OLARAK E??LE??M??YORDUR ONA G??RE VER?? D??NMEM??Z GEREK??R.
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
