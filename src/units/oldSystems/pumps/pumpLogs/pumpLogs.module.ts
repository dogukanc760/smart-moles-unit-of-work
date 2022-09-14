import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PumpLogs } from 'src/model/OldSystem/Pumps/pumpLogs.entity';
import { PumpLogsController } from './pumpLogs.controller';
import { PumpLogsService } from './pumpLogs.service';


@Module({
  imports: [TypeOrmModule.forFeature([PumpLogs])],
  providers: [PumpLogsService],
  controllers: [PumpLogsController],
  exports: [PumpLogsService],
})
export class PumpLogsModule {}
