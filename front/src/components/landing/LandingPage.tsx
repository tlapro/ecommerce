"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [animationFinished, setAnimationFinished] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationFinished(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, );

    return (
      <div
      className={`w-full h-full bg-animated-gradient flex flex-col items-center justify-center min-h-screen text-center px-4 cursor-default transition-all duration-500 ${
        animationFinished ? "" : "overflow-hidden"
        }`}
        >
      <div
        className="transition transform hover:scale-105 hover:translate-y-2"
        style={{ transitionDuration: "300ms" }}
        >
        <h1
          className="text-6xl font-extrabold mb-6 animate-fade-in"
          style={{
            color: "var(--text-color)",
            fontFamily: "var(--secondary-font)",
          }}
          >
          Welcome
        </h1>
      </div>

      <p
        className="text-lg max-w-2xl mb-8 animate-slide-in"
        style={{ color: "var(--text-color)", fontFamily: "var(--primary-font)" }}
        >
        Here you will find the best Apple products in the world.
      </p>

      <Link href="/home">
        <p
          className="px-8 py-4 rounded-lg text-lg font-semibold transition-transform transform hover:scale-105 shadow-md hover:shadow-xl"
          style={{
            backgroundColor: "var(--button-color)",
            color: "white",
          }}
          >
          Go to Home
        </p>
      </Link>
    </div>
  );
}

