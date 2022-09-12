import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'waterMeterSetup' })
export class WaterMeterSetup extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  PumpID: string;
  @Column({ type: 'varchar', length: 50 })
  WaterMeterContactType: string;
  @Column({ type: 'varchar', length: 50 })
  WaterMeterCount: string;
}
