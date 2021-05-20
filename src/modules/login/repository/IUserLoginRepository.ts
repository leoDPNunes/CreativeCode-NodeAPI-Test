import { UserLogin } from "../entities/UserLogin";

interface ICreateUserLoginDTO {
    username: string;
    password: string;
}

interface IUserLoginRepository {
    create({ username, password }: ICreateUserLoginDTO): Promise<void>;
    findByUsername(username: string): Promise<UserLogin>;
    findById(id: string): Promise<UserLogin>;
}

export { IUserLoginRepository, ICreateUserLoginDTO };
