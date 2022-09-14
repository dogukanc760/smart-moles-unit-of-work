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
import { HubGroupsDTO } from './hubGroups.dto';
import { HubGroupsService } from './hubGroups.service';

@Controller('hubGroup')
@ApiTags('OLD-SYSTEM Hub Group Endpoints')
@UseInterceptors(TransformInterceptor)
export class HubGroupController {
  constructor(private hubGroupService: HubGroupsService) {}

  @Get()
  public async getAll(): Promise<HubGroupsDTO[]> {
    return await this.hubGroupService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<HubGroupsDTO> {
    return await this.hubGroupService.get(id);
  }

  @Get('/get-by-hub/:id')
  public async getById(@Param('id') id: string): Promise<HubGroupsDTO[]> {
    return await this.hubGroupService.getByHub(id);
  }

  @Post()
  public async create(@Body() dto: HubGroupsDTO): Promise<HubGroupsDTO> {
    return await this.hubGroupService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: HubGroupsDTO,
  ): Promise<HubGroupsDTO> {
    return await this.hubGroupService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<HubGroupsDTO> {
    return await this.hubGroupService.delete(id);
  }
}
