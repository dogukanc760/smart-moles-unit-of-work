import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModemImeiRecordsDTO } from '../externalUnits/modemImeriRecords/modemImeiRecords.dto';
import { ModemImeiService } from '../externalUnits/modemImeriRecords/modemImeiRecords.service';
import { SimCardsDTO } from '../externalUnits/simCards/simCards.dto';
import { SimCardsService } from '../externalUnits/simCards/simCards.service';
import { GatewayDTO } from '../gateway/gateway.dto';
import { GatewayService } from '../gateway/gateway.service';
import { GatewayFieldsDTO } from '../gateway/gatewayFields/gatewayFields.dto';
import { GatewayFieldsService } from '../gateway/gatewayFields/gatewayFields.service';
import { SmartRootService } from '../smartRoot/smartRoot.service';
import { ContractTypeDTO } from '../users/contract/contractType/contractType.dto';
import { ContractTypeService } from '../users/contract/contractType/contractType.service';
import { SubscriptionDTO } from '../users/contract/subscription/subscription.dto';
import { SubscriptionService } from '../users/contract/subscription/subscription.service';
import { UserContractDTO } from '../users/contract/userContract/userContract.dto';
import { UserContractService } from '../users/contract/userContract/userContract.service';
import { UsersDTO } from '../users/users.dto';
import { UsersService } from '../users/users.service';
import { SensorCardLogsService } from '../workGroup/sensors/sensorCardLogs/sensorCardLogs.service';
import { SensorCardsDTO } from '../workGroup/sensors/sensorCards/sensorCards.dto';
import { SensorCardsService } from '../workGroup/sensors/sensorCards/sensorCards.service';
import { PumpCardsDTO } from '../workGroup/valveCards/pumpCards/pumpCards.dto';
import { PumpCardsService } from '../workGroup/valveCards/pumpCards/pumpCards.service';
import { ValveCardsDTO } from '../workGroup/valveCards/valveCards/valveCards.dto';
import { ValveCardsService } from '../workGroup/valveCards/valveCards/valveCards.service';
import { WorkGroupDTO } from '../workGroup/workGroup/workGroup.dto';
import { WorkGroupService } from '../workGroup/workGroup/workGroup.service';

@Injectable()
export class SystemInstallationService {
  constructor(
    private readonly userService: UsersService,
    private readonly gatewayService: GatewayService,
    private readonly gatewayFieldsService: GatewayFieldsService,
    private readonly workGroupService: WorkGroupService,
    private readonly sensorCardService: SensorCardsService,
    private readonly pumpCardService: PumpCardsService,
    private readonly valveCardService: ValveCardsService,
    private readonly smartRootService: SmartRootService,
    private readonly userContractService: UserContractService,
    private readonly contractTypeService: ContractTypeService,
    private readonly subscriptionService: SubscriptionService,
    private readonly simCardService: SimCardsService,
    private readonly modemService: ModemImeiService,
  ) {}

  public async InstallStep(
    step: number,
    dataCount: number,
    userDto?: UsersDTO,
    contractTypeDto?: ContractTypeDTO,
    userContractDto?: UserContractDTO,
    userSubscriptionDto?: SubscriptionDTO,
    simCardDto?: SimCardsDTO,
    modemImeiRecordDto?: ModemImeiRecordsDTO,
    gatewayRecordDto?: GatewayDTO[],
    gatewayFieldDto?: GatewayFieldsDTO[],
    workGroupDto?: WorkGroupDTO[],
    sensorCardDto?: SensorCardsDTO[],
    pumpCardsDTO?: PumpCardsDTO[], //
    valveCardsDTO?: ValveCardsDTO[],
  ): Promise<any> {
    switch (step) {
      case 1:
        return await this.registerUser(userDto);
      case 2:
        return await this.recordContractType(contractTypeDto);
      case 3:
        return await this.recordUserContract(userContractDto);
      case 4:
        return await this.recordSubscription(userSubscriptionDto);
      case 5:
        return await this.recordSimCard(simCardDto);
      case 6:
        return await this.recordModemImei(modemImeiRecordDto);
      case 8:
        return await gatewayRecordDto.map(
          async (x) => await this.recordGateway(x),
        );
      case 9:
        return await gatewayFieldDto.map(
          async (x) => await this.recordGatewayFields(x),
        );
      case 10:
        return await workGroupDto.map(
          async (x) => await this.recordWorkGroups(x),
        );
      case 11:
        return await sensorCardDto.map(
          async (x) => await this.recordSensorCards(x),
        );
      case 12:
        return await pumpCardsDTO.map(
          async (x) => await this.recordPumpCards(x),
        );
      case 13:
        return await valveCardsDTO.map(
          async (x) => await this.recordValveCards(x),
        );
      default:
        return {
          message: 'Invalid operation',
          redirect:
            'Please get request to /v1/api/installation/guide/tr or /v1/api/installation/guide/en',
        };
    }
  }

  // ILK ADIM KULLANICIYI KAYIT EDİYORUZ.
  public async registerUser(dto: UsersDTO): Promise<UsersDTO> {
    try {
      if (dto) {
        return await this.userService.Register(dto);
      }
      throw new TypeError('User info cannot null!');
    } catch (error) {
      return error;
    }
  }

  // IKINCI ADIM KULLANICI SOZLESMELERİ KAYIT EDİYORUZ
  public async recordContractType(
    dto: ContractTypeDTO,
  ): Promise<ContractTypeDTO> {
    try {
      if (dto) {
        return await this.contractTypeService.create(dto);
      }
      throw new TypeError('Contract Type info cannot null!');
    } catch (error) {
      return error;
    }
  }

  public async recordUserContract(
    dto: UserContractDTO,
  ): Promise<UserContractDTO> {
    try {
      if (dto) {
        return await this.userContractService.create(dto);
      }
      throw new TypeError('User Contract info cannot null!');
    } catch (error) {
      return error;
    }
  }

  public async recordSubscription(
    dto: SubscriptionDTO,
  ): Promise<SubscriptionDTO> {
    try {
      if (dto) {
        return await this.subscriptionService.create(dto);
      }
      throw new TypeError('Subscription Contract info cannot null!');
    } catch (error) {
      return error;
    }
  }

  // UCUNCU ADIM SIM KART VE MODEM KURULUMU
  public async recordSimCard(dto: SimCardsDTO): Promise<SimCardsDTO> {
    try {
      if (dto) {
        return await this.simCardService.create(dto);
      }
      throw new TypeError('Simcard info cannot null!');
    } catch (error) {
      return error;
    }
  }

  public async recordModemImei(
    dto: ModemImeiRecordsDTO,
  ): Promise<ModemImeiRecordsDTO> {
    try {
      if (dto) {
        return await this.modemService.create(dto);
      }
      throw new TypeError('Modem Imei info cannot null!');
    } catch (error) {
      return error;
    }
  }

  // DORDUNCU ADIM GATEWAY KURULUMLARI

  // ---- Gateway Oluşturduk ---- //
  public async recordGateway(dto: GatewayDTO): Promise<GatewayDTO> {
    try {
      if (dto) {
        return await this.gatewayService.create(dto);
      }
      throw new TypeError('Gateway info cannot null!');
    } catch (error) {
      return error;
    }
  }

  // ---- Gatewaye Bağlı Parseller(Tarlalar) Oluşturduk ---- //
  public async recordGatewayFields(
    dto: GatewayFieldsDTO,
  ): Promise<GatewayFieldsDTO> {
    try {
      if (dto) {
        return await this.gatewayFieldsService.create(dto);
      }
      throw new TypeError('Gateway Field info cannot null!');
    } catch (error) {
      return error;
    }
  }

  // ----- GATEWAYFİELDS'A BAĞLI WORKGROUPLARI OLUŞTURDUK ----- //
  public async recordWorkGroups(dto: WorkGroupDTO): Promise<WorkGroupDTO> {
    try {
      if (dto) {
        return await this.workGroupService.create(dto);
      }
      throw new TypeError('Work Group info cannot null!');
    } catch (error) {
      return error;
    }
  }

  // ---- WORKGROUPLARA BAĞLI OLAN CİHAZLARI OLUŞTURDUK ---- //

  // --- SENSOR KARTLARI OLUŞTURDUK --- //
  public async recordSensorCards(dto: SensorCardsDTO): Promise<SensorCardsDTO> {
    try {
      if (dto) {
        return await this.sensorCardService.create(dto);
      }
      throw new TypeError('Sensor Cards info cannot null!');
    } catch (error) {
      return error;
    }
  }

  // --- POMPA KARTLARI OLUUŞTURDUK --- //
  public async recordPumpCards(dto: PumpCardsDTO): Promise<PumpCardsDTO> {
    try {
      if (dto) {
        return await this.pumpCardService.create(dto);
      }
      throw new TypeError('Pump Cards info cannot null!');
    } catch (error) {
      return error;
    }
  }

  // --- VANA KARTLARI OLUŞTURDUK --- //
  public async recordValveCards(dto: ValveCardsDTO): Promise<ValveCardsDTO> {
    try {
      if (dto) {
        return await this.valveCardService.create(dto);
      }
      throw new TypeError('Valve Cards info cannot null!');
    } catch (error) {
      return error;
    }
  }
}
