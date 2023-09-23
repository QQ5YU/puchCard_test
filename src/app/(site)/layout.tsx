"use client";

import type { Metadata } from "next";
import DesktopSidebar from "../components/sidebar/DesktopSidebar";
import MobileSidebar from "../components/sidebar/MobileSidebar";
import Footer from "../components/sidebar/Footer";
import { useState, useEffect } from "react";

const metadata: Metadata = {
  title: "Line@ 打卡系統",
  description: "專屬於員工的打卡系統",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSmWidth, setIsSmWidth] = useState(false);
  const handleWidth = () => {
    let width = window.innerWidth;
    if (width < 768) {
      setIsSmWidth(true);
    } else setIsSmWidth(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => {
      window.addEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="pb-[80px] md:flex md:pb-0">
        <MobileSidebar />
        <DesktopSidebar />
        {children}
      </div>
      {isSmWidth && <Footer />}
    </div>
  );
}
