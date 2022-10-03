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
import { PressureSensorParamsDTO } from './pressureSensorParams.dto';
import { PressureSensorParamsService } from './pressureSensorParams.service';

  @Controller('pressure-sensor-params')
  @ApiTags('OLD-SYSTEM Pressure Sensor Params Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class PressureSensorParamsController {
    constructor(private pressureSensorParamsService: PressureSensorParamsService) {}
  
    @Get()
    public async getAll(): Promise<PressureSensorParamsDTO[]> {
      return await this.pressureSensorParamsService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<PressureSensorParamsDTO> {
      return await this.pressureSensorParamsService.get(id);
    }
  
    @Get('/get-by-valve/:id')
    public async getById(@Param('id') id: string): Promise<PressureSensorParamsDTO[]> {
      return await this.pressureSensorParamsService.getByParamsByValveID(id);
    }
  
    @Post()
    public async create(@Body() dto: PressureSensorParamsDTO): Promise<PressureSensorParamsDTO> {
      return await this.pressureSensorParamsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: PressureSensorParamsDTO,
    ): Promise<PressureSensorParamsDTO> {
      return await this.pressureSensorParamsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<PressureSensorParamsDTO> {
      return await this.pressureSensorParamsService.delete(id);
    }
  }
  