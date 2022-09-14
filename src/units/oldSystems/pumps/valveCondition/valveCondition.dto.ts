import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { ValveCardGroups } from 'src/model/OldSystem/Pumps/valveCardGroup.entity';
import { ValveConditions } from 'src/model/OldSystem/Pumps/valveCondition.entity';

export class ValveConditionsDTO implements Readonly<ValveConditionsDTO> {
  @ApiProperty({ required: false })
  contentId: string;
  @ApiProperty({ required: false })
  createdAt: Date;
  @ApiProperty({ required: false })
  updatedAt: Date;
  @ApiProperty({ required: false })
  lastChangedDateTime: Date;
  @ApiProperty({ required: false })
  ValveID: string;
  @ApiProperty({ required: false })
  @IsString()
  Eeprom: string;
  @ApiProperty({ required: false })
  @IsString()
  ValveManagement: string;
  @ApiProperty({ required: false })
  @IsString()
  ManagementType: string;
  @ApiProperty({ required: false })
  @IsString()
  StartHour: string;
  @ApiProperty({ required: false })
  @IsString()
  FinishHour: string;
  @ApiProperty({ required: false })
  @IsString()
  CheckDailyWorkHour: string;
  @ApiProperty({ required: false })
  @IsString()
  WorkTime: string;
  @ApiProperty({ required: false })
  @IsString()
  PendingTime: string;
  @ApiProperty({ required: false })
  @IsString()
  DailyTotalWorkTime: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<ValveConditionsDTO>) {
    const it = new ValveConditionsDTO();
    it.contentId = dto.contentId;

    it.Eeprom = dto.Eeprom;
    it.ValveID = dto.ValveID;
    it.ValveManagement = dto.ValveManagement;
    it.ManagementType = dto.ManagementType;
    it.StartHour = dto.StartHour;
    it.FinishHour = dto.FinishHour;
    it.CheckDailyWorkHour = dto.CheckDailyWorkHour;
    it.WorkTime = dto.WorkTime;
    it.CheckDailyWorkHour = dto.CheckDailyWorkHour;
    it.WorkTime = dto.WorkTime;
    it.PendingTime = dto.PendingTime;
    it.DailyTotalWorkTime = dto.DailyTotalWorkTime;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: ValveConditions) {
    return this.from({
      contentId: entity.ContentID,

      Eeprom: entity.Eeprom,
      FinishHour: entity.FinishHour,
      CheckDailyWorkHour: entity.CheckDailyWorkHour,
      ValveID: entity.ValveID,
      ManagementType: entity.ManagementType,
      ValveManagement: entity.ValveManagement,
      StartHour: entity.StartHour,
      DailyTotalWorkTime: entity.DailyTotalWorkTime,
      PendingTime: entity.PendingTime,
      WorkTime: entity.WorkTime,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<ValveConditionsDTO>) {
    const givenData = new ValveConditions();

    givenData.Eeprom = dto.Eeprom;
    givenData.FinishHour = dto.FinishHour;
    givenData.CheckDailyWorkHour = dto.CheckDailyWorkHour;
    givenData.ValveID = dto.ValveID;
    givenData.ManagementType = dto.ManagementType;
    givenData.ValveManagement = dto.ValveManagement;
    givenData.StartHour = dto.StartHour;
    givenData.CheckDailyWorkHour = dto.CheckDailyWorkHour;
    givenData.WorkTime = dto.WorkTime;
    givenData.PendingTime = dto.PendingTime;
    givenData.DailyTotalWorkTime = dto.DailyTotalWorkTime;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
