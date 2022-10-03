import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { ModemImeiRecordsDTO } from 'src/units/externalUnits/modemImeriRecords/modemImeiRecords.dto';
import { ModemImeiService } from 'src/units/externalUnits/modemImeriRecords/modemImeiRecords.service';
import { SimCardsDTO } from 'src/units/externalUnits/simCards/simCards.dto';
import { SimCardsService } from 'src/units/externalUnits/simCards/simCards.service';
import { ContractTypeDTO } from 'src/units/users/contract/contractType/contractType.dto';
import { ContractTypeService } from 'src/units/users/contract/contractType/contractType.service';
import { UserContractDTO } from 'src/units/users/contract/userContract/userContract.dto';
import { UserContractService } from 'src/units/users/contract/userContract/userContract.service';
import { UsersDTO } from 'src/units/users/users.dto';
import { UsersService } from 'src/units/users/users.service';
import { HubDTO } from '../hubs/hub.dto';
import { HubService } from '../hubs/hub.service';
import { HubGroupsDTO } from '../hubs/hubGroups/hubGroups.dto';
import { HubGroupsService } from '../hubs/hubGroups/hubGroups.service';
import { HubSetupDTO } from '../hubs/hubSetup/hubSetup.dto';
import { HubSetupService } from '../hubs/hubSetup/hubSetup.service';
import { KhasSetupDTO } from '../khas/khasSetup.dto';
import { KhasSetupService } from '../khas/khasSetup.service';
import { MoistureConditionsDTO } from '../khas/moistureConditions/moistureConditions.dto';
import { MoistureConditionsService } from '../khas/moistureConditions/moistureConditions.service';
import { SmartCapillarityDTO } from '../khas/smartCapillarity/smartCapillarity.dto';
import { SmartCapillarityService } from '../khas/smartCapillarity/smartCapillarity.service';
import { PumpSetupDTO } from '../pumps/pumpSetup/pumpSetup.dto';
import { PumpSetupService } from '../pumps/pumpSetup/pumpSetup.service';
import { ValveCardGroupsDTO } from '../pumps/valveCardGroup/valveCardGroup.dto';
import { ValveCardGroupService } from '../pumps/valveCardGroup/valveCardGroup.service';
import { ValveConditionsDTO } from '../pumps/valveCondition/valveCondition.dto';
import { ValveConditionService } from '../pumps/valveCondition/valveCondition.service';
import { ValveSetupDTO } from '../pumps/valveSetup/valveSetup.dto';
import { ValveSetupService } from '../pumps/valveSetup/valveSetup.service';
import { WaterMeterGroupDTO } from '../pumps/waterMeterGroup/waterMeterGroup.dto';
import { WaterMeterGroupService } from '../pumps/waterMeterGroup/waterMeterGroup.service';
import { WaterMeterSetupDTO } from '../pumps/waterMeterSetup/waterMeterSetup.dto';
import { WaterMeterSetupService } from '../pumps/waterMeterSetup/waterMeterSetup.service';

@Controller('manuel-installation')
@ApiTags('OLD-SYSTEM Manuel Installation Endpoints')
@UseInterceptors(TransformInterceptor)
export class ManuelInstallationController {
  constructor(
    private readonly userService: UsersService,
    private readonly simCardService:SimCardsService,
    private readonly imeiService: ModemImeiService,
    private readonly contractTypeService: ContractTypeService,
    private readonly userContractService: UserContractService,
    private readonly hubService: HubService,
    private readonly hubSetupService: HubSetupService,
    private readonly hubGroupService: HubGroupsService,
    private readonly pumpSetupService: PumpSetupService,
    private readonly valveCardGroupService: ValveCardGroupService,
    private readonly valveSetupService: ValveSetupService,
    private readonly valveConditionService: ValveConditionService,
    private readonly waterMeterSetupService: WaterMeterSetupService,
    private readonly waterMeterGroupService: WaterMeterGroupService,
    private readonly khasSetupService: KhasSetupService,
    private readonly smartCapillarityService: SmartCapillarityService,
    private readonly moistureConditionsService: MoistureConditionsService,
  ) {}

  @Post('create-user')
  public async createUser(@Body() userDTO: UsersDTO): Promise<UsersDTO> {
    return await this.userService.Register(userDTO);
  }

  @Post('create-simcard')
  public async createSimCard(@Body() dto: SimCardsDTO): Promise<SimCardsDTO> {
    return await this.simCardService.create(dto);
  }

  @Post('create-imei')
  public async createImei(@Body() imeiDTO: ModemImeiRecordsDTO): Promise<ModemImeiRecordsDTO> {
    return await this.imeiService.create(imeiDTO);
  }

  @Post('contract-type')
  public async createContractType(@Body() contractTypeDTO: ContractTypeDTO): Promise<ContractTypeDTO> {
    return await this.contractTypeService.create(contractTypeDTO);
  }

  @Post('user-contract')
  public async createUserContract(@Body() userContractDTO: UserContractDTO): Promise<UserContractDTO> {
    return await this.userContractService.create(userContractDTO);
  }

  @Post('create-hub')
  public async createHub(@Body() hubDTO: HubDTO): Promise<HubDTO>{
    return await this.hubService.create(hubDTO);
  }

  @Post('hub-eeprom')
  public async installHubEeprom(@Body() hubSetupDTO:HubSetupDTO): Promise<HubSetupDTO> {
    return await this.hubSetupService.create(hubSetupDTO);
  }

  // ADIM 7 VE 7-A AYNI ÇÜNKÜ POMPA GRUBU AYNI ANDA BİR HUB GRUBUDUR. 
  @Post('create-hub-group')
  public async createHubGroup(@Body() hubGroupDTO: HubGroupsDTO): Promise<HubGroupsDTO> {
    return await this.hubGroupService.create(hubGroupDTO);
  }

  @Post('create-pump-group')
  public async createPumpGroup(@Body() pumpGroupDTO: PumpSetupDTO): Promise<PumpSetupDTO> {
    return await this.pumpSetupService.create(pumpGroupDTO);
  }

  @Post('create-valve-card')
  public async createPumpSubGroup(@Body() valveCardDTO: ValveCardGroupsDTO): Promise<ValveCardGroupsDTO> {
    return await this.valveCardGroupService.create(valveCardDTO);
  }

  @Post('create-valve-setup')
  public async createPumpSetup(@Body() valveSetupDTO: ValveSetupDTO): Promise<ValveSetupDTO> {
    return await this.valveSetupService.create(valveSetupDTO);
  }

  @Post('create-valve-condition')
  public async createValveCondition(@Body() valveConditionDTO: ValveConditionsDTO): Promise<ValveConditionsDTO> {
    return await this.valveConditionService.create(valveConditionDTO);
  }

  @Post('create-watermeter-group')
  public async createWAterMeterGroup(@Body() watermeterGroupDTO: WaterMeterGroupDTO): Promise<WaterMeterGroupDTO> {
    return await this.waterMeterGroupService.create(watermeterGroupDTO);
  }

  @Post('create-watermeter-setup')
  public async createWaterMeterSetup(@Body() watermeterSetupDTO: WaterMeterSetupDTO): Promise<WaterMeterSetupDTO> {
    return await this.waterMeterSetupService.create(watermeterSetupDTO); 
  }

  @Post('create-khas-setup')
  public async createKhas(@Body() khasDTO: KhasSetupDTO): Promise<KhasSetupDTO> {
    return await this.khasSetupService.create(khasDTO);
  }

  @Post('create-smartcapillarity')
  public async createSmartCapillarity(@Body() smartcapillarityDTO: SmartCapillarityDTO): Promise<SmartCapillarityDTO> {
    return await this.smartCapillarityService.create(smartcapillarityDTO);
  }

  @Post('create-moisture-conditions')
  public async createMoistureConditions(@Body() moistureConditionsDTO: MoistureConditionsDTO): Promise<MoistureConditionsDTO> {
    return await this.moistureConditionsService.create(moistureConditionsDTO);
  }

  
}
