
export interface NavItem {
    text: string;
    path: string;
}

export const navConfig: NavItem[] = [
    { text: "Home", path: "/home" },
    { text: "About", path: "/landing" },
    { text: "Cart", path: "/cart" },
    { text: "Profile", path: "/dashboard" },
];