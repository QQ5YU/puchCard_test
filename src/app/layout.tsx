import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./Context/Provider";

export const metadata: Metadata = {
  title: "Line@ 打卡系統",
  description: "專屬於員工的打卡系統",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
