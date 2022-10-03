import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModemImeiRecordsModule } from 'src/units/externalUnits/modemImeriRecords/modemImeiRecords.module';
import { SimCardsModule } from 'src/units/externalUnits/simCards/simCards.module';
import { ContractTypesModule } from 'src/units/users/contract/contractType/contractType.module';
import { UserContractModule } from 'src/units/users/contract/userContract/userContract.module';
import { UsersModule } from 'src/units/users/users.module';
import { HubModule } from '../hubs/hub.module';
import { HubGroupsModule } from '../hubs/hubGroups/hubGroups.module';
import { HubSetupModule } from '../hubs/hubSetup/hubSetup.module';
import { KhasSetupModule } from '../khas/khasSetup.module';
import { MoistureConditionsModule } from '../khas/moistureConditions/moistureConditions.module';
import { SmartCapillarityModule } from '../khas/smartCapillarity/smartCapillarity.module';
import { PumpSetupModule } from '../pumps/pumpSetup/pumpSetup.module';
import { ValveCardGroupModule } from '../pumps/valveCardGroup/valveCardGroup.module';
import { ValveConditionModule } from '../pumps/valveCondition/valveCondition.module';
import { ValveSetupModule } from '../pumps/valveSetup/valveSetup.module';
import { WaterMeterGroupModule } from '../pumps/waterMeterGroup/waterMeterGroup.module';
import { WaterMeterSetupModule } from '../pumps/waterMeterSetup/waterMeterSetup.module';
import { ManuelInstallationController } from './manuelInstallation.controller';




@Module({
  imports: [
    UsersModule,
    SimCardsModule,
    ModemImeiRecordsModule,
    ContractTypesModule,
    UserContractModule,
    ContractTypesModule,
    HubModule,
    HubSetupModule,
    HubGroupsModule,
    PumpSetupModule,
    ValveCardGroupModule,
    ValveSetupModule,
    ValveConditionModule,
    WaterMeterSetupModule,
    WaterMeterGroupModule,
    KhasSetupModule,
    SmartCapillarityModule,
    MoistureConditionsModule,
  ],
  providers: [],
  controllers: [ManuelInstallationController],
  exports: [],
})
export class OldSystemManuelInstallModule {}
