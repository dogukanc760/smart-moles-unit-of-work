import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { SmartCapillarity } from 'src/model/OldSystem/Khas/smartCapillarity.entity';

export class SmartCapillarityDTO implements Readonly<SmartCapillarityDTO> {
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
  KhasSetupID: string;
  @ApiProperty({ required: false })
  @IsString()
  DeviceID: string;
  @ApiProperty({ required: false })
  @IsString()
  NameTr: string;
  @ApiProperty({ required: false })
  @IsString()
  NameEn: string;
  @ApiProperty({ required: false })
  @IsString()
  DeviceLocation: string;
  @ApiProperty({ required: false })
  @IsString()
  KhasResetCount: string;
  @ApiProperty({ required: false })
  @IsString()
  SensorRangeLimit: string;
  @ApiProperty({ required: false })
  DigitalPercentLimitByRow: string[];

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<SmartCapillarityDTO>) {
    const it = new SmartCapillarityDTO();
    it.contentId = dto.contentId;

    it.KhasSetupID = dto.KhasSetupID;
    it.DeviceID = dto.DeviceID;
    it.NameEn = dto.NameEn;
    it.NameTr = dto.NameTr;
    it.DeviceLocation = dto.DeviceLocation;
    it.KhasResetCount = dto.KhasResetCount;
    it.SensorRangeLimit = dto.SensorRangeLimit;
    it.DigitalPercentLimitByRow = dto.DigitalPercentLimitByRow;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: SmartCapillarity) {
    return this.from({
      contentId: entity.ContentID,

      DeviceID: entity.DeviceID,
      DeviceLocation: entity.DeviceLocation,
      DigitalPercentLimitByRow: entity.DigitalPercentLimitByRow,
      KhasResetCount: entity.KhasResetCount, 
      KhasSetupID: entity.KhasSetupID,  
      NameEn: entity.NameEn,
      NameTr: entity.NameTr,
      SensorRangeLimit: entity.SensorRangeLimit,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<SmartCapillarityDTO>) {
    const givenData = new SmartCapillarity();

    givenData.KhasSetupID  = dto.KhasSetupID;
    givenData.DeviceID = dto.DeviceID;
    givenData.NameTr = dto.NameTr;
    givenData.NameEn = dto.NameEn;
    givenData.DeviceLocation = dto.DeviceLocation;
    givenData.KhasResetCount = dto.KhasResetCount;
    givenData.SensorRangeLimit = dto.SensorRangeLimit;
    givenData.DigitalPercentLimitByRow = dto.DigitalPercentLimitByRow;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
