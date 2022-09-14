import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hub } from 'src/model/OldSystem/Hub/hub.entity';
import { Repository } from 'typeorm';
import { HubDTO } from './hub.dto';


@Injectable()
export class HubService {
  constructor(
    @InjectRepository(Hub)
    private readonly repo: Repository<Hub>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<HubDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => HubDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<HubDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => HubDTO.fromEntity(e));
  }

  public async getByUser(id: string): Promise<HubDTO[]> {
    return await this.repo
      .find({ where: { UserID: id } })
      .then((datas) => datas.map((e) => HubDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: HubDTO): Promise<HubDTO> {
    return await this.repo
      .save(HubDTO.toEntity(dto))
      .then((e) => HubDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: HubDTO): Promise<HubDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = HubDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<HubDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = HubDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
