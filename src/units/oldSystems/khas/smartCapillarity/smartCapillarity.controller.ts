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
import { SmartCapillarityDTO } from './smartCapillarity.dto';
import { SmartCapillarityService } from './smartCapillarity.service';

  @Controller('smart-capillarity')
  @ApiTags('OLD-SYSTEM Smart Capillarity Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class SmartCapillarityController {
    constructor(private smartCapillarityService: SmartCapillarityService) {}
  
    @Get()
    public async getAll(): Promise<SmartCapillarityDTO[]> {
      return await this.smartCapillarityService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<SmartCapillarityDTO> {
      return await this.smartCapillarityService.get(id);
    }
  
    @Get('/get-by-khas/:id')
    public async getById(@Param('id') id: string): Promise<SmartCapillarityDTO[]> {
      return await this.smartCapillarityService.getByKhas(id);
    }
  
    @Post()
    public async create(@Body() dto: SmartCapillarityDTO): Promise<SmartCapillarityDTO> {
      return await this.smartCapillarityService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: SmartCapillarityDTO,
    ): Promise<SmartCapillarityDTO> {
      return await this.smartCapillarityService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<SmartCapillarityDTO> {
      return await this.smartCapillarityService.delete(id);
    }
  }
  