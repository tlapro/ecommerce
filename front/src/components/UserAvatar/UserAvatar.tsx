    "use client";
    import style from "./UserAvatar.module.css";
    import { useAuth } from "@/context/AuthContext";
    import { useThemeContext } from "@/context/ThemeContext";
    import Link from "next/link";
    import { MdLightMode } from "react-icons/md";
    import { MdOutlineDarkMode } from "react-icons/md";
    export default function UserAvatar() {
        const { isAuthenticated, logout } = useAuth();
        const { darkMode, toggleTheme } = useThemeContext();

        return isAuthenticated ? (
        <div className={style.buttonContainer}>
        <Link onClick={() => {
            logout()}} href="/" className={`text-center ${style.navButtonOut}`}>
        <button>Logout</button>
        </Link>  
        </div>) :
        (
        <div className={style.buttonContainer}>
        <Link href="/auth/login" className={`text-center ${style.navButton}`}>
            <button >Login</button>
        </Link>
        <button onClick={toggleTheme} className={style.themeButton}>
                {darkMode ? <MdLightMode size={25}/> : <MdOutlineDarkMode size={25}/>}
            </button>
        </div>
        
        )

    }
