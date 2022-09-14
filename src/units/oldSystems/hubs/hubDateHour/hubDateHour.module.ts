import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HubDateHour } from 'src/model/OldSystem/Hub/hubDateHour.entity';
import { HubDateHourController } from './hubDateHour.controller';
import { HubDateHourService } from './hubDateHour.service';




@Module({
  imports: [TypeOrmModule.forFeature([HubDateHour])],
  providers: [HubDateHourService],
  controllers: [HubDateHourController],
  exports: [HubDateHourService],
})
export class HubDateHourModule {}
