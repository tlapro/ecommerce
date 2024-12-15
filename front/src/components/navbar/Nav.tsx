import Link from "next/link";
import styles from "./Nav.module.css";
import { navConfig, NavItem } from "@/config/navConfig";
import UserAvatar from "../UserAvatar/UserAvatar";


const Nav = () => {

    return (
        <div>
    <nav className={styles.navContainer}>
        
        <div className={styles.logoContainer}>
            <h1 className="cursor-pointer">Apple Store</h1>
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
            return (
                <Link key={navLink.path} className={styles.navLink} href={navLink.path}>
                    <Icon size={25}/>
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
