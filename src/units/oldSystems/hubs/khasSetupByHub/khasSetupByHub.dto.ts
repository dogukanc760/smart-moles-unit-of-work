import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Hub } from 'src/model/OldSystem/Hub/hub.entity';
import { KhasSetupByHub } from 'src/model/OldSystem/Hub/khasSetupByHub.entity';
import { KhasSetup } from 'src/model/OldSystem/Khas/khasSetup.entity';

export class KhasSetupByHubDTO implements Readonly<KhasSetupByHubDTO> {
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
  PackageLenght: string;
  @ApiProperty({ required: false })
  @IsString()
  EepromAddress: string;
  @ApiProperty({ required: false })
  @IsString()
  Command: string;
  @ApiProperty({ required: false })
  @IsString()
  ReadingPeriod: string;
  @ApiProperty({ required: false })
  @IsString()
  RecieveType: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<KhasSetupByHubDTO>) {
    const it = new KhasSetupByHubDTO();
    it.contentId = dto.contentId;

    it.HubId = dto.HubId;
    it.PackageLenght = dto.PackageLenght;
    it.EepromAddress = dto.EepromAddress;
    it.Command = dto.Command;
    it.ReadingPeriod = dto.ReadingPeriod;
    it.RecieveType = dto.RecieveType;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: KhasSetupByHub) {
    return this.from({
      contentId: entity.ContentID,

      Command: entity.Command,
      EepromAddress: entity.EepromAddress,
      HubId: entity.HubId,
      PackageLenght: entity.PackageLenght,
      ReadingPeriod: entity.ReadingPeriod,
      RecieveType: entity.RecieveType,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<KhasSetupByHubDTO>) {
    const givenData = new KhasSetupByHub();

    givenData.HubId = dto.HubId;
    givenData.PackageLenght = dto.PackageLenght;
    givenData.EepromAddress = dto.EepromAddress;
    givenData.Command = dto.Command;
    givenData.ReadingPeriod = dto.ReadingPeriod;
    givenData.RecieveType = dto.RecieveType;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
