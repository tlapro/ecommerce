"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/navbar/Nav";
import Footer from "@/components/footer/Footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <>
      <Nav />
      <main>{children}</main>
      {!isLanding && <Footer />}
    </>
  );
}
