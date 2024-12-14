/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const usePublic = () => {
        const router = useRouter();
        const { isAuthenticated } = useAuth();

        useEffect(() => {
            if (isAuthenticated) {
                router.push("/home");
            } else {
                router.push("/auth/login");
            }
        }, [isAuthenticated, router]);
        
};
export default usePublic;