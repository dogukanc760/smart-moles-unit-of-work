import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
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

  @Post('/install/user')
  public async installUser(@Body() userDto: UsersDTO): Promise<UsersDTO> {
    return await this.systemInstallationService.registerUser(userDto);
  }

  @Post('/install/contract-type')
  public async installContractType(
    @Body() contractTypeDto: ContractTypeDTO,
  ): Promise<ContractTypeDTO> {
    return await this.systemInstallationService.recordContractType(
      contractTypeDto,
    );
  }

  @Post('/install/record-user-contract')
  public async installRecordUserContract(
    @Body() userContractDTO: UserContractDTO,
  ): Promise<UserContractDTO> {
    return await this.systemInstallationService.recordUserContract(
      userContractDTO,
    );
  }

  @Post('/install/subscription')
  public async installSubscription(
    @Body() subscriptionDTO: SubscriptionDTO,
  ): Promise<SubscriptionDTO> {
    return await this.systemInstallationService.recordSubscription(
      subscriptionDTO,
    );
  }

  @Post('/install/simcard')
  public async installSimcard(
    @Body() simcardDTO: SimCardsDTO,
  ): Promise<SimCardsDTO> {
    return await this.systemInstallationService.recordSimCard(simcardDTO);
  }

  @Post('/install/modem-imei')
  public async installModemImei(
    @Body() modemImeiDTO: ModemImeiRecordsDTO,
  ): Promise<ModemImeiRecordsDTO> {
    return await this.systemInstallationService.recordModemImei(modemImeiDTO);
  }

  @Post('/install/gateway')
  public async installGateway(
    @Body() gatewayDTO: GatewayDTO,
  ): Promise<GatewayDTO> {
    return await this.systemInstallationService.recordGateway(gatewayDTO);
  }

  @Post('/install/gateway-fields')
  public async installGatewayFields(
    @Body() gatewayFieldsDTO: GatewayFieldsDTO,
  ): Promise<GatewayFieldsDTO> {
    return await this.systemInstallationService.recordGatewayFields(
      gatewayFieldsDTO,
    );
  }

  @Post('/install/work-group')
  public async installWorkGroup(
    @Body() workGroupDTO: WorkGroupDTO,
  ): Promise<WorkGroupDTO> {
    return await this.systemInstallationService.recordWorkGroups(workGroupDTO);
  }

  @Post('/install/sensor-card')
  public async installSensorCardDto(
    @Body() sensorCardDTO: SensorCardsDTO,
  ): Promise<SensorCardsDTO> {
    return await this.systemInstallationService.recordSensorCards(
      sensorCardDTO,
    );
  }

  @Post('/install/pump-card')
  public async installPumpCardDto(
    @Body() pumpCardDTO: PumpCardsDTO,
  ): Promise<PumpCardsDTO> {
    return await this.systemInstallationService.recordPumpCards(pumpCardDTO);
  }

  @Post('/install/valve-card')
  public async installValveCardDto(
    @Body() valveCardDTO: ValveCardsDTO,
  ): Promise<ValveCardsDTO> {
    return await this.systemInstallationService.recordValveCards(valveCardDTO);
  }

  @Post('/install')
  public async install(
    @Body() step?: number,
    @Body() dataCount?: number,
    @Body() userDto?: UsersDTO,
    @Body() contractTypeDto?: ContractTypeDTO,
    @Body() userContractDto?: UserContractDTO,
    @Body() userSubscriptionDto?: SubscriptionDTO,
    @Body() simCardDto?: SimCardsDTO,
    @Body() modemImeiRecordDto?: ModemImeiRecordsDTO,
    @Body() gatewayRecordDto?: GatewayDTO[],
    @Body() gatewayFieldDto?: GatewayFieldsDTO[],
    @Body() workGroupDto?: WorkGroupDTO[],
    @Body() sensorCardDto?: SensorCardsDTO[],
    @Body() pumpCardsDTO?: PumpCardsDTO[], //
    @Body() valveCardsDTO?: ValveCardsDTO[],
  ) {
    return await this.systemInstallationService.InstallStep(
      step,
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
