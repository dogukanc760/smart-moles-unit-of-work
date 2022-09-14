import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterMeterSetup } from 'src/model/OldSystem/Pumps/waterMeterSetup.entity';
import { WaterMeterSetupController } from './waterMeterSetup.controller';
import { WaterMeterSetupService } from './waterMeterSetup.service';


@Module({
  imports: [TypeOrmModule.forFeature([WaterMeterSetup])],
  providers: [WaterMeterSetupService],
  controllers: [WaterMeterSetupController],
  exports: [WaterMeterSetupService],
})
export class WaterMeterSetupModule {}
