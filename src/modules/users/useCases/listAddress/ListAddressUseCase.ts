import { inject, injectable } from "tsyringe";

import { Address } from "../../entities/Address";
import { IAddressRepository } from "../../repositories/IAddressRepository";

@injectable()
class ListAddressUseCase {
    constructor(
        @inject("AddressRepository")
        private addressRepository: IAddressRepository
    ) {}
    async execute(): Promise<Address[]> {
        const address = await this.addressRepository.list();

        return address;
    }
}

export { ListAddressUseCase };
