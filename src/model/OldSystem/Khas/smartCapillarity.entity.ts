import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'smartCapillarity' })
export class SmartCapillarity extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  KhasSetupID: string;
  @Column({ type: 'varchar', length: 50 })
  DeviceID: string;
  @Column({ type: 'varchar', length: 50 })
  NameTr: string;
  @Column({ type: 'varchar', length: 50 })
  NameEn: string;
  @Column({ type: 'varchar', length: 50 })
  DeviceLocation: string;
  @Column({ type: 'varchar', length: 50 })
  KhasResetCount: string;
  @Column({ type: 'varchar', length: 50 })
  SensorRangeLimit: string;
  @Column({ type:"text", array:true })
  DigitalPercentLimitByRow: string[];
}
