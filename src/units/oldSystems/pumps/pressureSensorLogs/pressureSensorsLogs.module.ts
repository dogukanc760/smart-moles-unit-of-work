import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressureSensorLogs } from 'src/model/OldSystem/Pumps/pressureSensorLogs.entity';
import { PressureSensorLogsController } from './pressureSensorsLogs.controller';
import { PressureSensorLogsService } from './pressureSensorsLogs.service';



@Module({
  imports: [TypeOrmModule.forFeature([PressureSensorLogs])],
  providers: [PressureSensorLogsService],
  controllers: [PressureSensorLogsController],
  exports: [PressureSensorLogsService],
})
export class PressureSensorLogsModule {}
