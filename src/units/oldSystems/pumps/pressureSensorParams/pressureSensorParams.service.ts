import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PressureSensorParams } from 'src/model/OldSystem/Pumps/pressureSensorParams.entity';
import { Repository } from 'typeorm';
import { PressureSensorParamsDTO } from './pressureSensorParams.dto';


@Injectable()
export class PressureSensorParamsService {
  constructor(
    @InjectRepository(PressureSensorParams)
    private readonly repo: Repository<PressureSensorParams>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<PressureSensorParamsDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => PressureSensorParamsDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<PressureSensorParamsDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => PressureSensorParamsDTO.fromEntity(e));
  }

  public async getByParamsByValveID(id: string): Promise<PressureSensorParamsDTO[]> {
    return await this.repo
      .find({ where: { ValveID: id } })
      .then((datas) => datas.map((e) => PressureSensorParamsDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: PressureSensorParamsDTO): Promise<PressureSensorParamsDTO> {
    return await this.repo
      .save(PressureSensorParamsDTO.toEntity(dto))
      .then((e) => PressureSensorParamsDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: PressureSensorParamsDTO): Promise<PressureSensorParamsDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = PressureSensorParamsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<PressureSensorParamsDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = PressureSensorParamsDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
