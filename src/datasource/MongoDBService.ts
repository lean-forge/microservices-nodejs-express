import { injectable } from "tsyringe";
import { CartItem } from "../models/CartItem";
import { DataSource } from "./DataSource";

@injectable()
export default class MongoDBService {
  constructor(database: DataSource) {
    this.database = database;
  }

  private database: DataSource;

  getAllItems(): CartItem[] {
    return this.database.getAllItems();
  }
}
