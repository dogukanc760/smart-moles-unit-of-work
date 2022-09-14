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
import { HubDTO } from './hub.dto';
import { HubService } from './hub.service';

@Controller('hub')
@ApiTags('OLD-SYSTEM Hub Endpoints')
@UseInterceptors(TransformInterceptor)
export class HubController {
  constructor(private hubService: HubService) {}

  @Get()
  public async getAll(): Promise<HubDTO[]> {
    return await this.hubService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<HubDTO> {
    return await this.hubService.get(id);
  }

  @Get('/get-by-user/:id')
  public async getById(@Param('id') id: string): Promise<HubDTO[]> {
    return await this.hubService.getByUser(id);
  }

  @Post()
  public async create(@Body() dto: HubDTO): Promise<HubDTO> {
    return await this.hubService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: HubDTO,
  ): Promise<HubDTO> {
    return await this.hubService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<HubDTO> {
    return await this.hubService.delete(id);
  }
}
