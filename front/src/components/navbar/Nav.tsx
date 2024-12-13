import Link from "next/link";
import styles from "./Nav.module.css";
import { navConfig, NavItem } from "@/config/navConfig";
import UserAvatar from "../UserAvatar/UserAvatar";


const Nav = () => {

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
                    <UserAvatar />
                        
                </div>
            </nav>
        </div>
    );

}

export default Nav;
