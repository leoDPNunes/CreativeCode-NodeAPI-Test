import { Address } from "../entities/Address";

interface ICreateAddressDTO {
    address: string;
    number: string;
    addressLine2: string;
    zipCode: string;
    city: string;
    state: string;
}

interface IAddressRepository {
    create({
        address,
        number,
        addressLine2,
        zipCode,
        city,
        state,
    }: ICreateAddressDTO): Promise<void>;
    findByZipCode(zipCode: string): Promise<Address>;
    list(): Promise<Address[]>;
}

export { IAddressRepository, ICreateAddressDTO };
