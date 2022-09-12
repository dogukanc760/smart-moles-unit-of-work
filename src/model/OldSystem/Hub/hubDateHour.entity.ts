import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'hubDateHour' })
export class HubDateHour extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  HubId: string;
  @Column({ type: 'varchar', length: 50 })
  Date:string;
  @Column({ type: 'varchar', length: 50 })
  Hour:string;
}
