import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../base.entity';

@Entity({ name: 'sensorMoistureLog' })
export class SensorMoistureLog extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  SensorCardID: string;
  @Column({ type:"text", array:true })
  Sensors: string[];
  @Column({ type:"text", array:true })
  SensorDatas: string[];
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  GetDataAt: Date;
}
