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
import { HubDateHourDTO } from './hubDateHour.dto';
import { HubDateHourService } from './hubDateHour.service';

  
  @Controller('hubDateHour')
  @ApiTags('OLD-SYSTEM Hub Date Hour Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class HubDateHourController {
    constructor(private hubDateHourService: HubDateHourService) {}
  
    @Get()
    public async getAll(): Promise<HubDateHourDTO[]> {
      return await this.hubDateHourService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<HubDateHourDTO> {
      return await this.hubDateHourService.get(id);
    }
  
    @Get('/get-by-hub/:id')
    public async getByHub(@Param('id') id: string): Promise<HubDateHourDTO[]> {
      return await this.hubDateHourService.getByHub(id);
    }
  
    @Post()
    public async create(@Body() dto: HubDateHourDTO): Promise<HubDateHourDTO> {
      return await this.hubDateHourService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: HubDateHourDTO,
    ): Promise<HubDateHourDTO> {
      return await this.hubDateHourService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<HubDateHourDTO> {
      return await this.hubDateHourService.delete(id);
    }
  }
  