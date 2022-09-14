import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KhasSetupByHub } from 'src/model/OldSystem/Hub/khasSetupByHub.entity';
import { KhasSetupByHubController } from './khasSetupByHub.controller';
import { KhasSetupByHubService } from './khasSetupByHub.service';




@Module({
  imports: [TypeOrmModule.forFeature([KhasSetupByHub])],
  providers: [KhasSetupByHubService],
  controllers: [KhasSetupByHubController],
  exports: [KhasSetupByHubService],
})
export class KhasSetupByHubModule {}
