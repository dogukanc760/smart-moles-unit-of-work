import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SmartCapillarity } from 'src/model/OldSystem/Khas/smartCapillarity.entity';
import { Repository } from 'typeorm';
import { SmartCapillarityDTO } from './smartCapillarity.dto';


@Injectable()
export class SmartCapillarityService {
  constructor(
    @InjectRepository(SmartCapillarity)
    private readonly repo: Repository<SmartCapillarity>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<SmartCapillarityDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => SmartCapillarityDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<SmartCapillarityDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => SmartCapillarityDTO.fromEntity(e));
  }

  public async getByKhas(id: string): Promise<SmartCapillarityDTO[]> {
    return await this.repo
      .find({ where: { KhasSetupID: id } })
      .then((datas) => datas.map((e) => SmartCapillarityDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: SmartCapillarityDTO): Promise<SmartCapillarityDTO> {
    return await this.repo
      .save(SmartCapillarityDTO.toEntity(dto))
      .then((e) => SmartCapillarityDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: SmartCapillarityDTO): Promise<SmartCapillarityDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = SmartCapillarityDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<SmartCapillarityDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = SmartCapillarityDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
