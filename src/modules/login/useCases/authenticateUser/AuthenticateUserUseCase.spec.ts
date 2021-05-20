import { AppError } from "../../../../errors/AppError";
import { UserLoginRepositoryInMemory } from "../../repository/in-memory/UserLoginRepositoryInMemory";
import { ICreateUserLoginDTO } from "../../repository/IUserLoginRepository";
import { CreateUserLoginUseCase } from "../createUserLogin/CreateUserLoginUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userLoginRepositoryInMemory: UserLoginRepositoryInMemory;
let createUserLoginUseCase: CreateUserLoginUseCase;

describe("Authenticater User", () => {
    beforeEach(() => {
        userLoginRepositoryInMemory = new UserLoginRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(
            userLoginRepositoryInMemory
        );
        createUserLoginUseCase = new CreateUserLoginUseCase(
            userLoginRepositoryInMemory
        );
    });

    it("should be able to authenticate an user", async () => {
        const user: ICreateUserLoginDTO = {
            username: "usernameTest",
            password: "passwordTest",
        };
        await createUserLoginUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            username: user.username,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
    });

    it("should not be able to authenticate a nonexistent user", async () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                username: "yournameTest",
                password: "1234",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to authenticate with an incorrect password", async () => {
        expect(async () => {
            const user: ICreateUserLoginDTO = {
                username: "nameUserTest",
                password: "password1234",
            };
            await createUserLoginUseCase.execute(user);

            await authenticateUserUseCase.execute({
                username: user.username,
                password: "incorrectPassword",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
