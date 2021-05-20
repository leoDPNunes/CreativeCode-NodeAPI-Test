import { User, Ethnicity } from "../entities/User";

interface ICreateUserDTO {
    name: string;
    cellphone: string;
    email: string;
    age: number;
    weight: number;
    ethnicity: Ethnicity;
}

interface IUserRepository {
    create({
        name,
        cellphone,
        email,
        age,
        weight,
        ethnicity,
    }: ICreateUserDTO): Promise<void>;
    findByEmail(name: string): Promise<User>;
    findByName(name: string): Promise<User>;
    list(): Promise<User[]>;
}

export { IUserRepository, ICreateUserDTO };
