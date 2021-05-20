import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAddressUseCase } from "./ListAddressUseCase";

class ListAddressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAddressUseCase = container.resolve(ListAddressUseCase);

        const listAll = await listAddressUseCase.execute();

        return response.json(listAll);
    }
}

export { ListAddressController };
