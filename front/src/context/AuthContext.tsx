/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ILogin } from "@/interfaces/ILogin";
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
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    login: (form: ILogin) => {},
    logout: () => {},
    token: null,
});

export function AuthProvider({ children }: {children : React.ReactNode}) {
    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const router = useRouter();
    
    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token")
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(JSON.parse(token))            
            setIsAuthenticated(true);
        } else {
            setUser(null);
            setToken(null) 
            setIsAuthenticated(false);
            setIsLoading(false);
        }
    }, []);
    
    const login = async (form: ILogin) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`,
             form
            )
        setUser(response.data.user);
        setToken(response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setIsAuthenticated(true);
        router.push("/home");
    }

    const logout = async () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token")
        localStorage.removeItem("cart");
        router.push("/auth/login");
    }


    return (
    <AuthContext.Provider 
    value={{user, login, logout, isAuthenticated, token, isLoading}}>
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
