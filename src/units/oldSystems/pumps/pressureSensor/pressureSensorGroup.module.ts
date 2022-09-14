import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressureSensorGroups } from 'src/model/OldSystem/Pumps/pressureSensorGroup.entity';
import { PressureSensorGroupController } from './pressureSensorGroup.controller';
import { PressureSensorGroupsService } from './pressureSensorGroup.service';




@Module({
  imports: [TypeOrmModule.forFeature([PressureSensorGroups])],
  providers: [PressureSensorGroupsService],
  controllers: [PressureSensorGroupController],
  exports: [PressureSensorGroupsService],
})
export class PressureSensorGroupsModule {}
