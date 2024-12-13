import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const usePublic = () => {

        const router = useRouter();
        const isAuthenticated = useAuth();
        useEffect(() => {
            isAuthenticated ? router.push("/home") : router.push("/auth/login");
    }, []);
};