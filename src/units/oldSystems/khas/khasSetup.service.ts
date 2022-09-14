import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KhasSetup } from 'src/model/OldSystem/Khas/khasSetup.entity';
import { Repository } from 'typeorm';
import { KhasSetupDTO } from './khasSetup.dto';


@Injectable()
export class KhasSetupService {
  constructor(
    @InjectRepository(KhasSetup)
    private readonly repo: Repository<KhasSetup>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<KhasSetupDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => KhasSetupDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<KhasSetupDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => KhasSetupDTO.fromEntity(e));
  }

  public async getByHubGroup(id: string): Promise<KhasSetupDTO[]> {
    return await this.repo
      .find({ where: { HubGroupId: id } })
      .then((datas) => datas.map((e) => KhasSetupDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: KhasSetupDTO): Promise<KhasSetupDTO> {
    return await this.repo
      .save(KhasSetupDTO.toEntity(dto))
      .then((e) => KhasSetupDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: KhasSetupDTO): Promise<KhasSetupDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = KhasSetupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<KhasSetupDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = KhasSetupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
