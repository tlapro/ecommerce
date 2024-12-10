"use client";

import LandingPage from "@/components/landing/LandingPage";
import { useEffect, useState } from "react";
import Login from "./login/page";


export default function Landing() {

  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const savedToken = localStorage.getItem("userToken");
    setToken(savedToken);
  }, []); 
  return (
    <>
      {token ? <LandingPage /> : <Login token={token} setToken={setToken} />}

    </>
  );
}
