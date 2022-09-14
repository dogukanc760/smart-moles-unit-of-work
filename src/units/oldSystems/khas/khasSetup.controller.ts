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
import { KhasSetupDTO } from './khasSetup.dto';
import { KhasSetupService } from './khasSetup.service';

@Controller('khas-setup')
@ApiTags('OLD-SYSTEM Khas Setup Endpoints')
@UseInterceptors(TransformInterceptor)
export class KhasSetupController {
  constructor(private khasSetupService: KhasSetupService) {}

  @Get()
  public async getAll(): Promise<KhasSetupDTO[]> {
    return await this.khasSetupService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<KhasSetupDTO> {
    return await this.khasSetupService.get(id);
  }

  @Get('/get-by-hub-group/:id')
  public async getById(@Param('id') id: string): Promise<KhasSetupDTO[]> {
    return await this.khasSetupService.getByHubGroup(id);
  }

  @Post()
  public async create(@Body() dto: KhasSetupDTO): Promise<KhasSetupDTO> {
    return await this.khasSetupService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: KhasSetupDTO,
  ): Promise<KhasSetupDTO> {
    return await this.khasSetupService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<KhasSetupDTO> {
    return await this.khasSetupService.delete(id);
  }
}
