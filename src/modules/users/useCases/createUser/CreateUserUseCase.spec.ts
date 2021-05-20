import { AppError } from "../../../../errors/AppError";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "./CreateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe("Create User", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });

    it("should be able to create a new user", async () => {
        const user = {
            name: "Name Test",
            cellphone: "21911223344",
            email: "emailTest@Test.com",
            age: 18,
            weight: 62.5,
        };

        await createUserUseCase.execute({
            name: user.name,
            cellphone: user.cellphone,
            email: user.email,
            age: user.age,
            weight: user.weight,
        });

        const userCreated = await userRepositoryInMemory.findByName(user.name);

        expect(userCreated).toHaveProperty("id");
    });

    it("should not be able to create a new user if the name or email already exixsts", async () => {
        expect(async () => {
            const user = {
                name: "Name Test",
                cellphone: "21911223344",
                email: "emailTest@Test.com",
                age: 18,
                weight: 62.5,
            };

            await createUserUseCase.execute({
                name: user.name,
                cellphone: user.cellphone,
                email: user.email,
                age: user.age,
                weight: user.weight,
            });

            await createUserUseCase.execute({
                name: user.name,
                cellphone: user.cellphone,
                email: user.email,
                age: user.age,
                weight: user.weight,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
