import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HubGroups } from 'src/model/OldSystem/Hub/hubGroups.entity';
import { HubGroupController } from './hubGroups.controller';
import { HubGroupsService } from './hubGroups.service';



@Module({
  imports: [TypeOrmModule.forFeature([HubGroups])],
  providers: [HubGroupsService],
  controllers: [HubGroupController],
  exports: [HubGroupsService],
})
export class HubGroupsModule {}
