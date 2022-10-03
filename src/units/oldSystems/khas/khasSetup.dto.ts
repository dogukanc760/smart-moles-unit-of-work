import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { KhasSetup } from 'src/model/OldSystem/Khas/khasSetup.entity';

export class KhasSetupDTO implements Readonly<KhasSetupDTO> {
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
  HubGroupID: string;
  @ApiProperty({ required: false })
  @IsString()
  IrrigationTypes: string;
  @ApiProperty({ required: false })
  @IsString()
  DripperRanges: string;
  @ApiProperty({ required: false })
  @IsString()
  BaseHeight: string;
  @ApiProperty({ required: false })
  @IsString()
  Valve: string;
  @ApiProperty({ required: false })
  @IsString()
  SensorType: string;
  @ApiProperty({ required: false })
  @IsString()
  PlantType: string;
  @ApiProperty({ required: false })
  @IsString()
  DeviceLocation: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<KhasSetupDTO>) {
    const it = new KhasSetupDTO();
    it.contentId = dto.contentId;

    it.HubGroupID = dto.HubGroupID;
    it.IrrigationTypes = dto.IrrigationTypes;
    it.DripperRanges = it.DripperRanges;
    it.BaseHeight = dto.BaseHeight;
    it.Valve = dto.Valve;
    it.SensorType = dto.SensorType;
    it.PlantType = dto.PlantType;
    it.DeviceLocation = dto.DeviceLocation;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: KhasSetup) {
    return this.from({
      contentId: entity.ContentID,

      HubGroupID: entity.HubGroupId,
      IrrigationTypes: entity.IrrigationTypes,
      BaseHeight: entity.BaseHeight,
      DeviceLocation: entity.DeviceLocation,
      DripperRanges: entity.DripperRanges,
      PlantType: entity.PlantType,
      SensorType: entity.SensorType,
      Valve: entity.Valve,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<KhasSetupDTO>) {
    const givenData = new KhasSetup();

    givenData.HubGroupId = dto.HubGroupID;
    givenData.IrrigationTypes = dto.IrrigationTypes;
    givenData.DripperRanges = dto.DripperRanges;
    givenData.BaseHeight = dto.BaseHeight;
    givenData.Valve = dto.Valve;
    givenData.SensorType = dto.SensorType;
    givenData.PlantType = dto.PlantType;
    givenData.DeviceLocation = dto.DeviceLocation;
    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
