import express, { Request, Response } from "express";
import { container } from "tsyringe";
import MongoDBService from "../datasource/MongoDBService";

export const CartController = express.Router();

CartController.post("/", (_req: Request, res: Response) => {
  res.send("CartController.post");
});

CartController.get("/", (_req: Request, res: Response) => {
    const db = container.resolve(MongoDBService);
    console.log(db.getAllItems());
    res.send("CartController.get");
});
