import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PumpSetups } from 'src/model/OldSystem/Pumps/pumpSetup.entity';
import { Repository } from 'typeorm';
import { PumpSetupDTO } from './pumpSetup.dto';


@Injectable()
export class PumpSetupService {
  constructor(
    @InjectRepository(PumpSetups)
    private readonly repo: Repository<PumpSetups>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<PumpSetupDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => PumpSetupDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<PumpSetupDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => PumpSetupDTO.fromEntity(e));
  }

  public async getByParamsByHubGroupID(id: string): Promise<PumpSetupDTO[]> {
    return await this.repo
      .find({ where: { HubGroupID: id } })
      .then((datas) => datas.map((e) => PumpSetupDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: PumpSetupDTO): Promise<PumpSetupDTO> {
    return await this.repo
      .save(PumpSetupDTO.toEntity(dto))
      .then((e) => PumpSetupDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: PumpSetupDTO): Promise<PumpSetupDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = PumpSetupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<PumpSetupDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = PumpSetupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
