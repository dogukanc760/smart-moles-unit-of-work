import { GatewayFieldsModule } from './units/gateway/gatewayFields/gatewayFields.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { DevicesLocationModule } from './units/externalUnits/devicesLocation/devicesLocation.module';
import { DeviceTypesModule } from './units/externalUnits/devicesTypes/devicesTypes.module';
import { IrrigationTypesModule } from './units/externalUnits/irrigationTypes/irrigationTypes.module';
import { ModemImeiRecordsModule } from './units/externalUnits/modemImeriRecords/modemImeiRecords.module';
import { PlantsModule } from './units/externalUnits/plants/plants.module';
import { SimCardsModule } from './units/externalUnits/simCards/simCards.module';
import { GatewayModule } from './units/gateway/gateway.module';
import { GatewayKhasConditionsModule } from './units/gateway/gatewayKhasConditions/gatewayKhasConditions.module';
import { GatewayLogsModule } from './units/gateway/gatewayLogs/gatewayLogs.module';
import { GatewayMoistureConditionsModule } from './units/gateway/gatewayMoistureConditions/gatewayMoistureConditions.module';
import { SmartRootModule } from './units/smartRoot/smartRoot.module';
import { SmartRootDetailFirstModule } from './units/smartRoot/smartRootDetailFirst/smartRootDetailFirst.module';
import { SmartRootDetailSecondModule } from './units/smartRoot/smartRootDetailSecond/smartRootDetailSecond.module';
import { WorkGroupModule } from './units/workGroup/workGroup/workGroup.module';
import { WorkGroupLogsModule } from './units/workGroup/workGroupLogs/workGroupsLog.module';
import { ManuelValveStrategiesModule } from './units/workGroup/sensors/manuelValveStrategies/manuelValveStrategies.module';
import { PumpManagementTypesModule } from './units/workGroup/sensors/pumpManagementTypes/pumpManagementTypes.module';
import { SensorCalibrationLogModule } from './units/workGroup/sensors/sensorCalibrationLogs/sensorCalibrationLog.module';
import { SensorCardLogsModule } from './units/workGroup/sensors/sensorCardLogs/sensorCardLogs.Module';
import { SensorCardParamsModule } from './units/workGroup/sensors/sensorCardParams/sensorCardParams.module';
import { SensorCardsModule } from './units/workGroup/sensors/sensorCards/sensorCards.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    
    //External Units
    DevicesLocationModule,
    DeviceTypesModule,
    IrrigationTypesModule,
    ModemImeiRecordsModule,
    PlantsModule,
    SimCardsModule,

    //Gateways 
    GatewayModule,
    GatewayFieldsModule,
    GatewayKhasConditionsModule,
    GatewayLogsModule,
    GatewayMoistureConditionsModule,

    //SmartRoots
    SmartRootModule,
    SmartRootDetailFirstModule,
    SmartRootDetailSecondModule,

    //Work Groups
    WorkGroupModule,
    WorkGroupLogsModule,
    ManuelValveStrategiesModule,
    PumpManagementTypesModule,
    SensorCalibrationLogModule,
    SensorCardLogsModule,
    SensorCardParamsModule,
    SensorCardsModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
