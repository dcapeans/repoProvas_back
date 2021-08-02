import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1627791312186 implements MigrationInterface {
    name = 'CreateTables1627791312186'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."teachers_subjects_subjects" DROP CONSTRAINT "FK_4afd1f51df48493ea92f3e62a82"`);
        await queryRunner.query(`ALTER TABLE "public"."teachers_subjects_subjects" ADD CONSTRAINT "FK_4afd1f51df48493ea92f3e62a82" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."teachers_subjects_subjects" DROP CONSTRAINT "FK_4afd1f51df48493ea92f3e62a82"`);
        await queryRunner.query(`ALTER TABLE "public"."teachers_subjects_subjects" ADD CONSTRAINT "FK_4afd1f51df48493ea92f3e62a82" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
