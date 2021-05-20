import { UserLogin } from "../../entities/UserLogin";
import {
    ICreateUserLoginDTO,
    IUserLoginRepository,
} from "../IUserLoginRepository";

class UserLoginRepositoryInMemory implements IUserLoginRepository {
    usersLoginList: UserLogin[] = [];

    async create({ username, password }: ICreateUserLoginDTO): Promise<void> {
        const userLogin = new UserLogin();

        Object.assign(userLogin, {
            username,
            password,
        });

        this.usersLoginList.push(userLogin);
    }

    async findByUsername(username: string): Promise<UserLogin> {
        return this.usersLoginList.find(
            (userLoginElement) => userLoginElement.username === username
        );
    }
    async findById(id: string): Promise<UserLogin> {
        return this.usersLoginList.find(
            (userLoginElement) => userLoginElement.id === id
        );
    }
}

export { UserLoginRepositoryInMemory };
