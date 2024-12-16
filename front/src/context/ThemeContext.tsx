"use client";
import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
    toggleTheme: () => void;
    isLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "light", 
    setTheme: () => {},
    toggleTheme: () => {}, 
    isLoading: true,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string>("light");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        setIsLoading(false);
    }, []);
    useEffect(() => {
        if (!isLoading) {
            document.body.classList.add(theme);
        }
    }, [isLoading, theme]);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.body.classList.remove(theme!);
        document.body.classList.add(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, isLoading}}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useThemeContext = () => useContext(ThemeContext);
