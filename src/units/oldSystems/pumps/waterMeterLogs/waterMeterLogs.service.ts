import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WaterMeterLogs } from 'src/model/OldSystem/Pumps/waterMeterLogs.entity';
import { Repository } from 'typeorm';
import { WaterMeterLogsDTO } from './waterMeterLogs.dto';

@Injectable()
export class WaterMeterLogsService {
  constructor(
    @InjectRepository(WaterMeterLogs)
    private readonly repo: Repository<WaterMeterLogs>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<WaterMeterLogsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => WaterMeterLogsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<WaterMeterLogsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => WaterMeterLogsDTO.fromEntity(e));
  }

  public async getByWaterMeter(id: string): Promise<WaterMeterLogsDTO[]> {
    return await this.repo
      .find({ where: { WaterMeterID: id } })
      .then((datas) => datas.map((e) => WaterMeterLogsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: WaterMeterLogsDTO): Promise<WaterMeterLogsDTO> {
    return await this.repo
      .save(WaterMeterLogsDTO.toEntity(dto))
      .then((e) => WaterMeterLogsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: WaterMeterLogsDTO,
  ): Promise<WaterMeterLogsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = WaterMeterLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<WaterMeterLogsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = WaterMeterLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
