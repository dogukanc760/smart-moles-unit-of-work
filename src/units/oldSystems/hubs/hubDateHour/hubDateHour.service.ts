import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HubDateHour } from 'src/model/OldSystem/Hub/hubDateHour.entity';
import { Repository } from 'typeorm';
import { HubDateHourDTO } from './hubDateHour.dto';

@Injectable()
export class HubDateHourService {
  constructor(
    @InjectRepository(HubDateHour)
    private readonly repo: Repository<HubDateHour>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<HubDateHourDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => HubDateHourDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<HubDateHourDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => HubDateHourDTO.fromEntity(e));
  }

  public async getByHub(id: string): Promise<HubDateHourDTO[]> {
    return await this.repo
      .find({ where: { HubId: id } })
      .then((datas) => datas.map((e) => HubDateHourDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: HubDateHourDTO): Promise<HubDateHourDTO> {
    return await this.repo
      .save(HubDateHourDTO.toEntity(dto))
      .then((e) => HubDateHourDTO.fromEntity(e));
  }

  // update device
  public async update(
    id: string,
    dto: HubDateHourDTO,
  ): Promise<HubDateHourDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = HubDateHourDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<HubDateHourDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = HubDateHourDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
