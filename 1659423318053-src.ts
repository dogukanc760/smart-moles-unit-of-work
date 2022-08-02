import { MigrationInterface, QueryRunner } from "typeorm";

export class src1659423318053 implements MigrationInterface {
    name = 'src1659423318053'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pumpCards" ADD "Examper" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pumpCards" DROP COLUMN "Examper"`);
    }

}
