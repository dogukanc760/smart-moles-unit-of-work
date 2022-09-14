import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WaterMeterGroup } from 'src/model/OldSystem/Pumps/waterMeterGroup.entity';
import { Repository } from 'typeorm';
import { WaterMeterGroupDTO } from './waterMeterGroup.dto';

@Injectable()
export class WaterMeterGroupService {
  constructor(
    @InjectRepository(WaterMeterGroup)
    private readonly repo: Repository<WaterMeterGroup>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<WaterMeterGroupDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => WaterMeterGroupDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<WaterMeterGroupDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => WaterMeterGroupDTO.fromEntity(e));
  }

  public async getByParamsByWaterMeter(
    id: string,
  ): Promise<WaterMeterGroupDTO[]> {
    return await this.repo
      .find({ where: { WaterMeterSetupID: id } })
      .then((datas) => datas.map((e) => WaterMeterGroupDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: WaterMeterGroupDTO): Promise<WaterMeterGroupDTO> {
    return await this.repo
      .save(WaterMeterGroupDTO.toEntity(dto))
      .then((e) => WaterMeterGroupDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: WaterMeterGroupDTO,
  ): Promise<WaterMeterGroupDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = WaterMeterGroupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<WaterMeterGroupDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = WaterMeterGroupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
