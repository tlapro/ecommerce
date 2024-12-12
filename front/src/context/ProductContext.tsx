"use client";

import { IProduct } from "@/interfaces/IProduct";
import { createContext, ReactNode, useState } from "react";

interface ProductContextType {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  getProducts: () => Promise<IProduct[]>;
}

export const ProductContext = createContext<ProductContextType>({
  products: [],
  setProducts: () => {},
  getProducts: () => Promise.resolve([]),
});

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async (): Promise<IProduct[]> => {
    
    if (products.length > 0) {      
      return products;

    } else {
      const response = await fetch("http://localhost:3001/products", {
        cache: "no-store",
        
      });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data)
      console.log("first charge at context from context", data);
      
      return products;
    }
  };


  const value = {
    products,
    setProducts,
    getProducts,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
};
