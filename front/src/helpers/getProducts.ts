
import { IProduct } from "@/interfaces/IProduct";

export const getProducts = async (): Promise<IProduct[]>  => {
    const response = await fetch("http://localhost:3001/products");
    const products = await response.json();
    return products;
}

