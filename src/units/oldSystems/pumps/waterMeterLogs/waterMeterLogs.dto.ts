import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { PressureSensorLogs } from 'src/model/OldSystem/Pumps/pressureSensorLogs.entity';
import { WaterMeterLogs } from 'src/model/OldSystem/Pumps/waterMeterLogs.entity';

export class WaterMeterLogsDTO implements Readonly<WaterMeterLogsDTO> {
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
  WaterMeterID: string;
  @ApiProperty()
  @IsString()
  LogContent: string;
  @ApiProperty()
  @IsString()
  LogTitle: string;
  @ApiProperty()
  @IsString()
  LogDescription: string;
  @ApiProperty()
  @IsString()
  LogStatus: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<WaterMeterLogsDTO>) {
    const it = new WaterMeterLogsDTO();
    it.WaterMeterID = dto.WaterMeterID;
    it.LogContent = dto.LogContent;
    it.LogDescription = dto.LogDescription;
    it.LogStatus = dto.LogStatus;
    it.LogTitle = dto.LogTitle;
    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: WaterMeterLogs) {
    return this.from({
      WaterMeterID: entity.WaterMeterID,
      LogContent: entity.LogContent,
      LogDescription: entity.LogDescription,
      LogStatus: entity.LogStatus,
      LogTitle: entity.LogTitle,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<WaterMeterLogsDTO>) {
    const givenData = new WaterMeterLogs();

    givenData.WaterMeterID = dto.WaterMeterID;
    givenData.LogContent = dto.LogContent;
    givenData.LogDescription = dto.LogDescription;
    givenData.LogStatus = dto.LogStatus;
    givenData.LogTitle = dto.LogTitle;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
