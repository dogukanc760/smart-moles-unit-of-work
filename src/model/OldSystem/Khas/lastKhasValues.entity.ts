import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'lastKhasValues' })
export class LastKhasValues extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  SmartCapillarityID: string;
  @Column({ type: 'varchar', length: 50 })
  LastCalibrationDate: string;
  @Column({ type: 'varchar', length: 50 })
  LastCalibrationMoisture: string;
  @Column({ type: 'varchar', length: 50 })
  PressureSensorValue: string;
  @Column({ type: 'varchar', length: 50 })
  LastIrrigationCount: string;
  @Column({ type: 'varchar', length: 50 })
  DailyIrrigationCount: string;
  @Column({ type: 'varchar', length: 50 })
  SeasonlyTotalIrrigation: string;
}
