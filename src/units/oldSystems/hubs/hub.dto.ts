import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Hub } from 'src/model/OldSystem/Hub/hub.entity';

export class HubDTO implements Readonly<HubDTO> {
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
  UserID: string;
  @ApiProperty({ required: false })
  @IsString()
  ContractID: string;
  @ApiProperty({ required: false })
  @IsString()
  NameTr: string;
  @ApiProperty({ required: false })
  @IsString()
  NameEn: string;
  @ApiProperty({ required: false })
  @IsString()
  HourType: string;
  @ApiProperty({ required: false })
  @IsString()
  HubIP: string;
  @ApiProperty({ required: false })
  @IsString()
  HubPort: string;
  @ApiProperty({ required: false })
  @IsBoolean()
  HubCheck: boolean;
  @ApiProperty({ required: false })
  @IsString()
  ProjectImage: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<HubDTO>) {
    const it = new HubDTO();
    it.contentId = dto.contentId;

    it.UserID = dto.UserID;
    it.ContractID = dto.ContractID;
    it.NameTr = dto.NameTr;
    it.NameEn = dto.NameEn;
    it.HourType = dto.HourType;
    it.HubIP = dto.HubIP;
    it.HubPort = dto.HubPort;
    it.HubCheck = dto.HubCheck;
    it.ProjectImage = dto.ProjectImage;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: Hub) {
    return this.from({
      contentId: entity.ContentID,

      ContractID: entity.ContractID,
      HourType: entity.HourType,
      HubCheck: entity.HubCheck,
      HubIP: entity.HubIP,
      HubPort: entity.HubPort,
      NameEn: entity.NameEn,
      NameTr: entity.NameTr,
      ProjectImage: entity.ProjectImage,
      UserID: entity.UserID,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<HubDTO>) {
    const givenData = new Hub();
    
    givenData.UserID = dto.UserID;
    givenData.ContractID = dto.ContractID;
    givenData.NameTr = dto.NameTr;
    givenData.NameEn = dto.NameEn;
    givenData.HourType = dto.HourType;
    givenData.HubIP = dto.HubIP;
    givenData.HubPort = dto.HubPort;
    givenData.HubCheck = dto.HubCheck;
    givenData.ProjectImage = dto.ProjectImage;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
