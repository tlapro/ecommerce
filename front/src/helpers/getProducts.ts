import axios from "axios";
import { IProduct } from "@/interfaces/IProduct";

export const getProducts = async (): Promise<IProduct[]> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        if (!response.data) {
            throw new Error("No products found");
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Failed to fetch products");
    }
};
