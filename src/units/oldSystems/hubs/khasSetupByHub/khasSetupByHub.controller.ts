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
import { KhasSetupByHubDTO } from './khasSetupByHub.dto';
import { KhasSetupByHubService } from './khasSetupByHub.service';

  @Controller('khas-setup-by-hub')
  @ApiTags('OLD-SYSTEM Khas Setup By Hub Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class KhasSetupByHubController {
    constructor(private khasSetupByHubService: KhasSetupByHubService) {}
  
    @Get()
    public async getAll(): Promise<KhasSetupByHubDTO[]> {
      return await this.khasSetupByHubService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<KhasSetupByHubDTO> {
      return await this.khasSetupByHubService.get(id);
    }
  
    @Get('/get-by-hub/:id')
    public async getById(@Param('id') id: string): Promise<KhasSetupByHubDTO[]> {
      return await this.khasSetupByHubService.getByHub(id);
    }
  
    @Post()
    public async create(@Body() dto: KhasSetupByHubDTO): Promise<KhasSetupByHubDTO> {
      return await this.khasSetupByHubService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: KhasSetupByHubDTO,
    ): Promise<KhasSetupByHubDTO> {
      return await this.khasSetupByHubService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<KhasSetupByHubDTO> {
      return await this.khasSetupByHubService.delete(id);
    }
  }
  