import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HubLogs } from 'src/model/OldSystem/Hub/hubLogs.entity';
import { HubLogsController } from './hubLogs.controller';
import { HubLogsService } from './hubLogs.service';



@Module({
  imports: [TypeOrmModule.forFeature([HubLogs])],
  providers: [HubLogsService],
  controllers: [HubLogsController],
  exports: [HubLogsService],
})
export class HubLogsModule {}
