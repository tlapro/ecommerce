'use client'

import Link from "next/link";
import styles from "./Nav.module.css";
import { useEffect, useState } from "react";
import { navConfig, NavItem } from "@/config/navConfig";
import LoginProps from "@/interfaces/ILogin";


const Nav = ({ token, setToken }: LoginProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
    if (token) {
        setIsLogged(true);
    } else {
        setIsLogged(false);
    }
    }, [token]);
    
    const handleLogout = () => {
        setToken(null);
        localStorage.clear();
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
                        <Link key={navLink.path} className={styles.navLink} href={navLink.path}>{navLink.text}</Link>)
                    })}
                    
                    {isLogged ? ( <button onClick={handleLogout} className={styles.navButtonOut}>Logout</button>) 
                    : (<Link href="/login" className={styles.navButton}>
                        <button>Login</button>
                        </Link>)}
                    
                </div>
            </nav>
        </div>
    )
}
export default Nav;