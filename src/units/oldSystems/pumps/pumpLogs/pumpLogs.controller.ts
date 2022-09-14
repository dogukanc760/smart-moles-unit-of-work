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
import { PumpLogsDTO } from './pumpLogs.dto';
import { PumpLogsService } from './pumpLogs.service';

@Controller('pump-logs')
@ApiTags('OLD-SYSTEM Pressure Pump Logs Endpoints')
@UseInterceptors(TransformInterceptor)
export class PumpLogsController {
  constructor(
    private pumpLogsService: PumpLogsService,
  ) {}

  @Get()
  public async getAll(): Promise<PumpLogsDTO[]> {
    return await this.pumpLogsService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<PumpLogsDTO> {
    return await this.pumpLogsService.get(id);
  }

  @Get('/get-by-pump-logs/:id')
  public async getById(
    @Param('id') id: string,
  ): Promise<PumpLogsDTO[]> {
    return await this.pumpLogsService.getByPump(id);
  }

  @Post()
  public async create(
    @Body() dto: PumpLogsDTO,
  ): Promise<PumpLogsDTO> {
    return await this.pumpLogsService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: PumpLogsDTO,
  ): Promise<PumpLogsDTO> {
    return await this.pumpLogsService.update(id, dto);
  }

  @Delete(':id')
  public async delete(
    @Param('id') id: string,
  ): Promise<PumpLogsDTO> {
    return await this.pumpLogsService.delete(id);
  }
}
