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
import { LastKhasValueDTO } from './lastKhasValue.dto';
import { LastKhasValueService } from './lastKhasValue.service';

  @Controller('last-khas-value')
  @ApiTags('OLD-SYSTEM Last Khas Value Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class LastKhasValueController {
    constructor(private lastKhasValueService: LastKhasValueService) {}
  
    @Get()
    public async getAll(): Promise<LastKhasValueDTO[]> {
      return await this.lastKhasValueService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<LastKhasValueDTO> {
      return await this.lastKhasValueService.get(id);
    }
  
    @Get('/get-by-smart-capillarity/:id')
    public async getById(@Param('id') id: string): Promise<LastKhasValueDTO[]> {
      return await this.lastKhasValueService.getBySmartCapillarity(id);
    }
  
    @Post()
    public async create(@Body() dto: LastKhasValueDTO): Promise<LastKhasValueDTO> {
      return await this.lastKhasValueService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: LastKhasValueDTO,
    ): Promise<LastKhasValueDTO> {
      return await this.lastKhasValueService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<LastKhasValueDTO> {
      return await this.lastKhasValueService.delete(id);
    }
  }
  