import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { GatewayModule } from 'src/units/gateway/gateway.module';
import { GatewayService } from 'src/units/gateway/gateway.service';
import { GatewayLogsModule } from 'src/units/gateway/gatewayLogs/gatewayLogs.module';
import { GatewayLogsService } from 'src/units/gateway/gatewayLogs/gatewayLogs.service';
import { SensorCalibrationLogModule } from 'src/units/workGroup/sensors/sensorCalibrationLogs/sensorCalibrationLog.module';
import { SensorCardLogsModule } from 'src/units/workGroup/sensors/sensorCardLogs/sensorCardLogs.Module';
import { SensorCardParamsModule } from 'src/units/workGroup/sensors/sensorCardParams/sensorCardParams.module';
import { SensorCardsModule } from 'src/units/workGroup/sensors/sensorCards/sensorCards.module';
import { SensorCardsService } from 'src/units/workGroup/sensors/sensorCards/sensorCards.service';
import { SensorMoistureLogModule } from 'src/units/workGroup/sensors/sensorMoistureLogs/sensorMoistureLog.module';
import { WorkGroupModule } from 'src/units/workGroup/workGroup/workGroup.module';
import { WorkGroupLogsModule } from 'src/units/workGroup/workGroupLogs/workGroupsLog.module';
import { ModemImeiRecordsModule } from '../externalUnits/modemImeriRecords/modemImeiRecords.module';
import { SimCardsModule } from '../externalUnits/simCards/simCards.module';
import { GatewayFieldsModule } from '../gateway/gatewayFields/gatewayFields.module';
import { SmartRootModule } from '../smartRoot/smartRoot.module';
import { ContractTypesModule } from '../users/contract/contractType/contractType.module';
import { SubscriptionModule } from '../users/contract/subscription/subscription.module';
import { UserContractModule } from '../users/contract/userContract/userContract.module';
import { UsersModule } from '../users/users.module';
import { PumpCardsModule } from '../workGroup/valveCards/pumpCards/pumpCards.module';
import { ValveCardsModule } from '../workGroup/valveCards/valveCards/valveCards.module';
import { SystemInstallationController } from './systemInstallation.controller';
import { SystemInstallationService } from './systemInstallation.service';

@Module({
  imports: [
    GatewayLogsModule,
    GatewayModule,
    SensorCardsModule,
    UsersModule,
    GatewayFieldsModule,
    PumpCardsModule,
    ValveCardsModule,
    WorkGroupModule,
    WorkGroupLogsModule,
    SensorMoistureLogModule,
    SensorCalibrationLogModule,
    SensorCardParamsModule,
    SensorCardLogsModule,
    SmartRootModule,
    UserContractModule,
    ContractTypesModule,
    SubscriptionModule,
    SimCardsModule,
    ModemImeiRecordsModule
    
  ],
  providers: [SystemInstallationService],
  controllers: [SystemInstallationController],
  exports: [SystemInstallationService],
})
export class SystemInstallationModules {}
