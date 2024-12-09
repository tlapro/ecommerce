"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/navbar/Nav";
import Footer from "@/components/footer/Footer";
import { useState, useEffect } from "react";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLanding = pathname === "/";
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const savedToken = localStorage.getItem("userToken");
    setToken(savedToken);
    console.log(savedToken);
  }, []); 
  
  return (
    <>
      <Nav token={token} setToken={setToken} />
      <main>{children}</main>
      {!isLanding && <Footer />}
    </>
  );
}
