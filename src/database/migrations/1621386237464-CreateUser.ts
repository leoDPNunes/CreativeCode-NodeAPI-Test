import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1621386237464 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "cellphone",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "age",
                        type: "smallint",
                    },
                    {
                        name: "weight",
                        type: "real",
                    },
                    {
                        name: "ethnicity",
                        type: "enum",
                        enum: ["CAUCASIAN", "BLACK"],
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }
}
