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
    GatewayMoistureConditionsModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
