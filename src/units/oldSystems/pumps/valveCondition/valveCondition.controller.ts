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
import { ValveConditionsDTO } from './valveCondition.dto';

import { ValveConditionService } from './valveCondition.service';
  
  @Controller('valve-conditions')
  @ApiTags('OLD-SYSTEM Valve Conditions Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class ValveConditionsController {
    constructor(private valveConditionService: ValveConditionService) {}
  
    @Get()
    public async getAll(): Promise<ValveConditionsDTO[]> {
      return await this.valveConditionService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<ValveConditionsDTO> {
      return await this.valveConditionService.get(id);
    }
  
    @Get('/get-by-valve/:id')
    public async getById(@Param('id') id: string): Promise<ValveConditionsDTO[]> {
      return await this.valveConditionService.getByParamsByValve(id);
    }
  
    @Post()
    public async create(
      @Body() dto: ValveConditionsDTO,
    ): Promise<ValveConditionsDTO> {
      return await this.valveConditionService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: ValveConditionsDTO,
    ): Promise<ValveConditionsDTO> {
      return await this.valveConditionService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<ValveConditionsDTO> {
      return await this.valveConditionService.delete(id);
    }
  }
  