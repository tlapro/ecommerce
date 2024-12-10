'use client'

import Link from "next/link";
import styles from "./Nav.module.css";
import { useContext, useEffect, useState } from "react";
import { navConfig, NavItem } from "@/config/navConfig";
import { UsersContext } from "@/context/UsersContext";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { token, setToken } = useContext(UsersContext); // Usamos el contexto para obtener el token y setToken
    const [isLogged, setIsLogged] = useState(false);

    // Controlamos el estado de si el usuario está logueado
    useEffect(() => {
        if (token) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, [token]);


    const handleLogout = () => {
        setToken(null); 
        localStorage.removeItem("userToken"); 
        setIsLogged(false); 
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div>
            <nav className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <h1 className="cursor-pointer">My Apple Store</h1>
                </div>
                <button
                    onClick={toggleMenu}
                    className={`block md:hidden ${styles.menuButton}`}
                >
                    ☰
                </button>
                <div
                    className={`${styles.navLinksContainer} ${
                        menuOpen ? styles.navOpen : styles.navClosed
                    }`}
                >
                    {navConfig.map((navLink: NavItem) => {
                        return (
                            <Link key={navLink.path} className={styles.navLink} href={navLink.path}>
                                {navLink.text}
                            </Link>
                        );
                    })}

                    {isLogged ? (
                        <Link href="/login" className={`text-center ${styles.navButtonOut}`}>
                            <button onClick={handleLogout}>Logout</button>
                        </Link>
                    ) : (
                        <Link href="/login" className={styles.navButton}>
                            <button>Login</button>
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Nav;
