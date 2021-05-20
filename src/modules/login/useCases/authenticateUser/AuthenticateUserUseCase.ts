import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUserLoginRepository } from "../../repository/IUserLoginRepository";

interface IRequest {
    username: string;
    password: string;
}

interface IResponse {
    userLogin: {
        username: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserLoginRepository")
        private userLoginRepository: IUserLoginRepository
    ) { }

    async execute({ username, password }: IRequest): Promise<IResponse> {
        const userLogin = await this.userLoginRepository.findByUsername(
            username
        );

        if (!userLogin) {
            throw new AppError("Username or password incorrect!");
        }

        const passwordMatch = await compare(password, userLogin.password);

        if (!passwordMatch) {
            throw new AppError("Username or password incorrect!");
        }

        const token = sign({}, "582c9a6407c0f2cc0dbcef17fda50050", {
            subject: userLogin.id,
            expiresIn: "1d",
        });

        return {
            userLogin: {
                username,
            },
            token,
        };
    }
}

export { AuthenticateUserUseCase };
