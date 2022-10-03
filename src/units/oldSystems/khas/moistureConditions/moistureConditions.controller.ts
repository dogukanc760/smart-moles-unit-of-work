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
import { MoistureConditionsDTO } from './moistureConditions.dto';
import { MoistureConditionsService } from './moistureConditions.service';

@Controller('moisture-conditions')
@ApiTags('OLD-SYSTEM Moisture Conditions Endpoints')
@UseInterceptors(TransformInterceptor)
export class MoistureConditionsController {
  constructor(private moistureConditionsService: MoistureConditionsService) {}

  @Get()
  public async getAll(): Promise<MoistureConditionsDTO[]> {
    return await this.moistureConditionsService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<MoistureConditionsDTO> {
    return await this.moistureConditionsService.get(id);
  }

  @Get('/get-by-khas/:id')
  public async getById(
    @Param('id') id: string,
  ): Promise<MoistureConditionsDTO[]> {
    return await this.moistureConditionsService.getByKhas(id);
  }

  @Post()
  public async create(
    @Body() dto: MoistureConditionsDTO,
  ): Promise<MoistureConditionsDTO> {
    return await this.moistureConditionsService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: MoistureConditionsDTO,
  ): Promise<MoistureConditionsDTO> {
    return await this.moistureConditionsService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<MoistureConditionsDTO> {
    return await this.moistureConditionsService.delete(id);
  }
}
