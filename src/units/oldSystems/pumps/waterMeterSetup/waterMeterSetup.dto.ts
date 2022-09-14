import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { WaterMeterSetup } from 'src/model/OldSystem/Pumps/waterMeterSetup.entity';

export class WaterMeterSetupDTO
  implements Readonly<WaterMeterSetupDTO>
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
  PumpID: string;
  @ApiProperty({ required: false })
  @IsString()
  WaterMeterCount: string;
  @ApiProperty({ required: false })
  @IsString()
  WaterMeterContactType: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<WaterMeterSetupDTO>) {
    const it = new WaterMeterSetupDTO();
    it.contentId = dto.contentId;

    it.PumpID = dto.PumpID;
    it.WaterMeterContactType = dto.WaterMeterContactType;
    it.WaterMeterCount = dto.WaterMeterCount;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: WaterMeterSetup) {
    return this.from({
      contentId: entity.ContentID,

      
      PumpID: entity.PumpID,
      WaterMeterContactType: entity.WaterMeterContactType,
      WaterMeterCount: entity.WaterMeterCount,
      

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<WaterMeterSetupDTO>) {
    const givenData = new WaterMeterSetup();

    givenData.PumpID = dto.PumpID;
    givenData.WaterMeterCount = dto.WaterMeterCount;
    givenData.WaterMeterContactType = dto.WaterMeterContactType;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
