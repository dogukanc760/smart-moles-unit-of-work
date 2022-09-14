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
import { PressureSensorSetupDTO } from './pressureSensorSetup.dto';
import { PressureSensorSetupService } from './pressureSensorSetup.service';

  @Controller('pressure-sensor-setup')
  @ApiTags('OLD-SYSTEM Pressure Sensor Setup Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class PressureSensorSetupController {
    constructor(private pressureSensorSetupService: PressureSensorSetupService) {}
  
    @Get()
    public async getAll(): Promise<PressureSensorSetupDTO[]> {
      return await this.pressureSensorSetupService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<PressureSensorSetupDTO> {
      return await this.pressureSensorSetupService.get(id);
    }
  
    @Get('/get-by-pump/:id')
    public async getById(@Param('id') id: string): Promise<PressureSensorSetupDTO[]> {
      return await this.pressureSensorSetupService.getByParamsByPumpID(id);
    }
  
    @Post()
    public async create(@Body() dto: PressureSensorSetupDTO): Promise<PressureSensorSetupDTO> {
      return await this.pressureSensorSetupService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: PressureSensorSetupDTO,
    ): Promise<PressureSensorSetupDTO> {
      return await this.pressureSensorSetupService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<PressureSensorSetupDTO> {
      return await this.pressureSensorSetupService.delete(id);
    }
  }
  