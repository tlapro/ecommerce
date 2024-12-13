"use client";
import style from "./UserAvatar.module.css";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function UserAvatar() {
    const { isAuthenticated, user, logout } = useAuth();


    return isAuthenticated ? (
    <Link onClick={() => {
        logout()}} href="/auth/login" className={`text-center ${style.navButtonOut}`}>
    <button>Logout</button>
    </Link>) : 
    (<Link href="/auth/login" className={`text-center ${style.navButton}`}>
        <button >Login</button>
    </Link>)

}
