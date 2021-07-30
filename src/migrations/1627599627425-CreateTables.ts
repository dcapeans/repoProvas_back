import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1627599627425 implements MigrationInterface {
    name = 'CreateTables1627599627425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_1a023685ac2b051b4e557b0b280" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "teachers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exams" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "category_id" integer NOT NULL, "subject_id" integer NOT NULL, "teacher_id" integer NOT NULL, "categoryId" integer, "subjectId" integer, "teacherId" integer, CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_1dc4dcc3e975e1378e9d235cd1c" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_698b8b125b1bf0e0d4a38bee303" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_698b8b125b1bf0e0d4a38bee303"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_1dc4dcc3e975e1378e9d235cd1c"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "exams"`);
        await queryRunner.query(`DROP TABLE "teachers"`);
        await queryRunner.query(`DROP TABLE "subjects"`);
    }

}
