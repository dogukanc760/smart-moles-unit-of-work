import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'khasSetup' })
export class KhasSetup extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  HubGroupId: string;
  @Column({ type: 'varchar', length: 50 })
  IrrigationTypes: string;
  @Column({ type: 'varchar', length:50})
  DripperRanges: string;
  @Column({ type: 'varchar', length:50 })
  BaseHeight: string;
  @Column({ type: 'varchar', length:50 })
  Valve: string;
  @Column({ type: 'varchar', length:50 })
  SensorType: string;
  @Column({ type: 'varchar', length:50 })
  PlantType: string;
  @Column({ type: 'varchar', length:50 })
  DeviceLocation: string; 
}
