    "use client";
    import style from "./UserAvatar.module.css";
    import { useAuth } from "@/context/AuthContext";
    import { useThemeContext } from "@/context/ThemeContext";
    import Link from "next/link";
    import { MdLightMode } from "react-icons/md";
    import { MdOutlineDarkMode } from "react-icons/md";
    import { BiLogOut, BiLogIn } from "react-icons/bi";
import { useCart } from "@/context/CartContext";
    
    export default function UserAvatar() {
        const { user, isAuthenticated, logout } = useAuth();
        const { clearCart } = useCart();
        const { theme, toggleTheme } = useThemeContext();
        
        const handleLogout = () => {
            logout();
            clearCart();
        }
        return isAuthenticated ? (


        <div className={style.buttonContainer}>
            <h1 className="text-center mt-3">{user?.name}</h1>
        <Link onClick={() => {
            handleLogout()}} href="/" className={`text-center ${style.navButtonOut}`}>
        <button> <BiLogOut size={25}/> </button>
        </Link>  
        <button onClick={toggleTheme} className={style.themeButton}>
                {theme === "dark" ? <MdLightMode size={25}/> : <MdOutlineDarkMode size={25}/>}
            </button>
        </div>) :

        (
        <div className={style.buttonContainer}>
            <h1 className="text-center mt-3">Guest</h1>
        <Link href="/auth/login" className={`text-center ${style.navButton}`}>
            <button ><BiLogIn size={25}/> </button>
        </Link>
        <button onClick={toggleTheme} className={style.themeButton}>
                {theme === "dark" ? <MdLightMode size={25}/> : <MdOutlineDarkMode size={25}/>}
            </button>
        </div>
        
        )

    }
