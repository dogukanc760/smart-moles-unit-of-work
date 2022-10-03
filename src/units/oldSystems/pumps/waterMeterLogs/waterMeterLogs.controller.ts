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
import { WaterMeterLogsDTO } from './waterMeterLogs.dto';
import { WaterMeterLogsService } from './waterMeterLogs.service';

  
  @Controller('water-meter-logs')
  @ApiTags('OLD-SYSTEM Water Meter Logs Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class WaterMeterLogsController {
    constructor(
      private waterMeterLogsService: WaterMeterLogsService,
    ) {}
  
    @Get()
    public async getAll(): Promise<WaterMeterLogsDTO[]> {
      return await this.waterMeterLogsService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<WaterMeterLogsDTO> {
      return await this.waterMeterLogsService.get(id);
    }
  
    @Get('/get-by-water-meter/:id')
    public async getById(
      @Param('id') id: string,
    ): Promise<WaterMeterLogsDTO[]> {
      return await this.waterMeterLogsService.getByWaterMeter(id);
    }
  
    @Post()
    public async create(
      @Body() dto: WaterMeterLogsDTO,
    ): Promise<WaterMeterLogsDTO> {
      return await this.waterMeterLogsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: WaterMeterLogsDTO,
    ): Promise<WaterMeterLogsDTO> {
      return await this.waterMeterLogsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(
      @Param('id') id: string,
    ): Promise<WaterMeterLogsDTO> {
      return await this.waterMeterLogsService.delete(id);
    }
  }
  