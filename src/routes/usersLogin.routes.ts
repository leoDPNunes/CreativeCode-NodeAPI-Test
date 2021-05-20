import { Router } from "express";

import { CreateUserLoginController } from "../modules/login/useCases/createUserLogin/CreateUserLoginController";

const usersLoginRoutes = Router();

const createUserLoginController = new CreateUserLoginController();

usersLoginRoutes.post("/", createUserLoginController.handle);

export { usersLoginRoutes };
