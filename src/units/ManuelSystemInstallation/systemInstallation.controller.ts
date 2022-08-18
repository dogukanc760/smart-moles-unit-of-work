import { Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { guideEn } from './guide-en';
import { guide } from './guide-tr';
import { SystemInstallationService } from './systemInstallation.service';
import { ModemImeiRecordsDTO } from '../externalUnits/modemImeriRecords/modemImeiRecords.dto';
import { SimCardsDTO } from '../externalUnits/simCards/simCards.dto';
import { GatewayDTO } from '../gateway/gateway.dto';
import { GatewayFieldsDTO } from '../gateway/gatewayFields/gatewayFields.dto';
import { ContractTypeDTO } from '../users/contract/contractType/contractType.dto';
import { SubscriptionDTO } from '../users/contract/subscription/subscription.dto';
import { UserContractDTO } from '../users/contract/userContract/userContract.dto';
import { UsersDTO } from '../users/users.dto';
import { SensorCardsDTO } from '../workGroup/sensors/sensorCards/sensorCards.dto';
import { PumpCardsDTO } from '../workGroup/valveCards/pumpCards/pumpCards.dto';
import { ValveCardsDTO } from '../workGroup/valveCards/valveCards/valveCards.dto';
import { WorkGroupDTO } from '../workGroup/workGroup/workGroup.dto';

@Controller('sys-installation')
@ApiTags('System Installation')
@UseInterceptors(TransformInterceptor)
export class SystemInstallationController {
  constructor(
    private readonly systemInstallationService: SystemInstallationService,
  ) {}

  @Get('/guide/tr')
  public async getInfo(): Promise<any> {
    return guide;
  }

  @Get('/guide/en')
  public async getInfoEn(): Promise<any> {
    return guideEn;
  }

  @Post('/install')
  public async install(
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
  ) {
    return await this.systemInstallationService.InstallStep(
      step,
      dataCount,
      userDto,
      contractTypeDto,
      userContractDto,
      userSubscriptionDto,
      simCardDto,
      modemImeiRecordDto,
      gatewayRecordDto,
      gatewayFieldDto,
      workGroupDto,
      sensorCardDto,
      pumpCardsDTO,
      valveCardsDTO,
    );
  }
}
