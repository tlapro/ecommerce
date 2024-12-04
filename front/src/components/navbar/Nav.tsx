'use client'

import Link from "next/link";
import styles from "./Nav.module.css";
import { useState } from "react";


const Nav = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>
            <nav className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <h1>Mi Tienda</h1>
                </div>

                <div className={styles.navLinksContainer}>
                    <Link className={styles.navLink} href="/">Home</Link>
                    <Link className={styles.navLink} href="/landing">About</Link>
                    <Link className={styles.navLink} href="/cart">Cart</Link>
                    <Link className={styles.navLink} href="/dashboard">Profile</Link>
                    {loggedIn ? ( <button onClick={() => setLoggedIn(false)} className={styles.navButtonOut}>Logout</button>) 
                    : (<button onClick={() => setLoggedIn(true)} className={styles.navButton}>Login</button>)}
                    
                </div>
            </nav>
        </div>
    )
}
export default Nav;