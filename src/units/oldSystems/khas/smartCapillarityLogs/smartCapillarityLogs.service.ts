import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SmartCapillarityLogs } from 'src/model/OldSystem/Khas/smartCapillarityLogs.entity';
import { Repository } from 'typeorm';
import { SmartCapillarityLogsDTO } from './smartCapillarityLogs.dto';

@Injectable()
export class SmartCapillarityLogsService {
  constructor(
    @InjectRepository(SmartCapillarityLogs)
    private readonly repo: Repository<SmartCapillarityLogs>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<SmartCapillarityLogsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => SmartCapillarityLogsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<SmartCapillarityLogsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => SmartCapillarityLogsDTO.fromEntity(e));
  }

  public async getBySmartCapillarity(id: string): Promise<SmartCapillarityLogsDTO[]> {
    return await this.repo
      .find({ where: { SmartCapillarityID: id } })
      .then((datas) => datas.map((e) => SmartCapillarityLogsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: SmartCapillarityLogsDTO): Promise<SmartCapillarityLogsDTO> {
    return await this.repo
      .save(SmartCapillarityLogsDTO.toEntity(dto))
      .then((e) => SmartCapillarityLogsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: SmartCapillarityLogsDTO,
  ): Promise<SmartCapillarityLogsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = SmartCapillarityLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<SmartCapillarityLogsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = SmartCapillarityLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
