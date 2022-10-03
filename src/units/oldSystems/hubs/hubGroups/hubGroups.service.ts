import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HubGroups } from 'src/model/OldSystem/Hub/hubGroups.entity';
import { Repository } from 'typeorm';
import { HubGroupsDTO } from './hubGroups.dto';

@Injectable()
export class HubGroupsService {
  constructor(
    @InjectRepository(HubGroups)
    private readonly repo: Repository<HubGroups>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<HubGroupsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => HubGroupsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<HubGroupsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => HubGroupsDTO.fromEntity(e));
  }

  public async getByHub(id: string): Promise<HubGroupsDTO[]> {
    return await this.repo
      .find({ where: { HubId: id } })
      .then((datas) => datas.map((e) => HubGroupsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: HubGroupsDTO): Promise<HubGroupsDTO> {
    return await this.repo
      .save(HubGroupsDTO.toEntity(dto))
      .then((e) => HubGroupsDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: HubGroupsDTO): Promise<HubGroupsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = HubGroupsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<HubGroupsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = HubGroupsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
