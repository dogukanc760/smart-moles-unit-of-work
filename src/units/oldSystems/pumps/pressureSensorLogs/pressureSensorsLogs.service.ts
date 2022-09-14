import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PressureSensorLogs } from 'src/model/OldSystem/Pumps/pressureSensorLogs.entity';
import { Repository } from 'typeorm';
import { PressureSensorsLogsDTO } from './pressureSensorLogs.dto';

@Injectable()
export class PressureSensorLogsService {
  constructor(
    @InjectRepository(PressureSensorLogs)
    private readonly repo: Repository<PressureSensorLogs>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<PressureSensorsLogsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => PressureSensorsLogsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<PressureSensorsLogsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => PressureSensorsLogsDTO.fromEntity(e));
  }

  public async getByPressureSensor(id: string): Promise<PressureSensorsLogsDTO[]> {
    return await this.repo
      .find({ where: { PressureSensorID: id } })
      .then((datas) => datas.map((e) => PressureSensorsLogsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: PressureSensorsLogsDTO): Promise<PressureSensorsLogsDTO> {
    return await this.repo
      .save(PressureSensorsLogsDTO.toEntity(dto))
      .then((e) => PressureSensorsLogsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: PressureSensorsLogsDTO,
  ): Promise<PressureSensorsLogsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = PressureSensorsLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<PressureSensorsLogsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = PressureSensorsLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
