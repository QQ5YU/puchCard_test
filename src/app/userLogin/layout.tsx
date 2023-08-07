import type { Metadata } from "next";
import Image from "next/image";
import "./login.css";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 登入",
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
        <header className="flex justify-center md:justify-start items-center ml-14 mt-[55px] mb-[40px]">
          <Image src="images/logo.svg" width={55} height={55} alt="logo" />
          <h1 className=" ml-2 text-3xl text-mainBlue font-bold">
            Line@ 打卡系統
          </h1>
        </header>
        {children}
        <footer className="bg-[url('/images/footer/footerBg.svg')] bg-cover bg-no-repeat absolute w-full h-[138px] mt-10">
          <div className="w-full h-full flex justify-center items-center pt-10">
            <div className="bg-mainBlue w-[24.22%] h-px"></div>
            <p className="mx-4 inline-block text-mainBlue text-lg font-bold">
              金屬工業發展研究中心
            </p>
            <div className="bg-mainBlue w-[24.22%] h-px"></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
