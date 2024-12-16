
import { AiFillHome, AiOutlineInfoCircle, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { IconType } from "react-icons";

export interface NavItem {
    text: string;
    path: string;
    icon: IconType;
    isPrivate: boolean;
}

export const navConfig: NavItem[] = [
    { text: "Home", path: "/home", icon: AiFillHome, isPrivate: false },
    { text: "About", path: "/landing", icon: AiOutlineInfoCircle, isPrivate: false},
    { text: "Cart", path: "/cart", icon: AiOutlineShoppingCart, isPrivate: false},
    { text: "Profile", path: "/dashboard", icon: AiOutlineUser, isPrivate: true },
]