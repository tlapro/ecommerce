'use client'

import Link from "next/link";
import styles from "./Nav.module.css";
import { useState } from "react";
import { navConfig, NavItem } from "@/config/navConfig";


const Nav = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>
            <nav className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <h1 className="cursor-pointer">My Apple Store</h1>
                </div>

                <div className={styles.navLinksContainer}>
                    {navConfig.map((navLink: NavItem) => {
                        return ( 
                        <Link key={navLink.path} className={styles.navLink} href={navLink.path}>{navLink.text}</Link>)
                    })}
                    
                    {loggedIn ? ( <button onClick={() => setLoggedIn(false)} className={styles.navButtonOut}>Logout</button>) 
                    : (<Link href="/login" className={styles.navButton}>
                        <button onClick={() => setLoggedIn(true)}>Login</button>
                        </Link>)}
                    
                </div>
            </nav>
        </div>
    )
}
export default Nav;