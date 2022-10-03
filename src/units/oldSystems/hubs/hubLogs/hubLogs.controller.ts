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
import { HubLogsDTO } from './hubLogs.dto';
import { HubLogsService } from './hubLogs.service';

@Controller('hubGroupLogs')
@ApiTags('OLD-SYSTEM Hub Logs Endpoints')
@UseInterceptors(TransformInterceptor)
export class HubLogsController {
  constructor(private hubLogsService: HubLogsService) {}

  @Get()
  public async getAll(): Promise<HubLogsDTO[]> {
    return await this.hubLogsService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<HubLogsDTO> {
    return await this.hubLogsService.get(id);
  }

  @Get('/get-by-hub/:id')
  public async getById(@Param('id') id: string): Promise<HubLogsDTO[]> {
    return await this.hubLogsService.getByHub(id);
  }

  @Post()
  public async create(@Body() dto: HubLogsDTO): Promise<HubLogsDTO> {
    return await this.hubLogsService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: HubLogsDTO,
  ): Promise<HubLogsDTO> {
    return await this.hubLogsService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<HubLogsDTO> {
    return await this.hubLogsService.delete(id);
  }
}
