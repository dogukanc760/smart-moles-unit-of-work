import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { HubSetup } from 'src/model/OldSystem/Hub/hubSetup.entity';

export class HubSetupDTO implements Readonly<HubSetupDTO> {
  @ApiProperty({ required: false })
  contentId: string;
  @ApiProperty({ required: false })
  createdAt: Date;
  @ApiProperty({ required: false })
  updatedAt: Date;
  @ApiProperty({ required: false })
  lastChangedDateTime: Date;
  @ApiProperty({ required: false })
  @IsString()
  HubId: string;
  @ApiProperty({ required: false })
  @IsString()
  HubDeviceId: string;
  @ApiProperty({ required: false })
  @IsString()
  ServerIP: string;
  @ApiProperty({ required: false })
  @IsString()
  ServerIPEeprom: string;
  @ApiProperty({ required: false })
  @IsString()
  ServerPort: string;
  @ApiProperty({ required: false })
  @IsString()
  ServerPortEeprom: string;
  @ApiProperty({ required: false })
  @IsString()
  TelitClientPort: string;
  @ApiProperty({ required: false })
  @IsString()
  TelitClientPortEeprom: string;
  @ApiProperty({ required: false })
  @IsString()
  InstallationDate: string;
  @ApiProperty({ required: false })
  @IsString()
  InstallationDateEeprom: string;
  @ApiProperty({ required: false })
  @IsString()
  ArmCodeVerEeprom: string;
  @ApiProperty({ required: false })
  @IsString()
  ArmCodeVer: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<HubSetupDTO>) {
    const it = new HubSetupDTO();
    it.contentId = dto.contentId;

    it.HubId = dto.HubId;
    it.HubDeviceId = dto.HubDeviceId;
    it.ServerIP = dto.ServerIP;
    it.ServerIPEeprom = dto.ServerIPEeprom;
    it.ServerPort = dto.ServerPort;
    it.ServerPortEeprom = dto.ServerPortEeprom;
    it.TelitClientPort = dto.TelitClientPort;
    it.TelitClientPortEeprom = dto.TelitClientPortEeprom;
    it.InstallationDate = dto.InstallationDate;
    it.InstallationDateEeprom = dto.InstallationDateEeprom;
    it.ArmCodeVer = dto.ArmCodeVer;
    it.ArmCodeVerEeprom = dto.ArmCodeVerEeprom;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: HubSetup) {
    return this.from({
      contentId: entity.ContentID,

      ArmCodeVer: entity.ArmCodeVer,
      ArmCodeVerEeprom: entity.ArmCodeVerEeprom,
      HubDeviceId: entity.HubDeviceId,
      HubId: entity.HubId,
      InstallationDate: entity.InstallationDate,
      InstallationDateEeprom: entity.InstallationDateEeprom,
      ServerIP: entity.ServerIP,
      ServerIPEeprom: entity.ServerIPEeprom,
      ServerPort: entity.ServerPort,
      ServerPortEeprom: entity.ServerPortEeprom,
      TelitClientPort: entity.TelitClientPort,
      TelitClientPortEeprom: entity.TelitClientPortEeprom,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<HubSetupDTO>) {
    const givenData = new HubSetup();

    givenData.HubId = dto.HubId;
    givenData.HubDeviceId = dto.HubDeviceId;
    givenData.ServerIP = dto.ServerIP;
    givenData.ServerIPEeprom = dto.ServerIPEeprom;
    givenData.ServerPort = dto.ServerPort;
    givenData.ServerPortEeprom = dto.ServerPortEeprom;
    givenData.TelitClientPort = dto.TelitClientPort;
    givenData.TelitClientPortEeprom = dto.TelitClientPortEeprom;
    givenData.InstallationDate = dto.InstallationDate;
    givenData.InstallationDateEeprom = dto.InstallationDateEeprom;
    givenData.ArmCodeVerEeprom = dto.ArmCodeVerEeprom;
    givenData.ArmCodeVer = dto.ArmCodeVer;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
