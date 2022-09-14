import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TParamatersByValve } from 'src/model/OldSystem/Pumps/tParametersByValve.entity';
import { Repository } from 'typeorm';
import { TParamatersByValveDTO } from './tParamatersByValve.dto';


@Injectable()
export class TParamatersByValveService {
  constructor(
    @InjectRepository(TParamatersByValve)
    private readonly repo: Repository<TParamatersByValve>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<TParamatersByValveDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => TParamatersByValveDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<TParamatersByValveDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => TParamatersByValveDTO.fromEntity(e));
  }

  public async getByParamsByValve(id: string): Promise<TParamatersByValveDTO[]> {
    return await this.repo
      .find({ where: { ValveID: id } })
      .then((datas) => datas.map((e) => TParamatersByValveDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: TParamatersByValveDTO): Promise<TParamatersByValveDTO> {
    return await this.repo
      .save(TParamatersByValveDTO.toEntity(dto))
      .then((e) => TParamatersByValveDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: TParamatersByValveDTO): Promise<TParamatersByValveDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = TParamatersByValveDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<TParamatersByValveDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = TParamatersByValveDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
