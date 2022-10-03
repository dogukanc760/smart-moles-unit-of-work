import { BaseEntity } from 'src/model/base.entity';
import { LogBaseEntity } from 'src/model/logBase.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'hubGroupLogs' })
export class HubGroupLogs extends LogBaseEntity {
  @Column({ type: 'varchar', length: 50 })
  HubGroupId: string;
}
