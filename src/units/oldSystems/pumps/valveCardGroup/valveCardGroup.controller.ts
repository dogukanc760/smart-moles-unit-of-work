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
import { ValveCardGroupsDTO } from './valveCardGroup.dto';
import { ValveCardGroupService } from './valveCardGroup.service';

@Controller('valvecard-group')
@ApiTags('OLD-SYSTEM Valve Cards Endpoints')
@UseInterceptors(TransformInterceptor)
export class ValveCardGroupController {
  constructor(private ValveCardGroupsDTOervice: ValveCardGroupService) {}

  @Get()
  public async getAll(): Promise<ValveCardGroupsDTO[]> {
    return await this.ValveCardGroupsDTOervice.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<ValveCardGroupsDTO> {
    return await this.ValveCardGroupsDTOervice.get(id);
  }

  @Get('/get-by-valve/:id')
  public async getById(@Param('id') id: string): Promise<ValveCardGroupsDTO[]> {
    return await this.ValveCardGroupsDTOervice.getByParamsByValve(id);
  }

  @Post()
  public async create(
    @Body() dto: ValveCardGroupsDTO,
  ): Promise<ValveCardGroupsDTO> {
    return await this.ValveCardGroupsDTOervice.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: ValveCardGroupsDTO,
  ): Promise<ValveCardGroupsDTO> {
    return await this.ValveCardGroupsDTOervice.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<ValveCardGroupsDTO> {
    return await this.ValveCardGroupsDTOervice.delete(id);
  }
}
