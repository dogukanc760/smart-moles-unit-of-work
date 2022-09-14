import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { PumpSetups } from 'src/model/OldSystem/Pumps/pumpSetup.entity';

export class PumpSetupDTO implements Readonly<PumpSetupDTO> {
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
  HubGroupID: string;
  @ApiProperty({ required: false })
  @IsString()
  PumpType: string;
  @ApiProperty({ required: false })
  @IsString()
  PumpManagementType: string;
  @ApiProperty({ required: false })
  @IsString()
  ValveManagementType: string;
  @ApiProperty({ required: false })
  @IsString()
  DeviceID: string;
  @ApiProperty({ required: false })
  @IsString()
  DeviceNameTr: string;
  @ApiProperty({ required: false })
  @IsString()
  DeviceNameEn: string;
  @ApiProperty({ required: false })
  @IsString()
  DeviceLocation: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<PumpSetupDTO>) {
    const it = new PumpSetupDTO();
    it.contentId = dto.contentId;

    it.HubGroupID = dto.HubGroupID;
    it.PumpType = dto.PumpType;
    it.PumpManagementType = dto.PumpManagementType;
    it.ValveManagementType = dto.ValveManagementType;
    it.DeviceID = dto.DeviceID;
    it.DeviceNameEn = dto.DeviceNameEn;
    it.DeviceNameTr = dto.DeviceNameTr;
    it.DeviceLocation = dto.DeviceLocation;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: PumpSetups) {
    return this.from({
      contentId: entity.ContentID,

      HubGroupID: entity.HubGroupID,
      PumpType: entity.PumpType,
      PumpManagementType: entity.PumpManagementType,
      ValveManagementType: entity.ValveManagementType,
      DeviceID: entity.DeviceID,
      DeviceNameTr: entity.DeviceNameTr,
      DeviceNameEn: entity.DeviceNameEn,
      DeviceLocation: entity.DeviceLocation,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<PumpSetupDTO>) {
    const givenData = new PumpSetups();

    givenData.HubGroupID = dto.HubGroupID;
    givenData.PumpType = dto.PumpType;
    givenData.PumpManagementType = dto.PumpManagementType;
    givenData.ValveManagementType = dto.ValveManagementType;
    givenData.DeviceID = dto.DeviceID;
    givenData.DeviceNameTr = dto.DeviceNameTr;
    givenData.DeviceNameEn = dto.DeviceNameEn;
    givenData.DeviceLocation = dto.DeviceLocation;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
