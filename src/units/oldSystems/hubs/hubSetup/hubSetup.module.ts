import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HubSetup } from 'src/model/OldSystem/Hub/hubSetup.entity';
import { HubSetupController } from './hubSetup.controller';
import { HubSetupService } from './hubSetup.service';




@Module({
  imports: [TypeOrmModule.forFeature([HubSetup])],
  providers: [HubSetupService],
  controllers: [HubSetupController],
  exports: [HubSetupService],
})
export class HubSetupModule {}
