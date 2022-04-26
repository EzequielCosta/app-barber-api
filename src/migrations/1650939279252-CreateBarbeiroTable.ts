import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBarbeiroTable1650939279252 implements MigrationInterface {
    name = 'CreateBarbeiroTable1650939279252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "barbeiro" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "cpf" character varying(11) NOT NULL, "admin" boolean NOT NULL, CONSTRAINT "PK_aaf9aea0eaac3cdaa87918ae763" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "barbeiro"`);
    }

}
