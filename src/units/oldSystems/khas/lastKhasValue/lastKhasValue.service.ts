import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LastKhasValues } from 'src/model/OldSystem/Khas/lastKhasValues.entity';
import { Repository } from 'typeorm';
import { LastKhasValueDTO } from './lastKhasValue.dto';

@Injectable()
export class LastKhasValueService {
  constructor(
    @InjectRepository(LastKhasValues)
    private readonly repo: Repository<LastKhasValues>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<LastKhasValueDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => LastKhasValueDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<LastKhasValueDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => LastKhasValueDTO.fromEntity(e));
  }

  public async getBySmartCapillarity(id: string): Promise<LastKhasValueDTO[]> {
    return await this.repo
      .find({ where: { SmartCapillarityID: id } })
      .then((datas) => datas.map((e) => LastKhasValueDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: LastKhasValueDTO): Promise<LastKhasValueDTO> {
    return await this.repo
      .save(LastKhasValueDTO.toEntity(dto))
      .then((e) => LastKhasValueDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: LastKhasValueDTO): Promise<LastKhasValueDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = LastKhasValueDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<LastKhasValueDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = LastKhasValueDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
