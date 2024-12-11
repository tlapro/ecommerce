import { IProduct } from "@/interfaces/IProduct";
import { getProducts } from "./getProducts";


export const getProductById = async (id: number): Promise<IProduct> => {
    const products = await getProducts();
    const product = products.find((product: IProduct) => product.id === id);

    if (!product) throw Error(`Product with id ${id} not found`);
    
    return product;
};