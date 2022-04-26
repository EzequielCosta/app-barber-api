import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeColumnEmailFromBarbeiro1650939535074 implements MigrationInterface {
    name = 'ChangeColumnEmailFromBarbeiro1650939535074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "barbeiro" ALTER COLUMN "email" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "barbeiro" ALTER COLUMN "email" SET NOT NULL`);
    }

}
