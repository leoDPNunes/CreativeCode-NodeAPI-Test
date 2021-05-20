import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

export enum Ethnicity {
    CAUCASIAN = "caucasian",
    BLACK = "black",
}

@Entity("user")
class User {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    cellphone: string;

    @Column()
    email: string;

    @Column()
    age: number;

    @Column()
    weight: number;

    @Column({
        type: "enum",
        enum: Ethnicity,
        default: Ethnicity.CAUCASIAN,
    })
    ethnicity: Ethnicity;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User };
