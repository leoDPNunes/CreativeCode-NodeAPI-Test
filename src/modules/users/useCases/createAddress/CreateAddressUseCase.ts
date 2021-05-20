import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IAddressRepository } from "../../repositories/IAddressRepository";

interface IRequest {
    address: string;
    number: string;
    addressLine2: string;
    zipCode: string;
    city: string;
    state: string;
}

@injectable()
class CreateAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}

    async execute({
        address,
        number,
        addressLine2,
        zipCode,
        city,
        state,
    }: IRequest): Promise<void> {
        const addressAlreadyExists = await this.addressRepository.findByZipCode(
            zipCode
        );

        if (addressAlreadyExists) {
            throw new AppError("address already assigned! Alter or Add a new one.");
        }

        await this.addressRepository.create({
            address,
            number,
            addressLine2,
            zipCode,
            city,
            state,
        });
    }
}

export { CreateAddressUseCase };
