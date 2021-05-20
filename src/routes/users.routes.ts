import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/users/useCases/listUser/ListUsersController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRoutes.use(ensureAuthenticated);

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", listUsersController.handle);

usersRoutes.delete("/", (request, response) => {
    return response.json({ message: "user deleted!" });
});

usersRoutes.put("/", (request, response) => {
    return response.json({
        message: "the user information was suscessfully altered!",
    });
});

export { usersRoutes };
