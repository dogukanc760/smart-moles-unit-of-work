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
import { SmartCapillarityLogsDTO } from './smartCapillarityLogs.dto';
import { SmartCapillarityLogsService } from './smartCapillarityLogs.service';

@Controller('smart-capillarity-logs')
@ApiTags('OLD-SYSTEM Smart Capillarity Logs Endpoints')
@UseInterceptors(TransformInterceptor)
export class SmartCapillarityLogsController {
  constructor(
    private smartCapillarityLogsService: SmartCapillarityLogsService,
  ) {}

  @Get()
  public async getAll(): Promise<SmartCapillarityLogsDTO[]> {
    return await this.smartCapillarityLogsService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<SmartCapillarityLogsDTO> {
    return await this.smartCapillarityLogsService.get(id);
  }

  @Get('/get-by-smart-capillarity/:id')
  public async getById(
    @Param('id') id: string,
  ): Promise<SmartCapillarityLogsDTO[]> {
    return await this.smartCapillarityLogsService.getBySmartCapillarity(id);
  }

  @Post()
  public async create(
    @Body() dto: SmartCapillarityLogsDTO,
  ): Promise<SmartCapillarityLogsDTO> {
    return await this.smartCapillarityLogsService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: SmartCapillarityLogsDTO,
  ): Promise<SmartCapillarityLogsDTO> {
    return await this.smartCapillarityLogsService.update(id, dto);
  }

  @Delete(':id')
  public async delete(
    @Param('id') id: string,
  ): Promise<SmartCapillarityLogsDTO> {
    return await this.smartCapillarityLogsService.delete(id);
  }
}
