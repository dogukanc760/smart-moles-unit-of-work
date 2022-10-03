import { BaseEntity } from 'src/model/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'hubSetup' })
export class HubSetup extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  HubId: string;
  @Column({ type: 'varchar', length: 50 })
  HubDeviceId: string;
  @Column({ type: 'varchar', length: 50 })
  ServerIP: string;
  @Column({ type: 'varchar', length: 50 })
  ServerIPEeprom: string;
  @Column({ type: 'varchar', length: 50 })
  ServerPort: string;
  @Column({ type: 'varchar', length: 50 })
  ServerPortEeprom: string;
  @Column({ type: 'varchar', length: 50 })
  TelitClientPort: string;
  @Column({ type: 'varchar', length: 50 })
  TelitClientPortEeprom: string;
  @Column({ type: 'varchar', length: 50 })
  InstallationDate: string;
  @Column({ type: 'varchar', length: 50 })
  InstallationDateEeprom: string;
  @Column({ type: 'varchar', length: 50 })
  ArmCodeVer: string;
  @Column({ type: 'varchar', length: 50 })
  ArmCodeVerEeprom: string;
}
