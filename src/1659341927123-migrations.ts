import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1659341927123 implements MigrationInterface {
    name = 'migrations1659341927123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "timerManagementDetail" ("ContentID" uuid NOT NULL DEFAULT uuid_generate_v4(), "isDeleted" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "TimerManagementID" character varying(50) NOT NULL, "SensorCardID" character varying(50) NOT NULL, "Name" character varying(50) NOT NULL, "Days" text array NOT NULL, "StartHour" character varying(50) NOT NULL, "FinishHour" character varying(50) NOT NULL, "TotalWorkTime" character varying(50) NOT NULL, "IsAuto" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_1f5be1d0f1cab9cf42181cd254e" PRIMARY KEY ("ContentID"))`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "Days"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "StartHour"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "FinishHour"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "TotalWorkTime"`);
        await queryRunner.query(`ALTER TABLE "valveCards" DROP COLUMN "IsAuto"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "IsAuto" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "TotalWorkTime" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "FinishHour" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "StartHour" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "valveCards" ADD "Days" text array NOT NULL`);
        await queryRunner.query(`DROP TABLE "timerManagementDetail"`);
    }

}
