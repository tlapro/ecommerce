"use client";
import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext({
    theme: "light", 
    toggleTheme: () => {}, 
    darkMode: false,
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string | null>("light");
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        if (savedTheme === "dark") {
            setDarkMode(true);
        }
        setTheme(savedTheme);
        document.body.classList.add(savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        if (newTheme === "dark") {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
        document.body.classList.remove(theme!);
        document.body.classList.add(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, darkMode}}>
            {children}
        </ThemeContext.Provider>
    );
};


export const useThemeContext = () => useContext(ThemeContext);
