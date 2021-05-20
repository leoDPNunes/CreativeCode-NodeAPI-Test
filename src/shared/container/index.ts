import { container } from "tsyringe";

import { UserLoginRepository } from "../../modules/login/repository/implementations/UserLoginRepository";
import { IUserLoginRepository } from "../../modules/login/repository/IUserLoginRepository";
import { IAddressRepository } from "../../modules/users/repositories/IAddressRepository";
import { AddressRepository } from "../../modules/users/repositories/implementations/AddressRepository";
import { UserRepository } from "../../modules/users/repositories/implementations/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IAddressRepository>(
    "AddressRepository",
    AddressRepository
);

container.registerSingleton<IUserLoginRepository>(
    "UserLoginRepository",
    UserLoginRepository
);
