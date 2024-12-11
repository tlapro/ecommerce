"use client";

import { IProduct } from "@/interfaces/IProduct";
import { createContext, ReactNode, useState } from "react";

interface ProductContextType {
  products: IProduct[];
  fetchProducts: () => Promise<IProduct[]>;
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  fetchProducts: async () => [],
});

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async (): Promise<IProduct[]> => {
    try {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setProducts(data);
      return data;
    } catch (error) {
      console.error(`Failed to fetch products: ${error}`);
      return [];
    }
  };

  const value = {
    products,
    fetchProducts,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
};
