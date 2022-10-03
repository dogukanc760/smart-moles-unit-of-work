import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HubGroupLogs } from 'src/model/OldSystem/Hub/hubGroupLogs.entity';
import { Repository } from 'typeorm';
import { HubGroupsLogsDTO } from './hubGroupsLogs.dto';

@Injectable()
export class HubGroupsLogsService {
  constructor(
    @InjectRepository(HubGroupLogs)
    private readonly repo: Repository<HubGroupLogs>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<HubGroupsLogsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => HubGroupsLogsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<HubGroupsLogsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => HubGroupsLogsDTO.fromEntity(e));
  }

  public async getByHubGroup(id: string): Promise<HubGroupsLogsDTO[]> {
    return await this.repo
      .find({ where: { HubGroupId: id } })
      .then((datas) => datas.map((e) => HubGroupsLogsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: HubGroupsLogsDTO): Promise<HubGroupsLogsDTO> {
    return await this.repo
      .save(HubGroupsLogsDTO.toEntity(dto))
      .then((e) => HubGroupsLogsDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: HubGroupsLogsDTO,
  ): Promise<HubGroupsLogsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = HubGroupsLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<HubGroupsLogsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = HubGroupsLogsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
