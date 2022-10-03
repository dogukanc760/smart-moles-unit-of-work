import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { PumpSetups } from 'src/model/OldSystem/Pumps/pumpSetup.entity';
import { TParamatersByValve } from 'src/model/OldSystem/Pumps/tParametersByValve.entity';

export class TParamatersByValveDTO implements Readonly<TParamatersByValveDTO> {
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
  @IsString()
  T1T3TargetValue: string;
  @ApiProperty({ required: false })
  @IsString()
  IncrementT1Time: string;
  @ApiProperty({ required: false })
  @IsString()
  ChangeT1Time: string;
  @ApiProperty({ required: false })
  @IsString()
  DecrementT1Time: string;
  @ApiProperty({ required: false })
  @IsString()
  T1TimeMinLimit: string;
  @ApiProperty({ required: false })
  @IsString()
  T1TimeMaxLimit: string;
  @ApiProperty({ required: false })
  @IsString()
  T2MinLimit: string;
  @ApiProperty({ required: false })
  @IsString()
  T2MaxLimit: string;
  @ApiProperty({ required: false })
  @IsString()
  IncrementT3Time: string;
  @ApiProperty({ required: false })
  @IsString()
  ChangeT3Time: string;
  @ApiProperty({ required: false })
  @IsString()
  DecrementT3Time: string;
  @ApiProperty({ required: false })
  @IsString()
  T3TimeMinLimit: string;
  @ApiProperty({ required: false })
  @IsString()
  T3TimeMaxLimit: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

  public static from(dto: Partial<TParamatersByValveDTO>) {
    const it = new TParamatersByValveDTO();
    it.contentId = dto.contentId;

    it.ValveID = dto.ValveID;
    it.T1T3TargetValue = dto.T1T3TargetValue;
    it.IncrementT1Time = dto.IncrementT1Time;
    it.ChangeT1Time = dto.ChangeT1Time;
    it.DecrementT1Time = dto.DecrementT1Time;
    it.T1TimeMaxLimit = dto.T1TimeMaxLimit;
    it.T1TimeMinLimit = dto.T1TimeMinLimit;
    it.T2MaxLimit = dto.T2MaxLimit;
    it.IncrementT3Time = dto.IncrementT3Time;
    it.ChangeT3Time = dto.ChangeT3Time;
    it.DecrementT3Time = dto.DecrementT3Time;
    it.T3TimeMinLimit = dto.T3TimeMinLimit;
    it.T3TimeMaxLimit = dto.T3TimeMaxLimit;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

  public static fromEntity(entity: TParamatersByValve) {
    return this.from({
      contentId: entity.ContentID,

      ValveID: entity.ValveID,
      T1T3TargetValue: entity.T1T3TargetValue,
      IncrementT1Time: entity.IncrementT1Time,
      ChangeT1Time: entity.ChangeT1Time,
      DecrementT1Time: entity.DecrementT1Time,
      T1TimeMinLimit: entity.T1TimeMinLimit,
      T1TimeMaxLimit: entity.T1TimeMaxLimit,
      T2MaxLimit: entity.T2MaxLimit,
      IncrementT3Time: entity.IncrementT3Time,
      ChangeT3Time: entity.ChangeT3Time,
      DecrementT3Time: entity.DecrementT3Time,
      T3TimeMaxLimit: entity.T3TimeMaxLimit,
      T3TimeMinLimit: entity.T3TimeMinLimit,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

  public static toEntity(dto: Partial<TParamatersByValveDTO>) {
    const givenData = new TParamatersByValve();

    givenData.ValveID = dto.ValveID;
    givenData.T1T3TargetValue = dto.T1T3TargetValue;
    givenData.IncrementT1Time = dto.IncrementT1Time;
    givenData.ChangeT1Time = dto.ChangeT1Time;
    givenData.DecrementT1Time = dto.DecrementT1Time;
    givenData.T1TimeMinLimit = dto.T1TimeMinLimit;
    givenData.T1TimeMaxLimit = dto.T1TimeMaxLimit;
    givenData.T2MaxLimit = dto.T2MaxLimit;
    givenData.T2MinLimit = dto.T2MinLimit;
    givenData.IncrementT3Time = dto.IncrementT3Time;
    givenData.ChangeT3Time = dto.ChangeT3Time;
    givenData.DecrementT3Time = dto.DecrementT3Time;
    givenData.T3TimeMinLimit = dto.T3TimeMinLimit;
    givenData.T3TimeMaxLimit = dto.T3TimeMaxLimit;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
