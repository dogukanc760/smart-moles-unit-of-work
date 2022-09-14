import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PressureSensorSetup } from 'src/model/OldSystem/Pumps/pressureSensorSetup.entity';
import { Repository } from 'typeorm';
import { PressureSensorSetupDTO } from './pressureSensorSetup.dto';


@Injectable()
export class PressureSensorSetupService {
  constructor(
    @InjectRepository(PressureSensorSetup)
    private readonly repo: Repository<PressureSensorSetup>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<PressureSensorSetupDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => PressureSensorSetupDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<PressureSensorSetupDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => PressureSensorSetupDTO.fromEntity(e));
  }

  public async getByParamsByPumpID(id: string): Promise<PressureSensorSetupDTO[]> {
    return await this.repo
      .find({ where: { PumpID: id } })
      .then((datas) => datas.map((e) => PressureSensorSetupDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: PressureSensorSetupDTO): Promise<PressureSensorSetupDTO> {
    return await this.repo
      .save(PressureSensorSetupDTO.toEntity(dto))
      .then((e) => PressureSensorSetupDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: PressureSensorSetupDTO): Promise<PressureSensorSetupDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = PressureSensorSetupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<PressureSensorSetupDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = PressureSensorSetupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
