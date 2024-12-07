import products from "@/data/products";
import { IProduct } from "@/interfaces/IProduct";


export const getProducts= async (): Promise<IProduct[]>  => {
    return products;
};