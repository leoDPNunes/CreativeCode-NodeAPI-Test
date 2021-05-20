import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Ethnicity } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    name: string;
    cellphone: string;
    email: string;
    age: number;
    weight: number;
    ethnicity?: Ethnicity;
}

function validateEmail(email: string) {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute({
        name,
        cellphone,
        email,
        age,
        weight,
        ethnicity,
    }: IRequest): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByName(name);
        const emailAlreadyExists = await this.userRepository.findByEmail(email);
        const emailValid = validateEmail(email);

        if (userAlreadyExists) {
            throw new AppError("This User already exists! Login or create a new user.");
        }

        if (!emailValid) {
            throw new AppError("email invalid");
        }

        if (emailAlreadyExists) {
            throw new AppError("This email is already in use! Login to access your account.")
        }

        this.userRepository.create({
            name,
            cellphone,
            email,
            age,
            weight,
            ethnicity,
        });
    }
}

export { CreateUserUseCase };
