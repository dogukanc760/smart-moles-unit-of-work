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
import { PressureSensorsLogsDTO } from './pressureSensorLogs.dto';
import { PressureSensorLogsService } from './pressureSensorsLogs.service';

@Controller('pressure-sensor-logs')
@ApiTags('OLD-SYSTEM Pressure Sensor Logs Endpoints')
@UseInterceptors(TransformInterceptor)
export class PressureSensorLogsController {
  constructor(
    private pressureSensorLogsService: PressureSensorLogsService,
  ) {}

  @Get()
  public async getAll(): Promise<PressureSensorsLogsDTO[]> {
    return await this.pressureSensorLogsService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<PressureSensorsLogsDTO> {
    return await this.pressureSensorLogsService.get(id);
  }

  @Get('/get-by-pressuresensor-logs/:id')
  public async getById(
    @Param('id') id: string,
  ): Promise<PressureSensorsLogsDTO[]> {
    return await this.pressureSensorLogsService.getByPressureSensor(id);
  }

  @Post()
  public async create(
    @Body() dto: PressureSensorsLogsDTO,
  ): Promise<PressureSensorsLogsDTO> {
    return await this.pressureSensorLogsService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: PressureSensorsLogsDTO,
  ): Promise<PressureSensorsLogsDTO> {
    return await this.pressureSensorLogsService.update(id, dto);
  }

  @Delete(':id')
  public async delete(
    @Param('id') id: string,
  ): Promise<PressureSensorsLogsDTO> {
    return await this.pressureSensorLogsService.delete(id);
  }
}
