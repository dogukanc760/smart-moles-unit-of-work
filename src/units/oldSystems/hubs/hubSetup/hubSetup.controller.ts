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
import { HubSetupDTO } from './hubSetup.dto';
import { HubSetupService } from './hubSetup.service';

@Controller('hub-setup')
@ApiTags('OLD-SYSTEM Hub Setup Endpoints')
@UseInterceptors(TransformInterceptor)
export class HubSetupController {
  constructor(private hubSetupService: HubSetupService) {}

  @Get()
  public async getAll(): Promise<HubSetupDTO[]> {
    return await this.hubSetupService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<HubSetupDTO> {
    return await this.hubSetupService.get(id);
  }

  @Get('/get-by-hub/:id')
  public async getById(@Param('id') id: string): Promise<HubSetupDTO[]> {
    return await this.hubSetupService.getByHub(id);
  }

  @Post()
  public async create(@Body() dto: HubSetupDTO): Promise<HubSetupDTO> {
    return await this.hubSetupService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: HubSetupDTO,
  ): Promise<HubSetupDTO> {
    return await this.hubSetupService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<HubSetupDTO> {
    return await this.hubSetupService.delete(id);
  }
}
