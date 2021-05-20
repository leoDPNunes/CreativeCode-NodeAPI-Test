import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateAddressController } from "../modules/users/useCases/createAddress/CreateAddressController";
import { ListAddressController } from "../modules/users/useCases/listAddress/ListAddressController";

const addressRoutes = Router();

const createAddressController = new CreateAddressController();
const listAddressController = new ListAddressController();

addressRoutes.use(ensureAuthenticated);

addressRoutes.post("/", createAddressController.handle);

addressRoutes.get("/", listAddressController.handle);

addressRoutes.delete("/", (request, response) => {
    return response.json({ message: "address deleted!" });
});

addressRoutes.put("/", (request, response) => {
    return response.json({
        message: "the address information was suscessfully altered!",
    });
});

export { addressRoutes };
