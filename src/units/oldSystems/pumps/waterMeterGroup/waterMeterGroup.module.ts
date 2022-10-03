import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterMeterGroup } from 'src/model/OldSystem/Pumps/waterMeterGroup.entity';
import { WaterMeterGroupController } from './waterMeterGroup.controller';
import { WaterMeterGroupService } from './waterMeterGroup.service';

@Module({
  imports: [TypeOrmModule.forFeature([WaterMeterGroup])],
  providers: [WaterMeterGroupService],
  controllers: [WaterMeterGroupController],
  exports: [WaterMeterGroupService],
})
export class WaterMeterGroupModule {}
