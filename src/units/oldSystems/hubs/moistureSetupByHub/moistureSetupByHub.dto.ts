import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsBoolean } from 'class-validator';
import { Hub } from 'src/model/OldSystem/Hub/hub.entity';
<<<<<<<< HEAD:src/units/oldSystems/hubs/moistureSetupByHub/moistureSetupByHub.dto.ts
import { MoistureSetupByHub } from 'src/model/OldSystem/Hub/moistureSetupByHub.entity';

export class MoistureSetupByHubDTO implements Readonly<MoistureSetupByHubDTO> {
========
import { KhasSetupByHub } from 'src/model/OldSystem/Hub/khasSetupByHub.entity';
import { KhasSetup } from 'src/model/OldSystem/Khas/khasSetup.entity';

export class KhasSetupByHubDTO implements Readonly<KhasSetupByHubDTO> {
>>>>>>>> e8fb743d221e6cf77665fdd8a80d2631a17fa6fe:src/units/oldSystems/hubs/khasSetupByHub/khasSetupByHub.dto.ts
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
  HubId: string;
  @ApiProperty({ required: false })
  @IsString()
  PackageLenght: string;
  @ApiProperty({ required: false })
  @IsString()
  EepromAddress: string;
  @ApiProperty({ required: false })
  @IsString()
  Command: string;
  @ApiProperty({ required: false })
  @IsString()
  ReadingPeriod: string;
  @ApiProperty({ required: false })
  @IsString()
  RecieveType: string;
<<<<<<<< HEAD:src/units/oldSystems/hubs/moistureSetupByHub/moistureSetupByHub.dto.ts
  
========
>>>>>>>> e8fb743d221e6cf77665fdd8a80d2631a17fa6fe:src/units/oldSystems/hubs/khasSetupByHub/khasSetupByHub.dto.ts

  @ApiProperty({ required: false })
  @IsBoolean()
  isDeleted: boolean;

<<<<<<<< HEAD:src/units/oldSystems/hubs/moistureSetupByHub/moistureSetupByHub.dto.ts
  public static from(dto: Partial<MoistureSetupByHubDTO>) {
    const it = new MoistureSetupByHubDTO();
========
  public static from(dto: Partial<KhasSetupByHubDTO>) {
    const it = new KhasSetupByHubDTO();
>>>>>>>> e8fb743d221e6cf77665fdd8a80d2631a17fa6fe:src/units/oldSystems/hubs/khasSetupByHub/khasSetupByHub.dto.ts
    it.contentId = dto.contentId;

    it.HubId = dto.HubId;
    it.PackageLenght = dto.PackageLenght;
    it.EepromAddress = dto.EepromAddress; 
    it.Command = dto.Command;
    it.ReadingPeriod = dto.ReadingPeriod;
    it.RecieveType = dto.RecieveType;

    it.createdAt = dto.createdAt;
    it.updatedAt = dto.updatedAt;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.isDeleted = dto.isDeleted;
    return it;
  }

<<<<<<<< HEAD:src/units/oldSystems/hubs/moistureSetupByHub/moistureSetupByHub.dto.ts
  public static fromEntity(entity: MoistureSetupByHub) {
    return this.from({
      contentId: entity.ContentID,

      HubId: entity.HubId,
      PackageLenght: entity.PackageLenght,
      EepromAddress: entity.EepromAddress,
      Command: entity.Command,
========
  public static fromEntity(entity: KhasSetupByHub) {
    return this.from({
      contentId: entity.ContentID,

      Command: entity.Command,
      EepromAddress: entity.EepromAddress,
      HubId: entity.HubId,
      PackageLenght: entity.PackageLenght,
>>>>>>>> e8fb743d221e6cf77665fdd8a80d2631a17fa6fe:src/units/oldSystems/hubs/khasSetupByHub/khasSetupByHub.dto.ts
      ReadingPeriod: entity.ReadingPeriod,
      RecieveType: entity.RecieveType,

      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
      lastChangedDateTime: entity.lastChangedDateTime,
      isDeleted: entity.isDeleted,
    });
  }

<<<<<<<< HEAD:src/units/oldSystems/hubs/moistureSetupByHub/moistureSetupByHub.dto.ts
  public static toEntity(dto: Partial<MoistureSetupByHubDTO>) {
    const givenData = new MoistureSetupByHub();
    
========
  public static toEntity(dto: Partial<KhasSetupByHubDTO>) {
    const givenData = new KhasSetupByHub();

>>>>>>>> e8fb743d221e6cf77665fdd8a80d2631a17fa6fe:src/units/oldSystems/hubs/khasSetupByHub/khasSetupByHub.dto.ts
    givenData.HubId = dto.HubId;
    givenData.PackageLenght = dto.PackageLenght;
    givenData.EepromAddress = dto.EepromAddress;
    givenData.Command = dto.Command;
    givenData.ReadingPeriod = dto.ReadingPeriod;
    givenData.RecieveType = dto.RecieveType;

    givenData.updatedAt = new Date();
    givenData.lastChangedDateTime = new Date();
    givenData.isDeleted = false;
    return givenData;
  }
}
