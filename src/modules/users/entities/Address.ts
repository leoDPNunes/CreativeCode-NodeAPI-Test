import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("address")
class Address {
    @PrimaryColumn()
    id?: string;

    @Column()
    address: string;

    @Column()
    number: string;

    @Column()
    addressLine2: string;

    @Column()
    zipCode: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Address };
