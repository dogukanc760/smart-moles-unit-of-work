import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoistureConditions } from 'src/model/OldSystem/Khas/moistureConditions.entity';
import { MoistureConditionsController } from './moistureConditions.controller';
import { MoistureConditionsService } from './moistureConditions.service';


@Module({
  imports: [TypeOrmModule.forFeature([MoistureConditions])],
  providers: [MoistureConditionsService],
  controllers: [MoistureConditionsController],
  exports: [MoistureConditionsService],
})
export class MoistureConditionsModule {}
