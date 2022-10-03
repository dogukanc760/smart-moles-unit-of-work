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
import { HubGroupsLogsDTO } from './hubGroupsLogs.dto';
import { HubGroupsLogsService } from './hubGroupsLogs.service';

  @Controller('hubGroupLogs')
  @ApiTags('OLD-SYSTEM Hub Group Logs Endpoints')
  @UseInterceptors(TransformInterceptor)
  export class HubGroupLogsController {
    constructor(private hubGroupLogsService: HubGroupsLogsService) {}
  
    @Get()
    public async getAll(): Promise<HubGroupsLogsDTO[]> {
      return await this.hubGroupLogsService.getAll();
    }
  
    @Get(':id')
    public async get(@Param('id') id: string): Promise<HubGroupsLogsDTO> {
      return await this.hubGroupLogsService.get(id);
    }
  
    @Get('/get-by-hubgroup/:id')
    public async getById(@Param('id') id: string): Promise<HubGroupsLogsDTO[]> {
      return await this.hubGroupLogsService.getByHubGroup(id);
    }
  
    @Post()
    public async create(@Body() dto: HubGroupsLogsDTO): Promise<HubGroupsLogsDTO> {
      return await this.hubGroupLogsService.create(dto);
    }
  
    @Put(':id')
    public async update(
      @Param('id') id: string,
      @Body() dto: HubGroupsLogsDTO,
    ): Promise<HubGroupsLogsDTO> {
      return await this.hubGroupLogsService.update(id, dto);
    }
  
    @Delete(':id')
    public async delete(@Param('id') id: string): Promise<HubGroupsLogsDTO> {
      return await this.hubGroupLogsService.delete(id);
    }
  }
  