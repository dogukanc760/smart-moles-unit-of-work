import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'hubs' })
export class Hub extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  UserID: string;
  @Column({ type: 'varchar', length: 50 })
  ContractID: string;
  @Column({ type: 'varchar', length: 50 })
  NameTr: string;
  @Column({ type: 'varchar', length: 50 })
  NameEn:string;
  @Column({ type: 'varchar', length: 50 })
  HourType: string;
  @Column({ type: 'varchar', length: 50 })
  HubIP: string;
  @Column({ type: 'varchar', length: 50 })
  HubPort: string;
  @Column({ type: 'boolean', default: false})
  HubCheck: boolean;
  @Column({type:'varchar', length: 150})
  ProjectImage: string;
}
