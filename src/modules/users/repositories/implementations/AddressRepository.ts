import { getRepository, Repository } from "typeorm";

import { Address } from "../../entities/Address";
import { IAddressRepository, ICreateAddressDTO } from "../IAddressRepository";

class AddressRepository implements IAddressRepository {
    private repository: Repository<Address>;

    constructor() {
        this.repository = getRepository(Address);
    }

    async create({
        address,
        number,
        addressLine2,
        zipCode,
        city,
        state,
    }: ICreateAddressDTO): Promise<void> {
        const newAddress = this.repository.create({
            address,
            number,
            addressLine2,
            zipCode,
            city,
            state,
        });

        await this.repository.save(newAddress);
    }

    async findByZipCode(zipCode: string): Promise<Address> {
        const address = this.repository.findOne({ zipCode });
        return address;
    }

    async list(): Promise<Address[]> {
        const address = await this.repository.find();
        return address;
    }
}

export { AddressRepository };
