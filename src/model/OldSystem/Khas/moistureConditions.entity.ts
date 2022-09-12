import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'moistureConditions' })
export class MoistureConditions extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  KhasID: string;
  @Column({type: 'varchar', length: 50 })
  DeviceEeprom: string;
  @Column({type: 'varchar', length: 50 })
  ValveID: string;
  @Column({type: 'varchar', length: 50 })
  KhasCount: string;
  @Column({type: 'varchar', length: 50 })
  PositionID: string;
  @Column({type: 'varchar', length: 50 })
  ConditionID: string;
  @Column({type: 'varchar', length: 50 })
  ReadingCommand: string;
  @Column({type: 'varchar', length: 50 })
  ConditionEeprom: string;
  @Column({type: 'varchar', length: 50 })
  FieldRangeCondition: string;
  @Column({type: 'varchar', length: 50 })
  FieldRange: string;
  @Column({type: 'varchar', length: 50 })
  MaxRyRate: string;
  @Column({type: 'boolean', default: false})
  CheckKhasConWhenOver
  @Column({ type: 'varchar', length: 50 })
  StartIrrigationCondition: string;
  @Column({ type: 'varchar', length: 50 })
  StartIrrigationConditionPoint: string;
}
