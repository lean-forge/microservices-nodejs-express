import { Request, Response, NextFunction } from "express";

export const AuthenticationHandler = (req: Request, res: Response, next: NextFunction) => {
    next();
};