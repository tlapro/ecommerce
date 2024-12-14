"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [animationFinished, setAnimationFinished] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationFinished(true);
    }, 1000); // Tiempo en ms igual a la duración de tu animación

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-animated-gradient flex flex-col items-center justify-center min-h-screen text-center px-4 cursor-default ${
        animationFinished ? "" : "overflow-hidden"
      }`}
      style={{ backgroundColor: "var(--background-color)" }}
    >
      <div
  className="transition transform hover:scale-105 hover:translate-y-2"
  style={{ transitionDuration: "300ms" }}
>

      <h1
        className="text-6xl font-extrabold mb-6 animate-fade-in"
        style={{ color: "white", fontFamily: "var(--secondary-font)" }}
        >
        Welcome
      </h1>
        </div>
      <p
        className="text-lg max-w-2xl mb-8 animate-slide-in"
        style={{ color: "var(--third-color)", fontFamily: "var(--primary-font)" }}
      >
        Here you will find the best Apple products in the world.
      </p>
      <Link href={isAuthenticated ? "/home" : "/auth/login"}>
      <p
        className="px-8 py-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 shadow-md hover:shadow-xl"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "white",
        }}
      >
        Go to Home
      </p>
    </Link>
    </div>
  );
}
