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
import { WaterMeterSetupDTO } from './waterMeterSetup.dto';
import { WaterMeterSetupService } from './waterMeterSetup.service';

  @Controller('water-meter-setup')
  @ApiTags('OLD-SYSTEM Water Meter Setup Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class WaterMeterSetupController {
    constructor(private waterMeterSetupService: WaterMeterSetupService) {}
  
    @Get()
    public async getAll(): Promise<WaterMeterSetupDTO[]> {
      return await this.waterMeterSetupService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<WaterMeterSetupDTO> {
      return await this.waterMeterSetupService.get(id);
    }
  
    @Get('/get-by-pump/:id')
    public async getById(@Param('id') id: string): Promise<WaterMeterSetupDTO[]> {
      return await this.waterMeterSetupService.getByParamsByPumpID(id);
    }
  
    @Post()
    public async create(@Body() dto: WaterMeterSetupDTO): Promise<WaterMeterSetupDTO> {
      return await this.waterMeterSetupService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: WaterMeterSetupDTO,
    ): Promise<WaterMeterSetupDTO> {
      return await this.waterMeterSetupService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<WaterMeterSetupDTO> {
      return await this.waterMeterSetupService.delete(id);
    }
  }
  