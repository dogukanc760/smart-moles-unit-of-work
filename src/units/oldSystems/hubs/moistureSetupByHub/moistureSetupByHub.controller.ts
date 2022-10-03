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
import { MoistureSetupByHubDTO } from './moistureSetupByHub.dto';
import { MoistureSetupByHubService } from './moistureSetupByHub.service';
 
  @Controller('moisture-setup-by-hub')
  @ApiTags('OLD-SYSTEM Moisture Setup By Hub Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class MoistureSetupByHubController {
    constructor(private moistureSetupByHubService: MoistureSetupByHubService ) {}
  
    @Get()
    public async getAll(): Promise<MoistureSetupByHubDTO[]> {
      return await this.moistureSetupByHubService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<MoistureSetupByHubDTO> {
      return await this.moistureSetupByHubService.get(id);
    }
  
    @Get('/get-by-hub/:id')
    public async getById(@Param('id') id: string): Promise<MoistureSetupByHubDTO[]> {
      return await this.moistureSetupByHubService.geyByHub(id);
    }
  
    @Post()
    public async create(@Body() dto: MoistureSetupByHubDTO): Promise<MoistureSetupByHubDTO> {
      return await this.moistureSetupByHubService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: MoistureSetupByHubDTO,
    ): Promise<MoistureSetupByHubDTO> {
      return await this.moistureSetupByHubService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<MoistureSetupByHubDTO> {
      return await this.moistureSetupByHubService.delete(id);
    }
  }
  