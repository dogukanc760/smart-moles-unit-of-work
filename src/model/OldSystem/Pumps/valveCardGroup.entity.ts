import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'valveCardsGroups' })
export class ValveCardGroups extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  ValveSetupID: string;
  @Column({ type: 'varchar', length: 50 })
  DeviceID: string;
  @Column({ type: 'varchar', length: 50 })
  NameTr: string;
  @Column({ type: 'varchar', length: 50 })
  NameEn: string;
  @Column({ type: 'varchar', length: 50 })
  DeviceLocation: string;
  @Column({ type: 'varchar', length: 50 })
  WaterMeter: string;
  @Column({ type: 'varchar', length: 50 })
  WaterPressureSensor: string;
}
