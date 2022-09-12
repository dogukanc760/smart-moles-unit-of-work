import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'hubGroups' })
export class HubGroups extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  HubId: string;
  @Column({ type: 'varchar', length: 50 })
  GroupId: string;
  @Column({ type: 'varchar', length: 50 })
  NameTr: string;
  @Column({ type: 'varchar', length: 50 })
  NameEn: string;
  @Column({ type: 'varchar', length: 50 })
  DeviceTypes: string;
  @Column({type:'boolean', default: false})
  ValveCheck: boolean;
}
