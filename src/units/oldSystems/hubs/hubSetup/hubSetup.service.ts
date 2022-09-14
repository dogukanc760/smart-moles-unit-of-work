import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HubSetup } from 'src/model/OldSystem/Hub/hubSetup.entity';
import { Repository } from 'typeorm';
import { HubSetupDTO } from './hubSetup.dto';


@Injectable()
export class HubSetupService {
  constructor(
    @InjectRepository(HubSetup)
    private readonly repo: Repository<HubSetup>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<HubSetupDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => HubSetupDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<HubSetupDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => HubSetupDTO.fromEntity(e));
  }

  public async getByHub(id: string): Promise<HubSetupDTO[]> {
    return await this.repo
      .find({ where: { HubId: id } })
      .then((datas) => datas.map((e) => HubSetupDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: HubSetupDTO): Promise<HubSetupDTO> {
    return await this.repo
      .save(HubSetupDTO.toEntity(dto))
      .then((e) => HubSetupDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: HubSetupDTO): Promise<HubSetupDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = HubSetupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<HubSetupDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = HubSetupDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
