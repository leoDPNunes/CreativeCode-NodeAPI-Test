import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAddressUseCase } from "./CreateAddressUseCase";

class CreateAddressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { address, number, addressLine2, zipCode, city, state } =
            request.body;

        const createAddressUseCase = container.resolve(CreateAddressUseCase);

        await createAddressUseCase.execute({
            address,
            number,
            addressLine2,
            zipCode,
            city,
            state,
        });

        return response.status(201).send();
    }
}

export { CreateAddressController };
