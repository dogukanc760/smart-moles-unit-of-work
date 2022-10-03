import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hub } from 'src/model/OldSystem/Hub/hub.entity';
import { HubController } from './hub.controller';
import { HubService } from './hub.service';




@Module({
  imports: [TypeOrmModule.forFeature([Hub])],
  providers: [HubService],
  controllers: [HubController],
  exports: [HubService],
})
export class HubModule {}
