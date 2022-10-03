import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KhasSetup } from 'src/model/OldSystem/Khas/khasSetup.entity';
import { KhasSetupController } from './khasSetup.controller';
import { KhasSetupService } from './khasSetup.service';




@Module({
  imports: [TypeOrmModule.forFeature([KhasSetup])],
  providers: [KhasSetupService],
  controllers: [KhasSetupController],
  exports: [KhasSetupService],
})
export class KhasSetupModule {}
