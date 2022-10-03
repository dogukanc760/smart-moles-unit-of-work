import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { LastKhasValues } from 'src/model/OldSystem/Khas/lastKhasValues.entity';

export class LastKhasValueDTO implements Readonly<LastKhasValueDTO> {
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
  SmartCapillarityID: string;
  @ApiProperty({ required: false })
  @IsString()
  LastCalibrationDate: string;
  @ApiProperty({ required: false })
  @IsString()
  LastCalibrationMoisture: string;
  @ApiProperty({ required: false })
  @IsString()
  PressureSensorValue: string;
  @ApiProperty({ required: false })
  @IsString()
  LastIrrigationCount: string;
  @ApiProperty({ required: false })
  @IsString()
  DailyIrrigationCount: string;
  @ApiProperty({ required: false })
  @IsString()
  SeasonlyTotalIrrigation: string;
  
  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<LastKhasValueDTO>) {
    const it = new LastKhasValueDTO();
    it.contentId = dto.contentId;

    it.SmartCapillarityID = dto.SmartCapillarityID;
    it.LastCalibrationDate = dto.LastCalibrationDate;
    it.LastCalibrationMoisture = dto.LastCalibrationMoisture;
    it.PressureSensorValue = dto.PressureSensorValue; 
    it.LastIrrigationCount = dto.LastIrrigationCount;
    it.DailyIrrigationCount = dto.DailyIrrigationCount;
    it.SeasonlyTotalIrrigation = dto.SeasonlyTotalIrrigation;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: LastKhasValues) {
    return this.from({
      contentId: entity.ContentID,

      DailyIrrigationCount: entity.DailyIrrigationCount,
      LastCalibrationDate: entity.LastCalibrationDate,
      LastCalibrationMoisture: entity.LastCalibrationMoisture,
      LastIrrigationCount: entity.LastIrrigationCount,
      PressureSensorValue: entity.PressureSensorValue,
      SeasonlyTotalIrrigation: entity.SeasonlyTotalIrrigation,
      SmartCapillarityID: entity.SmartCapillarityID,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<LastKhasValueDTO>) {
    const givenData = new LastKhasValues();

    givenData.DailyIrrigationCount = dto.DailyIrrigationCount;
    givenData.SmartCapillarityID = dto.SmartCapillarityID;
    givenData.LastCalibrationDate = dto.LastCalibrationDate;
    givenData.LastCalibrationMoisture = dto.LastCalibrationMoisture;
    givenData.PressureSensorValue = dto.PressureSensorValue;
    givenData.LastIrrigationCount = givenData.LastIrrigationCount; 
    givenData.DailyIrrigationCount = givenData.DailyIrrigationCount;
    givenData.SeasonlyTotalIrrigation = givenData.SeasonlyTotalIrrigation;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
