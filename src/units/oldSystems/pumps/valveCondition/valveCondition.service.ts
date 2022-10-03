import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValveConditions } from 'src/model/OldSystem/Pumps/valveCondition.entity';
import { Repository } from 'typeorm';
import { ValveConditionsDTO } from './valveCondition.dto';


@Injectable()
export class ValveConditionService {
  constructor(
    @InjectRepository(ValveConditions)
    private readonly repo: Repository<ValveConditions>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<ValveConditionsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => ValveConditionsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<ValveConditionsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => ValveConditionsDTO.fromEntity(e));
  }

  public async getByParamsByValve(id: string): Promise<ValveConditionsDTO[]> {
    return await this.repo
      .find({ where: { ValveID: id } })
      .then((datas) => datas.map((e) => ValveConditionsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: ValveConditionsDTO): Promise<ValveConditionsDTO> {
    return await this.repo
      .save(ValveConditionsDTO.toEntity(dto))
      .then((e) => ValveConditionsDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: ValveConditionsDTO): Promise<ValveConditionsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = ValveConditionsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<ValveConditionsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = ValveConditionsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
