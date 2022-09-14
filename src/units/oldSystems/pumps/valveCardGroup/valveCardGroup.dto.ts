import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { ValveCardGroups } from 'src/model/OldSystem/Pumps/valveCardGroup.entity';

export class ValveCardGroupsDTO implements Readonly<ValveCardGroupsDTO> {
  @ApiProperty({ required: false })
  contentId: string;
  @ApiProperty({ required: false })
  createdAt: Date;
  @ApiProperty({ required: false })
  updatedAt: Date;
  @ApiProperty({ required: false })
  lastChangedDateTime: Date;
  @ApiProperty({ required: false })
  DeviceID: string;
  @ApiProperty({ required: false })
  @IsString()
  ValveSetupID: string;
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
  @IsString()
  WaterMeter: string;
  @ApiProperty({ required: false })
  @IsString()
  WaterPressureSensor: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<ValveCardGroupsDTO>) {
    const it = new ValveCardGroupsDTO();
    it.contentId = dto.contentId;

    it.ValveSetupID = dto.ValveSetupID;
    it.DeviceID = dto.DeviceID;
    it.NameTr = dto.NameTr;
    it.NameEn = dto.NameEn;
    it.DeviceLocation = dto.DeviceLocation;
    it.WaterMeter = dto.WaterMeter;
    it.WaterPressureSensor = dto.WaterPressureSensor;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: ValveCardGroups) {
    return this.from({
      contentId: entity.ContentID,

      ValveSetupID: entity.ValveSetupID,
      WaterMeter: entity.WaterMeter,
      WaterPressureSensor: entity.WaterPressureSensor,
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

  public static toEntity(dto: Partial<ValveCardGroupsDTO>) {
    const givenData = new ValveCardGroups();

    givenData.ValveSetupID  = dto.ValveSetupID;
    givenData.WaterMeter = dto.WaterMeter;
    givenData.WaterPressureSensor = dto.WaterPressureSensor;
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
