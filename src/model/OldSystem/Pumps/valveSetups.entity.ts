import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'valveSetups' })
export class ValveSetups extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  PumpID: string;
  @Column({ type: 'varchar', length: 50 })
  ValveType: string;
  @Column({ type: 'varchar', length: 50 })
  ValveCount: string;
}
