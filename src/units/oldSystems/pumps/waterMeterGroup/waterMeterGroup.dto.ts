import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { ValveCardGroups } from 'src/model/OldSystem/Pumps/valveCardGroup.entity';
import { ValveConditions } from 'src/model/OldSystem/Pumps/valveCondition.entity';
import { WaterMeterGroup } from 'src/model/OldSystem/Pumps/WaterMeterGroup.entity';

export class WaterMeterGroupDTO implements Readonly<WaterMeterGroupDTO> {
  @ApiProperty({ required: false })
  contentId: string;
  @ApiProperty({ required: false })
  createdAt: Date;
  @ApiProperty({ required: false })
  updatedAt: Date;
  @ApiProperty({ required: false })
  lastChangedDateTime: Date;
  @ApiProperty({ required: false })
  WaterMeterSetupID: string;
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

  public static from(dto: Partial<WaterMeterGroupDTO>) {
    const it = new WaterMeterGroupDTO();
    it.contentId = dto.contentId;

    it.DeviceID = dto.DeviceID;
    it.WaterMeterSetupID = dto.WaterMeterSetupID;
    it.NameTr = dto.NameTr;
    it.NameEn = dto.NameEn;
    it.DeviceLocation = dto.DeviceLocation;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: WaterMeterGroup) {
    return this.from({
      contentId: entity.ContentID,

      DeviceID: entity.DeviceID,

      WaterMeterSetupID: entity.WaterMeterSetupID,

      NameTr: entity.NameTr,
      DeviceLocation: entity.DeviceLocation,
      NameEn: entity.NameEn,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<WaterMeterGroupDTO>) {
    const givenData = new WaterMeterGroup();

    givenData.DeviceID = dto.DeviceID;

    givenData.WaterMeterSetupID = dto.WaterMeterSetupID;

    givenData.NameTr = dto.NameTr;
    givenData.NameEn = dto.NameEn;
    givenData.DeviceLocation = dto.DeviceLocation;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
