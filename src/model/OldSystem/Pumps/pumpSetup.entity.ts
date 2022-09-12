import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'pumpSetups' })
export class PumpSetups extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  HubGroupID: string;
  @Column({ type: 'varchar', length: 50 })
  PumpType: string;
  @Column({ type: 'varchar', length: 50 })
  PumpManagementType: string;
  @Column({ type: 'varchar', length: 50 })
  ValveManagementType: string;
  @Column({ type: 'varchar', length: 50 })
  DeviceID: string;
  @Column({ type: 'varchar', length: 50 })
  DeviceNameTr: string;
  @Column({ type: 'varchar', length: 50 })
  DeviceNameEn: string;
  @Column({ type: 'varchar', length: 50 })
  DeviceLocation: string;
}
