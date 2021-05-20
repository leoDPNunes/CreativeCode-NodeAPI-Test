import { User } from "../../entities/User";
import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class UserRepositoryInMemory implements IUserRepository {
    users: User[] = [];

    async create({
        name,
        cellphone,
        email,
        age,
        weight,
        ethnicity,
    }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            name,
            cellphone,
            email,
            age,
            weight,
            ethnicity,
        });

        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(
            (emailElement) => emailElement.email === email
        );
        return user;
    }
    async findByName(name: string): Promise<User> {
        const user = this.users.find(
            (userElement) => userElement.name === name
        );
        return user;
    }
    async list(): Promise<User[]> {
        const listAll = this.users;
        return listAll;
    }
}

export { UserRepositoryInMemory };
