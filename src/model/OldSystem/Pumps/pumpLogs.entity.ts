import { BaseEntity } from 'src/model/base.entity';
import { LogBaseEntity } from 'src/model/logBase.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'pumpLogs' })
export class PumpLogs extends LogBaseEntity {
  @Column({ type: 'varchar', length: 50 })
  PumpID: string;
}
