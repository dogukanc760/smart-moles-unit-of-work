import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValveSetups } from 'src/model/OldSystem/Pumps/valveSetups.entity';
import { Repository } from 'typeorm';
import { ValveSetupDTO } from './valveSetup.dto';


@Injectable()
export class ValveSetupService {
  constructor(
    @InjectRepository(ValveSetups)
    private readonly repo: Repository<ValveSetups>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<ValveSetupDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => ValveSetupDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<ValveSetupDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => ValveSetupDTO.fromEntity(e));
  }

  public async getByParamsByPump(id: string): Promise<ValveSetupDTO[]> {
    return await this.repo
      .find({ where: { PumpID: id } })
      .then((datas) => datas.map((e) => ValveSetupDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: ValveSetupDTO): Promise<ValveSetupDTO> {
    return await this.repo
      .save(ValveSetupDTO.toEntity(dto))
      .then((e) => ValveSetupDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: ValveSetupDTO): Promise<ValveSetupDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = ValveSetupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<ValveSetupDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = ValveSetupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
