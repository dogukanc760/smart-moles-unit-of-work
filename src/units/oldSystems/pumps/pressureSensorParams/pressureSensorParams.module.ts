import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressureSensorParams } from 'src/model/OldSystem/Pumps/pressureSensorParams.entity';
import { PressureSensorParamsController } from './pressureSensorParams.controller';
import { PressureSensorParamsService } from './pressureSensorParams.service';



@Module({
  imports: [TypeOrmModule.forFeature([PressureSensorParams])],
  providers: [PressureSensorParamsService],
  controllers: [PressureSensorParamsController],
  exports: [PressureSensorParamsService],
})
export class PressureSensorParamsModule {}
