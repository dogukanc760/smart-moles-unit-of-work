import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { DevicesLocation } from 'src/model/ExternalUnits/devicesLocation.entity';
import { Gateway } from 'src/model/Gateway/gateway.entity';
import { SmartRoot } from 'src/model/SmartRoot/smartRoot.entity';
import { SmartRootDetailSecond } from 'src/model/SmartRoot/smartRootDetailSecond.entity';
import { isBoolean } from 'util';

export class SmartRootDetailSecondDTO implements Readonly<SmartRootDetailSecondDTO> {
  @ApiProperty({ required: false })
  contentId: string;
  @ApiProperty({ required: false })
  createdAt: Date;
  @ApiProperty({ required: false })
  updatedAt: Date;
  @ApiProperty({ required: false })
  lastChangedDateTime: Date;
  @ApiProperty()
  @IsString()
  SmartRootID: string;
  @ApiProperty()
  @IsString()
  Sensors: string[];
  @ApiProperty()
  @IsString()
  SensorDatas: string[];
  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<SmartRootDetailSecondDTO>) {
    const it = new SmartRootDetailSecondDTO();
    it.contentId = dto.contentId;

    it.SmartRootID = dto.SmartRootID;
    it.Sensors = dto.Sensors;
    it.SensorDatas = dto.SensorDatas;
    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: SmartRootDetailSecond) {
    return this.from({
      contentId: entity.ContentID,
      Sensors: entity.Sensors,
      SensorDatas: entity.SensorDatas,
      SmartRootID : entity.SmartRootID,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<SmartRootDetailSecondDTO>) {
    const givenData = new SmartRootDetailSecond();
    givenData.SmartRootID = dto.SmartRootID;
    
    givenData.SensorDatas = dto.SensorDatas;
    givenData.Sensors = dto.Sensors;
    
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
