import Link from "next/link";
import styles from "./Nav.module.css";
import { navConfig, NavItem } from "@/config/navConfig";
import UserAvatar from "../UserAvatar/UserAvatar";
import Private from "../private/Private";

const Nav = () => {

    return (
        <div>
    <nav className={styles.navContainer}>
        
        <div className={styles.logoContainer}>
            <Link href="/">
            <h1 className="cursor-pointer">Apple Store</h1>
            </Link>
        </div>

        <input type="checkbox" id="menuToggle" className={styles.menuCheckbox} />
        <label htmlFor="menuToggle" className={styles.menuButton}>
            ☰
        </label>

        <div
            className={`${styles.navLinksContainer}`}
        >
            {navConfig.map((navLink: NavItem) => {
                const Icon = navLink.icon; 
            return !navLink.isPrivate ? (
                <div key={navLink.path}>
                <Link className={styles.navLink} href={navLink.path}>
                    <Icon size={25}/>
                </Link>
                </div>
            ) : (
                <div key={navLink.path}>
            <Private>
                <Link key={navLink.path} className={styles.navLink} href={navLink.path}>
                <Icon size={25}/>
            </Link>
            </Private>
            </div>
            )          
        })}

            <UserAvatar />
          
        </div>
    </nav>
</div>
    );

}

export default Nav;
