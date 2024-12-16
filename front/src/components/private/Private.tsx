"use client";
import { useAuth } from "@/context/AuthContext";

export const Private = ({children}: {children: React.ReactNode}) => {
    const {isAuthenticated} = useAuth();

    if (isAuthenticated) {
        return <>{children}</>;
    }
}
export default Private;