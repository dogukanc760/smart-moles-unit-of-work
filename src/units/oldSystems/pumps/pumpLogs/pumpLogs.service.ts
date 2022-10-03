import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PumpLogs } from '../../../../model/OldSystem/Pumps/pumpLogs.entity';
import { Repository } from 'typeorm';
import { PumpLogsDTO } from './pumpLogs.dto';

@Injectable()
export class PumpLogsService {
  constructor(
    @InjectRepository(PumpLogs)
    private readonly repo: Repository<PumpLogs>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<PumpLogsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => PumpLogsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<PumpLogsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => PumpLogsDTO.fromEntity(e));
  }

  public async getByPump(id: string): Promise<PumpLogsDTO[]> {
    return await this.repo
      .find({ where: { PumpID: id } })
      .then((datas) => datas.map((e) => PumpLogsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: PumpLogsDTO): Promise<PumpLogsDTO> {
    return await this.repo
      .save(PumpLogsDTO.toEntity(dto))
      .then((e) => PumpLogsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: PumpLogsDTO,
  ): Promise<PumpLogsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = PumpLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<PumpLogsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = PumpLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
