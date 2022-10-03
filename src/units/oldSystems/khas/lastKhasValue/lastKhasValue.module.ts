import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LastKhasValues } from 'src/model/OldSystem/Khas/lastKhasValues.entity';
import { LastKhasValueController } from './lastKhasValue.controller';
import { LastKhasValueService } from './lastKhasValue.service';




@Module({
  imports: [TypeOrmModule.forFeature([LastKhasValues])],
  providers: [LastKhasValueService],
  controllers: [LastKhasValueController],
  exports: [LastKhasValueService],
})
export class LastKhasValueModule {}
