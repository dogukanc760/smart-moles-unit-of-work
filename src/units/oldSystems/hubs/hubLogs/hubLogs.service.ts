import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HubLogs } from 'src/model/OldSystem/Hub/hubLogs.entity';
import { Repository } from 'typeorm';
import { HubLogsDTO } from './hubLogs.dto';

@Injectable()
export class HubLogsService {
  constructor(
    @InjectRepository(HubLogs)
    private readonly repo: Repository<HubLogs>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<HubLogsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => HubLogsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<HubLogsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => HubLogsDTO.fromEntity(e));
  }

  public async getByHub(id: string): Promise<HubLogsDTO[]> {
    return await this.repo
      .find({ where: { HubId: id } })
      .then((datas) => datas.map((e) => HubLogsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: HubLogsDTO): Promise<HubLogsDTO> {
    return await this.repo
      .save(HubLogsDTO.toEntity(dto))
      .then((e) => HubLogsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: HubLogsDTO,
  ): Promise<HubLogsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = HubLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<HubLogsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = HubLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
