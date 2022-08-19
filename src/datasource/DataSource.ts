import { injectable } from "tsyringe";
import { CartItem } from "../models/CartItem";

export interface IDataSource {
    getAllItems(): CartItem[];
};

@injectable()
export class DataSource implements IDataSource{
    getAllItems(): CartItem[] {
        return [];
    }
}
