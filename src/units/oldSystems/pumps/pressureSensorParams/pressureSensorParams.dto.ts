import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { HubGroups } from 'src/model/OldSystem/Hub/hubGroups.entity';
import { PressureSensorGroups } from 'src/model/OldSystem/Pumps/pressureSensorGroup.entity';
import { PressureSensorParams } from 'src/model/OldSystem/Pumps/pressureSensorParams.entity';
import { PressureSensorSetup } from 'src/model/OldSystem/Pumps/pressureSensorSetup.entity';

export class PressureSensorParamsDTO
  implements Readonly<PressureSensorParamsDTO>
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
  ValveID: string;
  @ApiProperty({ required: false })
  @IsBoolean()
  CheckPressureSensor: boolean;
  @ApiProperty({ required: false })
  @IsString()
  ValveStartValue: string;
  @ApiProperty({ required: false })
  @IsString()
  OpenTime: string;
  @ApiProperty({ required: false })
  @IsString()
  PressureValueWhenValveClosed: string;
  @ApiProperty({ required: false })
  @IsString()
  CloseTime: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<PressureSensorParamsDTO>) {
    const it = new PressureSensorParamsDTO();
    it.contentId = dto.contentId;

    it.ValveID = dto.ValveID;
    it.CheckPressureSensor = dto.CheckPressureSensor;
    it.ValveStartValue = dto.ValveStartValue;
    it.OpenTime = dto.OpenTime;
    it.PressureValueWhenValveClosed = dto.PressureValueWhenValveClosed;
    it.CloseTime = dto.CloseTime;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: PressureSensorParams) {
    return this.from({
      contentId: entity.ContentID,

      ValveID: entity.ValveID,
      CheckPressureSensor: entity.CheckPressureSensor,
      CloseTime: entity.CloseTime,
      OpenTime: entity.OpenTime,
      PressureValueWhenValveClosed: entity.PressureValueWhenValveClosed,
      ValveStartValue: entity.ValveStartValue,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<PressureSensorParamsDTO>) {
    const givenData = new PressureSensorParams();

    givenData.ValveID = dto.ValveID;
    givenData.CheckPressureSensor = dto.CheckPressureSensor;
    givenData.ValveStartValue = dto.ValveStartValue;
    givenData.OpenTime = dto.OpenTime;
    givenData.PressureValueWhenValveClosed = dto.PressureValueWhenValveClosed;
    givenData.CloseTime = dto.CloseTime;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
