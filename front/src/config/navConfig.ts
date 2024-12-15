
import { AiFillHome, AiOutlineInfoCircle, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { IconType } from "react-icons";

export interface NavItem {
    text: string;
    path: string;
    icon: IconType;
}

export const navConfig: NavItem[] = [
    { text: "Home", path: "/home", icon: AiFillHome },
    { text: "About", path: "/landing", icon: AiOutlineInfoCircle},
    { text: "Cart", path: "/cart", icon: AiOutlineShoppingCart},
    { text: "Profile", path: "/dashboard", icon: AiOutlineUser },
]