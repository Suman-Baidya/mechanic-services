"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/application/Navbar";
import Footer from "@/components/application/Footer";
import StickyContact from "@/components/application/StickyContact";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  if (isAuthPage) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <StickyContact />
    </>
  );
}
