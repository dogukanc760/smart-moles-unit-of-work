import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoistureSetupByHub } from 'src/model/OldSystem/Hub/moistureSetupByHub.entity';
import { MoistureSetupByHubController } from './moistureSetupByHub.controller';
import { MoistureSetupByHubService } from './moistureSetupByHub.service';



@Module({
  imports: [TypeOrmModule.forFeature([MoistureSetupByHub])],
  providers: [MoistureSetupByHubService],
  controllers: [MoistureSetupByHubController],
  exports: [MoistureSetupByHubService],
})
export class MoistureSetupByHubModule {}
