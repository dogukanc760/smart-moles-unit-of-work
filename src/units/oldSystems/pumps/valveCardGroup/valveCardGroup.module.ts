import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValveCardGroups } from 'src/model/OldSystem/Pumps/valveCardGroup.entity';
import { ValveCardGroupController } from './valveCardGroup.controller';
import { ValveCardGroupService } from './valveCardGroup.service';


@Module({
  imports: [TypeOrmModule.forFeature([ValveCardGroups])],
  providers: [ValveCardGroupService],
  controllers: [ValveCardGroupController],
  exports: [ValveCardGroupService],
})
export class ValveCardGroupModule {}
