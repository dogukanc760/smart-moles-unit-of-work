import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { HubDateHour } from 'src/model/OldSystem/Hub/hubDateHour.entity';

export class HubDateHourDTO implements Readonly<HubDateHourDTO> {
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
  Date: string;
  @ApiProperty({ required: false })
  @IsString()
  Hour: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<HubDateHourDTO>) {
    const it = new HubDateHourDTO();
    it.contentId = dto.contentId;

    it.Date = dto.Date;
    it.HubId = dto.HubId;
    it.Hour = dto.Hour;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: HubDateHour) {
    return this.from({
      contentId: entity.ContentID,

      HubId: entity.HubId,
      Date: entity.Date,
      Hour: entity.Hour,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<HubDateHourDTO>) {
    const givenData = new HubDateHour();

    givenData.HubId = dto.HubId;
    givenData.Date = dto.Date;
    givenData.Hour = dto.Hour;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
