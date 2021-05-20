import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UserLoginRepository } from "../modules/login/repository/implementations/UserLoginRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: userLogin_id } = verify(
            token,
            "582c9a6407c0f2cc0dbcef17fda50050"
        ) as IPayload;

        const userLoginRepository = new UserLoginRepository();

        const user = await userLoginRepository.findById(userLogin_id);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }

        next();
    } catch {
        throw new AppError("Invalid token!", 401);
    }
}
