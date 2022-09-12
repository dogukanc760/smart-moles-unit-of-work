import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'pressureSensorParams' })
export class PressureSensorParams extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  ValveID: string;
  @Column({type: 'boolean', default: false})
  CheckPressureSensor: string;
  @Column({type: 'varchar', length: 50 })
  ValveStartValue: string;
  @Column({type: 'varchar', length: 50 })
  OpenTime: string;
  @Column({type: 'varchar', length: 50 })
  PressureValueWhenValveClosed: string;
  @Column({type: 'varchar', length: 50 })
  CloseTime: string;
 
}
