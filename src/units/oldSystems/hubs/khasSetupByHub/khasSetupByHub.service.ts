import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KhasSetupByHub } from 'src/model/OldSystem/Hub/khasSetupByHub.entity';
import { Repository } from 'typeorm';
import { KhasSetupByHubDTO } from './khasSetupByHub.dto';


@Injectable()
export class KhasSetupByHubService {
  constructor(
    @InjectRepository(KhasSetupByHub)
    private readonly repo: Repository<KhasSetupByHub>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<KhasSetupByHubDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => KhasSetupByHubDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<KhasSetupByHubDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => KhasSetupByHubDTO.fromEntity(e));
  }

  public async getByHub(id: string): Promise<KhasSetupByHubDTO[]> {
    return await this.repo
      .find({ where: { HubId: id } })
      .then((datas) => datas.map((e) => KhasSetupByHubDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: KhasSetupByHubDTO): Promise<KhasSetupByHubDTO> {
    return await this.repo
      .save(KhasSetupByHubDTO.toEntity(dto))
      .then((e) => KhasSetupByHubDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: KhasSetupByHubDTO): Promise<KhasSetupByHubDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = KhasSetupByHubDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<KhasSetupByHubDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = KhasSetupByHubDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
