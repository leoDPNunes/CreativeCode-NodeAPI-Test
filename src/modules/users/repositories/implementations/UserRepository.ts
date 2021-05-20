import { Repository, getRepository } from "typeorm";

import { User } from "../../entities/User";
import { IUserRepository, ICreateUserDTO } from "../IUserRepository";

class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({
        name,
        cellphone,
        email,
        age,
        weight,
        ethnicity,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            cellphone,
            email,
            age,
            weight,
            ethnicity,
        });

        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }

    async findByName(name: string): Promise<User> {
        const user = await this.repository.findOne({ name });
        return user;
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }
}

export { UserRepository };
