import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PressureSensorSetup } from 'src/model/OldSystem/Pumps/pressureSensorSetup.entity';
import { WaterMeterSetup } from 'src/model/OldSystem/Pumps/waterMeterSetup.entity';
import { Repository } from 'typeorm';
import { WaterMeterSetupDTO } from './waterMeterSetup.dto';


@Injectable()
export class WaterMeterSetupService {
  constructor(
    @InjectRepository(WaterMeterSetup)
    private readonly repo: Repository<WaterMeterSetup>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<WaterMeterSetupDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => WaterMeterSetupDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<WaterMeterSetupDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => WaterMeterSetupDTO.fromEntity(e));
  }

  public async getByParamsByPumpID(id: string): Promise<WaterMeterSetupDTO[]> {
    return await this.repo
      .find({ where: { PumpID: id } })
      .then((datas) => datas.map((e) => WaterMeterSetupDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: WaterMeterSetupDTO): Promise<WaterMeterSetupDTO> {
    return await this.repo
      .save(WaterMeterSetupDTO.toEntity(dto))
      .then((e) => WaterMeterSetupDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: WaterMeterSetupDTO): Promise<WaterMeterSetupDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = WaterMeterSetupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<WaterMeterSetupDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = WaterMeterSetupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
