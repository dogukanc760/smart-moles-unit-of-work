import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValveCardGroups } from 'src/model/OldSystem/Pumps/valveCardGroup.entity';
import { Repository } from 'typeorm';
import { ValveCardGroupsDTO } from './valveCardGroup.dto';


@Injectable()
export class ValveCardGroupService {
  constructor(
    @InjectRepository(ValveCardGroups)
    private readonly repo: Repository<ValveCardGroups>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<ValveCardGroupsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => ValveCardGroupsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<ValveCardGroupsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => ValveCardGroupsDTO.fromEntity(e));
  }

  public async getByParamsByValve(id: string): Promise<ValveCardGroupsDTO[]> {
    return await this.repo
      .find({ where: { ValveSetupID: id } })
      .then((datas) => datas.map((e) => ValveCardGroupsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: ValveCardGroupsDTO): Promise<ValveCardGroupsDTO> {
    return await this.repo
      .save(ValveCardGroupsDTO.toEntity(dto))
      .then((e) => ValveCardGroupsDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: ValveCardGroupsDTO): Promise<ValveCardGroupsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = ValveCardGroupsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<ValveCardGroupsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = ValveCardGroupsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
