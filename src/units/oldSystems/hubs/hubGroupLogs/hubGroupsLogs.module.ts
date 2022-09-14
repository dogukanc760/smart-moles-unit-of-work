import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HubGroupLogs } from 'src/model/OldSystem/Hub/hubGroupLogs.entity';
import { HubGroupLogsController } from './hubGroupsLogs.controller';
import { HubGroupsLogsService } from './hubGroupsLogs.service';




@Module({
  imports: [TypeOrmModule.forFeature([HubGroupLogs])],
  providers: [HubGroupsLogsService],
  controllers: [HubGroupLogsController],
  exports: [HubGroupsLogsService],
})
export class HubGroupLogsModule {}
