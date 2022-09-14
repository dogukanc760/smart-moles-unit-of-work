import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PumpSetups } from 'src/model/OldSystem/Pumps/pumpSetup.entity';
import { PumpSetupController } from './pumpSetup.controller';
import { PumpSetupService } from './pumpSetup.service';



@Module({
  imports: [TypeOrmModule.forFeature([PumpSetups])],
  providers: [PumpSetupService],
  controllers: [PumpSetupController],
  exports: [PumpSetupService],
})
export class PumpSetupModule {}
