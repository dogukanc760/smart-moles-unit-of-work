import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PressureSensorSetup } from 'src/model/OldSystem/Pumps/pressureSensorSetup.entity';
import { PressureSensorSetupController } from './pressureSensorSetup.controller';
import { PressureSensorSetupService } from './pressureSensorSetup.service';



@Module({
  imports: [TypeOrmModule.forFeature([PressureSensorSetup])],
  providers: [PressureSensorSetupService],
  controllers: [PressureSensorSetupController],
  exports: [PressureSensorSetupService],
})
export class PressureSensorSetupModule {}
