// usersContext.tsx
"use client"; // Esto marca el archivo como un componente de cliente

import { createContext, useState, ReactNode } from "react";

// Define los tipos que serán usados en el contexto
interface UsersContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  user: string | null;
  loginUser: (userData: { email: string; password: string }) => void;
}

export const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("userToken") ?? null);
  const [user, setUser] = useState<string | null>(null);

  const loginUser = async (userData: { email: string; password: string }) => {
    try {
      const response = await fetch("http://localhost:3001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      setToken(data.token);
      setUser(data.user);  // Suponiendo que la respuesta contiene información del usuario
      localStorage.setItem("userToken", data.token);
    } catch (error) {
      console.error("Error al hacer login:", error);
    }
  };

  return (
    <UsersContext.Provider value={{ token, setToken, user, loginUser }}>
      {children}
    </UsersContext.Provider>
  );
};
