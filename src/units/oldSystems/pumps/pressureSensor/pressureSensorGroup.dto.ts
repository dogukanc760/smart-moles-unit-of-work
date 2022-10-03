import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { HubGroups } from 'src/model/OldSystem/Hub/hubGroups.entity';
import { PressureSensorGroups } from 'src/model/OldSystem/Pumps/pressureSensorGroup.entity';
import { PressureSensorSetup } from 'src/model/OldSystem/Pumps/pressureSensorSetup.entity';

export class PressureSensorGroupsDTO
  implements Readonly<PressureSensorGroupsDTO>
{
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
  PressureSensorSetupID: string;
  @ApiProperty({ required: false })
  @IsString()
  DeviceID: string;
  @ApiProperty({ required: false })
  @IsString()
  NameTr: string;
  @ApiProperty({ required: false })
  @IsString()
  NameEn: string;
  @ApiProperty({ required: false })
  @IsString()
  DeviceLocation: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<PressureSensorGroupsDTO>) {
    const it = new PressureSensorGroupsDTO();
    it.contentId = dto.contentId;

    it.PressureSensorSetupID = dto.PressureSensorSetupID;
    it.DeviceID = dto.DeviceID;
    it.NameTr = dto.NameTr;
    it.NameEn = dto.NameEn;
    it.DeviceLocation = dto.DeviceLocation;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: PressureSensorGroups) {
    return this.from({
      contentId: entity.ContentID,

      PressureSensorSetupID: entity.PressureSensorSetupID,
      DeviceID: entity.DeviceID,
      NameEn: entity.NameEn,
      NameTr: entity.NameTr,
      DeviceLocation: entity.DeviceLocation,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<PressureSensorGroupsDTO>) {
    const givenData = new PressureSensorGroups();

    givenData.PressureSensorSetupID = dto.PressureSensorSetupID;
    givenData.DeviceID = dto.DeviceID;
    givenData.NameEn = dto.NameEn;
    givenData.NameTr = dto.NameTr;
    givenData.DeviceLocation = dto.DeviceLocation;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
