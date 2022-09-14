import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { HubGroups } from 'src/model/OldSystem/Hub/hubGroups.entity';

export class HubGroupsDTO implements Readonly<HubGroupsDTO> {
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
  GroupId: string;
  @ApiProperty({ required: false })
  @IsString()
  NameTr: string;
  @ApiProperty({ required: false })
  @IsString()
  NameEn: string;
  @ApiProperty({ required: false })
  @IsString()
  DeviceTypes: string;
  @ApiProperty({ required: false })
  @IsBoolean()
  ValveCheck: boolean;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<HubGroupsDTO>) {
    const it = new HubGroupsDTO();
    it.contentId = dto.contentId;

    it.HubId = dto.HubId;
    it.GroupId = dto.GroupId;
    it.NameTr = dto.NameTr;
    it.NameEn = dto.NameEn;
    it.DeviceTypes = dto.DeviceTypes;
    it.ValveCheck = dto.ValveCheck;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: HubGroups) {
    return this.from({
      contentId: entity.ContentID,

      HubId: entity.HubId,
      GroupId: entity.GroupId,
      NameEn: entity.NameEn,
      NameTr: entity.NameTr,
      DeviceTypes: entity.DeviceTypes,
      ValveCheck: entity.ValveCheck,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<HubGroupsDTO>) {
    const givenData = new HubGroups();

    givenData.HubId = dto.HubId;
    givenData.GroupId = dto.GroupId;
    givenData.NameEn = dto.NameEn;
    givenData.NameTr = dto.NameTr;
    givenData.DeviceTypes = dto.DeviceTypes;
    givenData.ValveCheck = dto.ValveCheck;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
