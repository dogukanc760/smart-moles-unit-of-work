import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1659010124840 implements MigrationInterface {
    name = 'migrations1659010124840'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "WorkGroupID"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "PressureSensor"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "PressureMin"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "PressureMax"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "WaterMeter"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "ConnectPeriodWhenWork"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "ConnectPeriodWhenStop"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "LitreMinCount"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "LitrePulseCount"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Description"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "ValveType"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "ValveTypeCount"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Eeprom"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "LastConnection"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "ValveExit"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "MoistureBox"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Tempeture"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Voltage"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "WorkMode"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "IsOpen"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Error"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Days"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "StartHour"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "FinishHour"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "TotalWorkTime"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "IsAuto"`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Days" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "StartHour" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "FinishHour" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "TotalWorkTime" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "IsAuto" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "WorkGroupID" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "PressureSensor" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "PressureMin" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "PressureMax" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "WaterMeter" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "ConnectPeriodWhenWork" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "ConnectPeriodWhenStop" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "LitreMinCount" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "LitrePulseCount" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Description" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "ValveType" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "ValveTypeCount" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Eeprom" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "LastConnection" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "ValveExit" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "MoistureBox" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Tempeture" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Voltage" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "WorkMode" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "IsOpen" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Error" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Error"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "IsOpen"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "WorkMode"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Voltage"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Tempeture"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "MoistureBox"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "ValveExit"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "LastConnection"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Eeprom"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "ValveTypeCount"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "ValveType"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Description"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "LitrePulseCount"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "LitreMinCount"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "ConnectPeriodWhenStop"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "ConnectPeriodWhenWork"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "WaterMeter"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "PressureMax"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "PressureMin"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "PressureSensor"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "WorkGroupID"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "IsAuto"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "TotalWorkTime"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "FinishHour"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "StartHour"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Days"`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "IsAuto" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "TotalWorkTime" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "FinishHour" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "StartHour" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Days" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Error" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "IsOpen" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "WorkMode" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Voltage" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Tempeture" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "MoistureBox" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "ValveExit" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "LastConnection" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Eeprom" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "ValveTypeCount" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "ValveType" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Description" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "LitrePulseCount" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "LitreMinCount" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "ConnectPeriodWhenStop" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "ConnectPeriodWhenWork" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "WaterMeter" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "PressureMax" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "PressureMin" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "PressureSensor" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "WorkGroupID" character varying(50) NOT NULL`);
    }

}
