import { IProduct } from "@/interfaces/IProduct";

export const fetchProductById = async (id: number): Promise<IProduct> => {
    const response = await fetch(`http://localhost:3001/products`, {
        cache: "no-cache",
    });
    const products: IProduct[] = await response.json();
    const product = products.find((product) => product.id === id);

    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }
    return product;

};