import { IProduct } from "./IProduct";

export interface IOrder {
  id: 1,
  status: "pending",
  date: "2022-01-01",
  products: IProduct[]
  }
  