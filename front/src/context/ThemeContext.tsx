"use client";
import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext({
    theme: "light", 
    toggleTheme: () => {}, 
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string | null>("light");


    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.body.classList.add(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.body.classList.remove(theme!);
        document.body.classList.add(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useThemeContext = () => useContext(ThemeContext);
