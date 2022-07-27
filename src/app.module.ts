import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { DevicesLocationModule } from './units/externalUnits/devicesLocation/devicesLocation.module';
import { DeviceTypesModule } from './units/externalUnits/devicesTypes/devicesTypes.module';
import { IrrigationTypesModule } from './units/externalUnits/irrigationTypes/irrigationTypes.module';
import { ModemImeiRecordsModule } from './units/externalUnits/modemImeriRecords/modemImeiRecords.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    DevicesLocationModule,
    DeviceTypesModule,
    IrrigationTypesModule,
    ModemImeiRecordsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
