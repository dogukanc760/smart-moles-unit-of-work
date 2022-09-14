import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SmartCapillarity } from 'src/model/OldSystem/Khas/smartCapillarity.entity';
import { SmartCapillarityController } from './smartCapillarity.controller';
import { SmartCapillarityService } from './smartCapillarity.service';




@Module({
  imports: [TypeOrmModule.forFeature([SmartCapillarity])],
  providers: [SmartCapillarityService],
  controllers: [SmartCapillarityController],
  exports: [SmartCapillarityService],
})
export class SmartCapillarityModule {}
