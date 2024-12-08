import { IProduct } from "@/interfaces/IProduct";

export const fetchProductById = async (id: number): Promise<IProduct> => {
    const response = await fetch(`http://localhost:3001/products/${id}`);
    const product = await response.json();
    return product;
};