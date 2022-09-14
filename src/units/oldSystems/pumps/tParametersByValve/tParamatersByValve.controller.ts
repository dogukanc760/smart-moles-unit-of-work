import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransformInterceptor } from 'src/libs/api-results/standart-results';
import { TParamatersByValveDTO } from './tParamatersByValve.dto';
import { TParamatersByValveService } from './tParamatersByValve.service';

@Controller('t-paramaters')
@ApiTags('OLD-SYSTEM T Paramaters By Valve Endpoints')
@UseInterceptors(TransformInterceptor)
export class TParamatersByValveController {
  constructor(private tParamatersValveService: TParamatersByValveService) {}

  @Get()
  public async getAll(): Promise<TParamatersByValveDTO[]> {
    return await this.tParamatersValveService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<TParamatersByValveDTO> {
    return await this.tParamatersValveService.get(id);
  }

  @Get('/get-by-valve/:id')
  public async getById(
    @Param('id') id: string,
  ): Promise<TParamatersByValveDTO[]> {
    return await this.tParamatersValveService.getByParamsByValve(id);
  }

  @Post()
  public async create(
    @Body() dto: TParamatersByValveDTO,
  ): Promise<TParamatersByValveDTO> {
    return await this.tParamatersValveService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: TParamatersByValveDTO,
  ): Promise<TParamatersByValveDTO> {
    return await this.tParamatersValveService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<TParamatersByValveDTO> {
    return await this.tParamatersValveService.delete(id);
  }
}
