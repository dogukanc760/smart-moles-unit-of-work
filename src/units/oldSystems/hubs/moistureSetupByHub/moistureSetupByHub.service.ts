import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoistureSetupByHub } from 'src/model/OldSystem/Hub/moistureSetupByHub.entity';
import { Repository } from 'typeorm';
import { MoistureSetupByHubDTO } from './moistureSetupByHub.dto';


@Injectable()
export class MoistureSetupByHubService {
  constructor(
    @InjectRepository(MoistureSetupByHub)
    private readonly repo: Repository<MoistureSetupByHub>,
  ) {}

  //get all devices locations
  public async getAll(): Promise<MoistureSetupByHubDTO[]> {
    return await this.repo
      .find()
      .then((datas) => datas.map((e) => MoistureSetupByHubDTO.fromEntity(e)));
  }

  public async get(id: string): Promise<MoistureSetupByHubDTO> {
    return await this.repo
      .findOne({ where: { ContentID: id } })
      .then((e) => MoistureSetupByHubDTO.fromEntity(e));
  }

  public async geyByHub(id: string): Promise<MoistureSetupByHubDTO[]> {
    return await this.repo
      .find({ where: { HubId: id } })
      .then((datas) => datas.map((e) => MoistureSetupByHubDTO.fromEntity(e)));
  }

  // save new device
  public async create(dto: MoistureSetupByHubDTO): Promise<MoistureSetupByHubDTO> {
    return await this.repo
      .save(MoistureSetupByHubDTO.toEntity(dto))
      .then((e) => MoistureSetupByHubDTO.fromEntity(e));
  }

  // update device
  public async update(id: string, dto: MoistureSetupByHubDTO): Promise<MoistureSetupByHubDTO> {
    const newLocal = await this.repo.update(id, dto);
    if (newLocal.affected > 0) {
      const updatedData = MoistureSetupByHubDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }

  // update device
  public async delete(id: string): Promise<MoistureSetupByHubDTO> {
    const data = await this.repo.findOne({ where: { ContentID: id } });
    const newLocal = await this.repo.update(id, data);
    if (newLocal.affected > 0) {
      data.isDeleted = true;
      const updatedData = MoistureSetupByHubDTO.fromEntity(
        await this.repo.findOne({ where: { ContentID: id } }),
      );
      return updatedData;
    }

    throw new HttpException('Error updating device', 500);
  }
}
