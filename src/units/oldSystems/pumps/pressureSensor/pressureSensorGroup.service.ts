import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PressureSensorGroups } from 'src/model/OldSystem/Pumps/pressureSensorGroup.entity';
import { Repository } from 'typeorm';
import { PressureSensorGroupsDTO } from './pressureSensorGroup.dto';


@Injectable()
export class PressureSensorGroupsService {
  constructor(
    @InjectRepository(PressureSensorGroups)
    private readonly repo: Repository<PressureSensorGroups>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<PressureSensorGroupsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => PressureSensorGroupsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<PressureSensorGroupsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => PressureSensorGroupsDTO.fromEntity(e));
  }

  public async getByPressureSensorSetupID(id: string): Promise<PressureSensorGroupsDTO[]> {
    return await this.repo
      .find({ where: { PressureSensorSetupID: id } })
      .then((datas) => datas.map((e) => PressureSensorGroupsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: PressureSensorGroupsDTO): Promise<PressureSensorGroupsDTO> {
    return await this.repo
      .save(PressureSensorGroupsDTO.toEntity(dto))
      .then((e) => PressureSensorGroupsDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: PressureSensorGroupsDTO): Promise<PressureSensorGroupsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = PressureSensorGroupsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<PressureSensorGroupsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = PressureSensorGroupsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
