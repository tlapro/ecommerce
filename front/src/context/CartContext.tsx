/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { IOrder } from "@/interfaces/IOrder";
import { IProduct } from "@/interfaces/IProduct";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { Toast } from "@/components/toast/Toast";

interface CartContextType {
    items: IProduct[] | null;
    addToCart: (item: IProduct) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    postOrder: () => void;
    countProduct: (id: number) => number;
}

const CartContext = createContext<CartContextType>({
    items: null,
    addToCart: (item: IProduct) => {},
    removeFromCart: (id: number) => {},
    clearCart: () => {},
    postOrder: () => {},
    countProduct: (id: number) => 0,
})

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<IProduct[]>([]);
    const { user } = useAuth();

    useEffect(() => {
        const items = localStorage.getItem("cart");
        if (items) {
            setItems(JSON.parse(items));
        } else {
            setItems([]);
        }
    }, []);

    const addToCart = (item: IProduct) => {
        setItems((prevItems) => {
            const existingItem = prevItems.find((product) => product.id === item.id);
            if (existingItem) {
                Toast.fire({icon: "error", title: `${item.name} is already in your cart`});
                return prevItems;
            }
            const updatedItems = [...prevItems, item];
            localStorage.setItem("cart", JSON.stringify(updatedItems));
            Toast.fire({icon: "success", title: `${item.name} added to cart`});
            return updatedItems;
        });

    };

    const removeFromCart = (id: number) => {
        setItems((prevItems) => {
            const updatedItems = prevItems.filter((product) => product.id !== id);
            localStorage.setItem("cart", JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const clearCart = () => {
        localStorage.removeItem("cart");
        setItems([]);
    };
    
    const postOrder = async () => {
        try {
            const cart = localStorage.getItem("cart");  
            const token = localStorage.getItem("token");  
    
            const parsedCart = JSON.parse(cart || '[]');
    
            const productIds = parsedCart.map((item: IProduct) => item.id);
    
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`,
                {   userId: user?.id,
                    products: productIds }, 
                {
                    headers: {
                        Authorization: `${token}`,  
                    },
                }
            );
            clearCart();
            Toast.fire({icon: "success", title: "Order created successfully!"});
        } catch (error) {
            Toast.fire({icon: "error", title: "An error occurred while processing the order"});
        }
    };

    const countProduct = (id: number) => {
        return items.filter((product) => product.id === id).length;  
    }

    

return (
    <CartContext.Provider value={{ addToCart, items, clearCart, removeFromCart, postOrder, countProduct }}>
        {children}
    </CartContext.Provider>
)
}
export const useCart = () => {
    const cartContext = useContext(CartContext)
    return cartContext;
}