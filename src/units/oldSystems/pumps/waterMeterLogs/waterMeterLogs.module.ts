import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterMeterLogs } from 'src/model/OldSystem/Pumps/waterMeterLogs.entity';
import { WaterMeterLogsController } from './waterMeterLogs.controller';
import { WaterMeterLogsService } from './waterMeterLogs.service';


@Module({
  imports: [TypeOrmModule.forFeature([WaterMeterLogs])],
  providers: [WaterMeterLogsService],
  controllers: [WaterMeterLogsController],
  exports: [WaterMeterLogsService],
})
export class WaterMeterModules {}
