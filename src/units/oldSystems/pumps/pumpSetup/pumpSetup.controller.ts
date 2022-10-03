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
import { PumpSetupDTO } from './pumpSetup.dto';
import { PumpSetupService } from './pumpSetup.service';

  @Controller('pump-setup')
  @ApiTags('OLD-SYSTEM Pump Setup Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class PumpSetupController {
    constructor(private pumpSetupService: PumpSetupService) {}
  
    @Get()
    public async getAll(): Promise<PumpSetupDTO[]> {
      return await this.pumpSetupService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<PumpSetupDTO> {
      return await this.pumpSetupService.get(id);
    }
  
    @Get('/get-by-hub-group/:id')
    public async getById(@Param('id') id: string): Promise<PumpSetupDTO[]> {
      return await this.pumpSetupService.getByParamsByHubGroupID(id);
    }
  
    @Post()
    public async create(@Body() dto: PumpSetupDTO): Promise<PumpSetupDTO> {
      return await this.pumpSetupService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: PumpSetupDTO,
    ): Promise<PumpSetupDTO> {
      return await this.pumpSetupService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<PumpSetupDTO> {
      return await this.pumpSetupService.delete(id);
    }
  }
  