import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmartCapillarityLogs } from 'src/model/OldSystem/Khas/smartCapillarityLogs.entity';
import { SmartCapillarityLogsController } from './smartCapillarityLogs.controller';
import { SmartCapillarityLogsService } from './smartCapillarityLogs.service';



@Module({
  imports: [TypeOrmModule.forFeature([SmartCapillarityLogs])],
  providers: [SmartCapillarityLogsService],
  controllers: [SmartCapillarityLogsController],
  exports: [SmartCapillarityLogsService],
})
export class SmartCapillarityLogsModule {}
