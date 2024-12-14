    "use client";
    import style from "./UserAvatar.module.css";
    import { useAuth } from "@/context/AuthContext";
    import Link from "next/link";

    export default function UserAvatar() {
        const { isAuthenticated, logout } = useAuth();


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
        </div>
        )

    }
