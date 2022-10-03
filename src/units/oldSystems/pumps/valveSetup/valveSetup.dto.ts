import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { ValveCardGroups } from 'src/model/OldSystem/Pumps/valveCardGroup.entity';
import { ValveConditions } from 'src/model/OldSystem/Pumps/valveCondition.entity';
import { ValveSetups } from 'src/model/OldSystem/Pumps/valveSetups.entity';

export class ValveSetupDTO implements Readonly<ValveSetupDTO> {
  @ApiProperty({ required: false })
  contentId: string;
  @ApiProperty({ required: false })
  createdAt: Date;
  @ApiProperty({ required: false })
  updatedAt: Date;
  @ApiProperty({ required: false })
  lastChangedDateTime: Date;
  @ApiProperty({ required: false })
  PumpID: string;
  @ApiProperty({ required: false })
  @IsString()
  ValveType: string;
  @ApiProperty({ required: false })
  @IsString()
  ValveCount: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<ValveSetupDTO>) {
    const it = new ValveSetupDTO();
    it.contentId = dto.contentId;

    it.ValveType = dto.ValveType;
    it.PumpID = dto.PumpID;
    it.ValveCount = dto.ValveCount;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: ValveSetups) {
    return this.from({
      contentId: entity.ContentID,

      ValveType: entity.ValveType,

      PumpID: entity.PumpID,

      ValveCount: entity.ValveCount,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<ValveSetupDTO>) {
    const givenData = new ValveSetups();

    givenData.ValveType = dto.ValveType;

    givenData.PumpID = dto.PumpID;

    givenData.ValveCount = dto.ValveCount;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
