import "./globals.css";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統",
  description: "專屬於員工的打卡系統",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
