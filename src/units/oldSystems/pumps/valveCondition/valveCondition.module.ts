import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValveConditions } from 'src/model/OldSystem/Pumps/valveCondition.entity';
import { ValveConditionsController } from './valveCondition.controller';
import { ValveConditionService } from './valveCondition.service';

@Module({
  imports: [TypeOrmModule.forFeature([ValveConditions])],
  providers: [ValveConditionService],
  controllers: [ValveConditionsController],
  exports: [ValveConditionService],
})
export class ValveConditionModule {}
