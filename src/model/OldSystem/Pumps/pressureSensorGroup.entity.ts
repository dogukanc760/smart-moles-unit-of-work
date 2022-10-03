import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'pressureSensorGroups' })
export class PressureSensorGroups extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  PressureSensorSetupID: string;
  @Column({ type: 'varchar', length: 50 })
  DeviceID: string;
  @Column({ type: 'varchar', length: 50 })
  NameTr: string;
  @Column({ type: 'varchar', length: 50 })
  NameEn: string;
  @Column({ type: 'varchar', length: 50 })
  DeviceLocation: string;
}
