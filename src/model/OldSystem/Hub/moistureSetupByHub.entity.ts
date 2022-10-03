import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'moistureSetupByHub' })
export class MoistureSetupByHub extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  HubId: string;
  @Column({ type: 'varchar', length: 50 })
  PackageLenght: string;
  @Column({ type: 'varchar', length: 50 })
  EepromAddress: string;
  @Column({ type: 'varchar', length: 50 })
  Command: string;
  @Column({ type: 'varchar', length: 50 })
  ReadingPeriod: string;
  @Column({ type: 'varchar', length: 50 })
  RecieveType: string;
}
