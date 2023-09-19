"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathName = usePathname();
  return (
    <header className="mb-[40px] mt-[55px] flex items-center justify-center sm:ml-14 md:justify-start">
      <Image
        src={
          pathName === "/login" || pathName === "/forgetPassword"
            ? "images/logo.svg"
            : "../images/logo.svg"
        }
        width={pathName!.startsWith("/forgetPassword") ? 32 : 55}
        height={pathName!.startsWith("/forgetPassword") ? 32 : 55}
        alt="logo"
      />
      <h1 className=" text-mainBlue ml-2 text-3xl font-bold">
        {pathName!.startsWith("/forgetPassword") ? "忘記密碼" : "Line@ 打卡系統"}
      </h1>
    </header>
  );
}
