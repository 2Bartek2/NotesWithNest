import { MigrationInterface, QueryRunner } from 'typeorm';

export class NotesTableCreate1667156888760 implements MigrationInterface {
  name = 'NotesTableCreate1667156888760';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`note\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(100) NOT NULL, \`content\` varchar(255) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleteAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`note\``);
  }
}
