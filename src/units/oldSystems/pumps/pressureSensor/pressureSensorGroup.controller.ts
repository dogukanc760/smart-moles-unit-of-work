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
import { PressureSensorGroupsDTO } from './pressureSensorGroup.dto';
import { PressureSensorGroupsService } from './pressureSensorGroup.service';

  @Controller('pressure-sensor-group')
  @ApiTags('OLD-SYSTEM Pressure Sensor Group Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class PressureSensorGroupController {
    constructor(private pressureSensorGroupService: PressureSensorGroupsService) {}
  
    @Get()
    public async getAll(): Promise<PressureSensorGroupsDTO[]> {
      return await this.pressureSensorGroupService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<PressureSensorGroupsDTO> {
      return await this.pressureSensorGroupService.get(id);
    }
  
    @Get('/get-by-sensor-setup/:id')
    public async getById(@Param('id') id: string): Promise<PressureSensorGroupsDTO[]> {
      return await this.pressureSensorGroupService.getByPressureSensorSetupID(id);
    }
  
    @Post()
    public async create(@Body() dto: PressureSensorGroupsDTO): Promise<PressureSensorGroupsDTO> {
      return await this.pressureSensorGroupService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: PressureSensorGroupsDTO,
    ): Promise<PressureSensorGroupsDTO> {
      return await this.pressureSensorGroupService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<PressureSensorGroupsDTO> {
      return await this.pressureSensorGroupService.delete(id);
    }
  }
  