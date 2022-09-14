import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoistureConditions } from 'src/model/OldSystem/Khas/moistureConditions.entity';
import { Repository } from 'typeorm';
import { MoistureConditionsDTO } from './moistureConditions.dto';


@Injectable()
export class MoistureConditionsService {
  constructor(
    @InjectRepository(MoistureConditions)
    private readonly repo: Repository<MoistureConditions>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<MoistureConditionsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => MoistureConditionsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<MoistureConditionsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => MoistureConditionsDTO.fromEntity(e));
  }

  public async getByKhas(id: string): Promise<MoistureConditionsDTO[]> {
    return await this.repo
      .find({ where: { KhasID: id } })
      .then((datas) => datas.map((e) => MoistureConditionsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: MoistureConditionsDTO): Promise<MoistureConditionsDTO> {
    return await this.repo
      .save(MoistureConditionsDTO.toEntity(dto))
      .then((e) => MoistureConditionsDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: MoistureConditionsDTO): Promise<MoistureConditionsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = MoistureConditionsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<MoistureConditionsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = MoistureConditionsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
