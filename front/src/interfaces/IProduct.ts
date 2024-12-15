/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IProduct {
    [x: string]: any;
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}
