import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValveSetups } from 'src/model/OldSystem/Pumps/valveSetups.entity';
import { ValveSetupController } from './valveSetup.controller';
import { ValveSetupService } from './valveSetup.service';

@Module({
  imports: [TypeOrmModule.forFeature([ValveSetups])],
  providers: [ValveSetupService],
  controllers: [ValveSetupController],
  exports: [ValveSetupService],
})
export class ValveSetupModule {}
