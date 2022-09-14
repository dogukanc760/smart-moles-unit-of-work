import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { HubGroups } from 'src/model/OldSystem/Hub/hubGroups.entity';
import { PressureSensorGroups } from 'src/model/OldSystem/Pumps/pressureSensorGroup.entity';
import { PressureSensorParams } from 'src/model/OldSystem/Pumps/pressureSensorParams.entity';
import { PressureSensorSetup } from 'src/model/OldSystem/Pumps/pressureSensorSetup.entity';

export class PressureSensorSetupDTO
  implements Readonly<PressureSensorSetupDTO>
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
  PressureSensorType: string;
  @ApiProperty({ required: false })
  @IsString()
  PressureSensorTypeCount: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<PressureSensorSetupDTO>) {
    const it = new PressureSensorSetupDTO();
    it.contentId = dto.contentId;

    it.PumpID = dto.PumpID;
    it.PressureSensorType = dto.PressureSensorType;
    it.PressureSensorTypeCount = dto.PressureSensorTypeCount;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: PressureSensorSetup) {
    return this.from({
      contentId: entity.ContentID,

      PumpID: entity.PumpID,
      PressureSensorType: entity.PressureSensorType,
      PressureSensorTypeCount: entity.PressureSensorTypeCount,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<PressureSensorSetupDTO>) {
    const givenData = new PressureSensorSetup();

    givenData.PumpID = dto.PumpID;
    givenData.PressureSensorType = dto.PressureSensorType;
    givenData.PressureSensorTypeCount = dto.PressureSensorTypeCount;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
