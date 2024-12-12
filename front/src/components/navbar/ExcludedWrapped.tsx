"use client"

import { usePathname } from "next/navigation";

const excludedRoutes = ["/"];
export default function ExcludedWrapped({ children  } : { children: React.ReactNode }) {
    const path = usePathname();

    if (!excludedRoutes.includes(path)) 
        return (
    children
    )
}
