/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Toast } from "@/components/toast/Toast";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const usePrivate = () => {
        const router = useRouter();
        const { isAuthenticated, isLoading } = useAuth();

        useEffect(() => {
            if (!isLoading && !isAuthenticated) {
                router.push("/auth/login");
                Toast.fire({icon: 'error', title: "You must be logged in to access this page"});
            }
        }, [isAuthenticated, isLoading, router]);
        
};
export default usePrivate;