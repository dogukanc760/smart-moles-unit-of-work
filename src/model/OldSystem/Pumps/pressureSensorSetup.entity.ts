import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'pressureSensorSetup' })
export class PressureSensorSetup extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  PumpID: string;
  @Column({ type: 'varchar', length: 50 })
  PressureSensorType: string;
  @Column({ type: 'varchar', length: 50 })
  PressureSensorTypeCount: string;
}
