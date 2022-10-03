import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TParamatersByValve } from 'src/model/OldSystem/Pumps/tParametersByValve.entity';
import { TParamatersByValveController } from './tParamatersByValve.controller';
import { TParamatersByValveService } from './tParamatersByValve.service';



@Module({
  imports: [TypeOrmModule.forFeature([TParamatersByValve])],
  providers: [TParamatersByValveService],
  controllers: [TParamatersByValveController],
  exports: [TParamatersByValveService],
})
export class TParamatersByValveModule {}
