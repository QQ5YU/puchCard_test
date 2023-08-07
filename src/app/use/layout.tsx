"use client";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Line@ 打卡系統",
  description: "專屬於員工的打卡系統",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentRoute = usePathname();
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <aside className="w-1/3 min-w-[330px] max-w-[360px] bg-[#FBFBFB] min-h-screen relative">
            <header className="flex items-center py-[43px]  mx-[44px]">
              <Image
                src="../images/logo.svg"
                width={55}
                height={55}
                alt="logo"
              />
              <h1 className=" ml-2 text-2xl text-mainBlue font-bold">
                Line@ 打卡系統
              </h1>
            </header>
            <Link
              href="/use/gpsLocation"
              className={
                currentRoute === "/use/gpsLocation"
                  ? "text-mainBlue font-bold text-xl block ml-12 mt-[86px]"
                  : "text-xl block ml-12 mt-[86px]"
              }
            >
              GPS 定位打卡
            </Link>
            <Link
              href="/use/recordSearch"
              className={
                currentRoute === "/use/recordSearch"
                  ? "text-mainBlue font-bold text-xl block ml-12 mt-2"
                  : "text-xl block ml-12 mt-2"
              }
            >
              打卡紀錄修改/查詢
            </Link>
            <footer className="bg-[url('/images/footer/footerBg.svg')] bg-cover bg-no-repeat absolute bottom-0 h-[138px] w-full">
              <div className="w-full h-full flex justify-center items-center pt-10">
                <div className="bg-mainBlue w-[15.83%] h-px"></div>
                <p className="mx-4 inline-block text-mainBlue text-lg font-bold">
                  金屬工業發展研究中心
                </p>
                <div className="bg-mainBlue w-[15.83%] h-px"></div>
              </div>
            </footer>
          </aside>
          {children}
        </div>
      </body>
    </html>
  );
}
