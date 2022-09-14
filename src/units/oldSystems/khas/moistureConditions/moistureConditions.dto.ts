import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { MoistureConditions } from 'src/model/OldSystem/Khas/moistureConditions.entity';

export class MoistureConditionsDTO implements Readonly<MoistureConditionsDTO> {
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
  KhasID: string;
  @ApiProperty({ required: false })
  @IsString()
  DeviceEeprom: string;
  @ApiProperty({ required: false })
  @IsString()
  ValveID: string;
  @ApiProperty({ required: false })
  @IsString()
  KhasCount: string;
  @ApiProperty({ required: false })
  @IsString()
  PositionID: string;
  @ApiProperty({ required: false })
  @IsString()
  ConditionID: string;
  @ApiProperty({ required: false })
  @IsString()
  ReadingCommand: string;
  @ApiProperty({ required: false })
  @IsString()
  ConditionEeprom: string;
  @ApiProperty({ required: false })
  @IsString()
  FieldRangeCondition: string;
  @ApiProperty({ required: false })
  @IsString()
  FieldRange: string;
  @ApiProperty({ required: false })
  @IsString()
  MaxRyRate: string;
  @ApiProperty({ required: false })
  @IsBoolean()
  CheckKhasConWhenOver: boolean;
  @ApiProperty({ required: false })
  @IsString()
  StartIrrigationCondition: string;
  @ApiProperty({ required: false })
  @IsString()
  StartIrrigationConditionPoint: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<MoistureConditionsDTO>) {
    const it = new MoistureConditionsDTO();
    it.contentId = dto.contentId;

    it.KhasID = dto.KhasID;
    it.DeviceEeprom = dto.DeviceEeprom;
    it.ValveID = dto.ValveID;
    it.KhasCount = dto.KhasCount;
    it.PositionID = dto.PositionID;
    it.ConditionID = dto.ConditionID;
    it.ReadingCommand = dto.ReadingCommand;
    it.ConditionEeprom = dto.ConditionEeprom;
    it.FieldRangeCondition = dto.FieldRangeCondition;
    it.FieldRange = dto.FieldRange;
    it.MaxRyRate = dto.MaxRyRate;
    it.CheckKhasConWhenOver = dto.CheckKhasConWhenOver;
    it.StartIrrigationConditionPoint = dto.StartIrrigationConditionPoint;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: MoistureConditions) {
    return this.from({
      contentId: entity.ContentID,

      CheckKhasConWhenOver: entity.CheckKhasConWhenOver,
      ConditionEeprom: entity.ConditionEeprom,
      ConditionID: entity.ConditionID,
      DeviceEeprom: entity.DeviceEeprom,
      FieldRange: entity.FieldRange,
      FieldRangeCondition: entity.FieldRangeCondition,
      KhasCount: entity.KhasCount,
      KhasID: entity.KhasID,
      MaxRyRate: entity.MaxRyRate,
      PositionID: entity.PositionID,
      ReadingCommand: entity.ReadingCommand,
      StartIrrigationConditionPoint: entity.StartIrrigationConditionPoint,
      StartIrrigationCondition: entity.StartIrrigationCondition,
      ValveID: entity.ValveID,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<MoistureConditionsDTO>) {
    const givenData = new MoistureConditions();

    givenData.KhasID = dto.KhasID;
    givenData.DeviceEeprom = dto.DeviceEeprom;
    givenData.ValveID = dto.ValveID;
    givenData.KhasCount = dto.KhasCount;
    givenData.PositionID = dto.PositionID;
    givenData.ConditionID = dto.ConditionID;
    givenData.ReadingCommand = dto.ReadingCommand;
    givenData.ConditionEeprom = dto.ConditionEeprom;
    givenData.FieldRange = dto.FieldRange;
    givenData.FieldRangeCondition = dto.FieldRangeCondition;
    givenData.MaxRyRate = dto.MaxRyRate;
    givenData.CheckKhasConWhenOver = dto.CheckKhasConWhenOver;
    givenData.StartIrrigationConditionPoint = dto.StartIrrigationConditionPoint;
    givenData.StartIrrigationCondition = dto.StartIrrigationCondition;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
