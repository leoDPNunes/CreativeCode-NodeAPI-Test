import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAddress1621486085832 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "address",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "address",
                        type: "varchar",
                    },
                    {
                        name: "number",
                        type: "varchar",
                    },
                    {
                        name: "addressLine2",
                        type: "varchar",
                    },
                    {
                        name: "zipCode",
                        type: "varchar",
                    },
                    {
                        name: "city",
                        type: "varchar",
                    },
                    {
                        name: "state",
                        type: "varchar",
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
        await queryRunner.dropTable("address");
    }
}
