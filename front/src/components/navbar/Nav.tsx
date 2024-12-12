'use client'

import Link from "next/link";
import styles from "./Nav.module.css";
import { navConfig, NavItem } from "@/config/navConfig";


const Nav = () => {
    


    // Controlamos el estado de si el usuario está logueado
    // const currentPath = 
    // typeof window !== 'undefined' ? window.location.pathname : '';



    // const toggleMenu = () => setMenuOpen(!menuOpen);

        
        
        return (
        <div>
            <nav className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <h1 className="cursor-pointer">My Apple Store</h1>
                </div>
                <button
                    className={`block md:hidden ${styles.menuButton}`}
                >
                    ☰
                </button>
                <div
                    className={`${styles.navLinksContainer} ${styles.navOpen}`}
                >
                    {navConfig.map((navLink: NavItem) => {
                        return (
                            <Link key={navLink.path} className={styles.navLink} href={navLink.path}>
                                {navLink.text}
                            </Link>
                        );
                    })}

                        <Link href="/auth/login" className={`text-center ${styles.navButton}`}>
                            <button >Login</button>
                        </Link>
                        {/* <Link href="/" className={`text-center ${styles.navButtonOut}`}>
                            <button>Logout</button>
                        </Link> */}
                     
                    {/* : (
                        <Link href="/auth/login" className={`text-center ${styles.navButton}`}>
                            <button onClick={()=> setIsLogged(true)}>Login</button>
                        </Link>
                    )} */}
                </div>
            </nav>
        </div>
    );

}

export default Nav;
