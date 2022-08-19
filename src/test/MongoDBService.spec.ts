import "reflect-metadata";
import { container, injectable } from "tsyringe";
import MongoDBService from "../datasource/MongoDBService";
import { DataSource, IDataSource } from "../datasource/DataSource";
import { CartItem } from "../models/CartItem";

const MOCK_ITEMS = [
  {
    id: "1",
    productId: "Item 1",
    quantity: 1,
  },
  {
    id: "2",
    productId: "Item 2",
    quantity: 2,
  },
];

@injectable()
class MockDataSource implements IDataSource {
  getAllItems(): CartItem[] {
    return MOCK_ITEMS;
  }
}

describe("MongoDBService", () => {
  
  let dbService: MongoDBService;
  
  beforeEach(() => {
    container
    .registerInstance(DataSource, new MockDataSource());
    dbService = container.resolve(MongoDBService);
  });

  test("should be defined", () => {
    expect(dbService).toBeDefined();
  });

  test("should return all items", () => {
    expect(dbService.getAllItems()).toEqual(MOCK_ITEMS);
  });
});
