import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'tParametersByValve' })
export class TParamatersByValve extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  ValveID: string;
  @Column({type: 'varchar', length: 50 })
  T1T3TargetValue: string;
  @Column({type: 'varchar', length: 50 })
  IncrementT1Time: string;
  @Column({type: 'varchar', length: 50 })
  ChangeT1Time: string;
  @Column({type: 'varchar', length: 50 })
  DecrementT1Time: string;
  @Column({type: 'varchar', length: 50 })
  T1TimeMinLimit: string;
  @Column({type: 'varchar', length: 50 })
  T1TimeMaxLimit: string;
  @Column({type: 'varchar', length: 50 })
  T2MinLimit: string;
  @Column({type: 'varchar', length: 50 })
  T2MaxLimit: string;
  @Column({type: 'varchar', length: 50 })
  IncrementT3Time: string;
  @Column({type: 'varchar', length: 50 })
  ChangeT3Time: string;
  @Column({type: 'varchar', length: 50 })
  DecrementT3Time: string;
  @Column({ type: 'varchar', length: 50 })
  T3TimeMinLimit: string;
  @Column({ type: 'varchar', length: 50 })
  T3TimeMaxLimit: string;
}
