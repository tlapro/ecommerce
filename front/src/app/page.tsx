"use client";

import LandingPage from "@/components/landing/LandingPage";
import { useEffect, useState } from "react";
import Login from "./login/page";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer/Footer";
import Nav from "@/components/navbar/Nav";

export default function Landing() {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const savedToken = localStorage.getItem("userToken");
    setToken(savedToken);
  }, []); 
  return (
    <>
    <Nav token={token} setToken={setToken} />
      {token ? <LandingPage /> : <Login token={token} setToken={setToken} />}
      {!isLanding && <Footer />}
    </>
  );
}
