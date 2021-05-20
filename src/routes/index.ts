import { Router } from "express";

import { addressRoutes } from "./address.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
import { usersLoginRoutes } from "./usersLogin.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/usersLogin", usersLoginRoutes);
router.use("/address", addressRoutes);
router.use(authenticateRoutes);

export { router };
