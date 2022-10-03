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
import { ValveSetupDTO } from './valveSetup.dto';
import { ValveSetupService } from './valveSetup.service';

@Controller('valve-setup')
@ApiTags('OLD-SYSTEM Valve Setup Endpoints')
@UseInterceptors(TransformInterceptor)
export class ValveSetupController {
  constructor(private valveSetupService: ValveSetupService) {}

  @Get()
  public async getAll(): Promise<ValveSetupDTO[]> {
    return await this.valveSetupService.getAll();
  }

  @Get(':id')
  public async get(@Param('id') id: string): Promise<ValveSetupDTO> {
    return await this.valveSetupService.get(id);
  }

  @Get('/get-by-pump/:id')
  public async getById(@Param('id') id: string): Promise<ValveSetupDTO[]> {
    return await this.valveSetupService.getByParamsByPump(id);
  }

  @Post()
  public async create(@Body() dto: ValveSetupDTO): Promise<ValveSetupDTO> {
    return await this.valveSetupService.create(dto);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: ValveSetupDTO,
  ): Promise<ValveSetupDTO> {
    return await this.valveSetupService.update(id, dto);
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<ValveSetupDTO> {
    return await this.valveSetupService.delete(id);
  }
}
