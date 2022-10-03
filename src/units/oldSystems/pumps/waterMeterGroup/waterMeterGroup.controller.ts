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
import { WaterMeterGroupDTO } from './waterMeterGroup.dto';
import { WaterMeterGroupService } from './waterMeterGroup.service';

@Controller('water-meter-group')
@ApiTags('OLD-SYSTEM Water Meter Group Endpoints')
@UseInterceptors(TransformInterceptor)
export class WaterMeterGroupController {
  constructor(private waterMeterGroupService: WaterMeterGroupService) {}

  @Get()
  public async getAll(): Promise<WaterMeterGroupDTO[]> {
    return await this.waterMeterGroupService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<WaterMeterGroupDTO> {
    return await this.waterMeterGroupService.get(id);
  }

  @Get('/get-by-water-meter/:id')
  public async getById(@Param('id') id: string): Promise<WaterMeterGroupDTO[]> {
    return await this.waterMeterGroupService.getByParamsByWaterMeter(id);
  }

  @Post()
  public async create(
    @Body() dto: WaterMeterGroupDTO,
  ): Promise<WaterMeterGroupDTO> {
    return await this.waterMeterGroupService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: WaterMeterGroupDTO,
  ): Promise<WaterMeterGroupDTO> {
    return await this.waterMeterGroupService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<WaterMeterGroupDTO> {
    return await this.waterMeterGroupService.delete(id);
  }
}
