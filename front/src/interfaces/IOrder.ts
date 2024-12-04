import { IProduct } from "./IProduct";

export interface IOrder {
    userId: number;
    products: IProduct[];
  }
  