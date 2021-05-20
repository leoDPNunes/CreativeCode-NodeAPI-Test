import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserLoginUseCase } from "./CreateUserLoginUseCase";

class CreateUserLoginController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        const createUserLoginUseCase = container.resolve(
            CreateUserLoginUseCase
        );

        await createUserLoginUseCase.execute({
            username,
            password,
        });

        return response.status(201).send();
    }
}

export { CreateUserLoginController };
