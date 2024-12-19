/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Toast } from "@/components/toast/Toast";
import { ILogin } from "@/interfaces/ILogin";
import { IOrder } from "@/interfaces/IOrder";
import { IUser } from "@/interfaces/IUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    user: IUser | null,
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (form: ILogin) => void;
    logout: () => void;
    token: string | null;
    getOrders: () => Promise<IOrder[]>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    login: (form: ILogin) => {},
    logout: () => {},
    token: null,
    getOrders: async () => [],
});

export function AuthProvider({ children }: {children : React.ReactNode}) {
    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [orders, setOrders] = useState<IOrder[]>([]);

    const router = useRouter();
    
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");
    
        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken); 
            setIsAuthenticated(true);
        } else {
            setUser(null);
            setToken(null);
            setIsAuthenticated(false);
        }
        setIsLoading(false);
    }, []);
    
    
    const login = async (form: ILogin) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, form);
    
        const { user, token } = response.data;
        setUser(user);
        setToken(token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token); 
        setIsAuthenticated(true);
        router.push("/home");
    };
    

    const logout = async () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token")
        router.push("/auth/login");
    }

    const getOrders = async (): Promise<IOrder[] | undefined> => {
        const token = localStorage.getItem("token");
    
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/orders`, {
                headers: {
                    Authorization: `${token}`,
                },
            });
            const orders: IOrder[] = response.data;
            if (orders.length === 0) {
                Toast.fire({icon: 'error', title: "You have no orders"});
            }
            return orders;
        } catch (error: any) {
            if (error.response.data.message === "Invalid token") {
            Toast.fire({icon: 'error', title: "You must be logged in to access this page"});
        } else {
            Toast.fire({icon: 'error', title: error.response.data.message});
        }
    }
    
    
    };
    
    
    
    

    return (
    <AuthContext.Provider 
    value={{user, login, logout, isAuthenticated, token, isLoading, getOrders}}>
        {children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    const context = useContext(AuthContext);
    // if (context === undefined) {
    //     throw new Error("useAuth must be used within a AuthProvider");
    // }

    return context;
};
