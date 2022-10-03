import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'valveConditions' })
export class ValveConditions extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  ValveID: string;
  @Column({ type: 'varchar', length: 50 })
  Eeprom: string;
  @Column({ type: 'varchar', length: 50 })
  ValveManagement: string;
  @Column({ type: 'varchar', length: 50 })
  ManagementType: string;
  @Column({ type: 'varchar', length: 50 })
  StartHour: string;
  @Column({ type: 'varchar', length: 50 })
  FinishHour: string;
  @Column({ type: 'varchar', length: 50 })
  CheckDailyWorkHour: string;
  @Column({ type: 'varchar', length: 50 })
  WorkTime: string;
  @Column({ type: 'varchar', length: 50 })
  PendingTime: string;
  @Column({ type: 'varchar', length: 50 })
  DailyTotalWorkTime: string;
}
