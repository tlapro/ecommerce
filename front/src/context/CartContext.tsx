"use client";
import { IProduct } from "@/interfaces/IProduct";
import { createContext, useContext, useEffect, useState } from "react";

interface CartContextType {
    items: IProduct | null;
    addToCart: (item: IProduct) => boolean;
    removeFromCart: (item: IProduct) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
    items: null,
    addToCart: (item: IProduct) => false,
    removeFromCart: (item: IProduct) => {},
    clearCart: () => {},
})

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<IProduct[]>([]);

    useEffect(() => {
        const items = localStorage.getItem("cart");
        if (items) {
            setItems(JSON.parse(items));
        } else {
            setItems([]);
        }
    }, []);

    const addToCart = (item: IProduct): boolean => {
        let wasAdded = false;
        setItems((prevItems) => {
            const exists = prevItems.some((product) => product.id === item.id);
            if (exists) {
                return prevItems;
            }
            const updatedItems = [...prevItems, item];
            localStorage.setItem("cart", JSON.stringify(updatedItems));
            wasAdded = true;
            return updatedItems;
        });
        return wasAdded;
    };
    const clearCart = () => {
        localStorage.removeItem("cart");
        setItems([]);
    };
    const removeFromCart = (item: IProduct) => {
        setItems((prevItems) => {
            const updatedItems = prevItems.filter((product) => product.id !== item.id);
            localStorage.setItem("cart", JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

return (
    <CartContext.Provider value={{ addToCart, items, clearCart, removeFromCart }}>
        {children}
    </CartContext.Provider>
)
}
export const useCart = () => {
    const cartContext = useContext(CartContext)
    return cartContext;
}