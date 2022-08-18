import express, { Request, Response } from "express";

export const CartController = express.Router();

CartController.post("/", (_req: Request, res: Response) => {
  res.send("CartController.post");
});

CartController.get("/", (_req: Request, res: Response) => {
    res.send("CartController.get");
});
