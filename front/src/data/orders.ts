import { IOrder } from "@/interfaces/IOrder";

export const orders: IOrder[] = [
  {
    id: 1,
    status: "pending",
    date: "2022-01-01",
    products: [
      {
        id: 1,
        name: "iPhone 11",
        price: 699,
        description: "",
        image: "",
        categoryId: 1,
        stock: 10
      },
      {
        id: 2,
        name: "MacBook Air",
        price: 999,
        description: "",
        image: "",
        categoryId: 2,
        stock: 10
      },
    ]
}
];
export default orders;