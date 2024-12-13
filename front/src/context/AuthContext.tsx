"use client";

import { ILogin } from "@/interfaces/ILogin";
import { IUser } from "@/interfaces/IUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    user: IUser | null,
    isAuthenticated: boolean;
    login: (form: ILogin) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    isAuthenticated: false,
    login: (form: ILogin) => {},
    logout: () => {},
});

export function AuthProvider({ children }: {children : React.ReactNode}) {
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user));
            setIsAuthenticated(true);
        } else {
            setUser(null);
            setIsAuthenticated(false);
        }
    }, []);
    
    const login = async (form: ILogin) => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`,
             form
            )
        setUser(response.data.user);
        setIsAuthenticated(true);
            console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        router.push("/home");
    }

    const logout = async () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        router.push("/auth/login");
    }


    return (
    <AuthContext.Provider value={{user, login, logout, isAuthenticated}}>
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
