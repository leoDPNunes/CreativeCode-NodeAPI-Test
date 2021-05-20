import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUserLoginRepository } from "../../repository/IUserLoginRepository";

interface IRequest {
    username: string;
    password: string;
}

@injectable()
class CreateUserLoginUseCase {
    constructor(
        @inject("UserLoginRepository")
        private userLoginRepository: IUserLoginRepository
    ) {}

    async execute({ username, password }: IRequest): Promise<void> {
        const usernameAlreadyExists =
            await this.userLoginRepository.findByUsername(username);

        if (usernameAlreadyExists) {
            throw new AppError("Username already exists!");
        }
        const passwordHash = await hash(password, 8);

        await this.userLoginRepository.create({
            username,
            password: passwordHash,
        });
    }
}

export { CreateUserLoginUseCase };
