import { BaseEntity } from 'src/model/base.entity';
import { LogBaseEntity } from 'src/model/logBase.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'moistureConditions' })
export class MoistureConditions extends LogBaseEntity {
  @Column({ type: 'varchar', length: 50 })
  PressureSensorID: string;
 
}
