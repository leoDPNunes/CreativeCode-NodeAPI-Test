import { Repository, getRepository } from "typeorm";

import { UserLogin } from "../../entities/UserLogin";
import {
    ICreateUserLoginDTO,
    IUserLoginRepository,
} from "../IUserLoginRepository";

class UserLoginRepository implements IUserLoginRepository {
    private repository: Repository<UserLogin>;

    constructor() {
        this.repository = getRepository(UserLogin);
    }

    async create({ username, password }: ICreateUserLoginDTO): Promise<void> {
        const user = this.repository.create({ username, password });

        await this.repository.save(user);
    }

    async findByUsername(username: string): Promise<UserLogin> {
        const searchedUsername = await this.repository.findOne({ username });
        return searchedUsername;
    }

    async findById(id: string): Promise<UserLogin> {
        const user = await this.repository.findOne(id);
        return user;
    }
}

export { UserLoginRepository };
