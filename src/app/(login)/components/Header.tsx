"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathName = usePathname();
  return (
    <header className="flex justify-center md:justify-start items-center sm:ml-14 mt-[55px] mb-[40px]">
      <Image
        src={
          pathName === "/login" || pathName === "/forgetPassword"
            ? "images/logo.svg"
            : "../images/logo.svg"
        }
        width={pathName.startsWith("/forgetPassword") ? 32 : 55}
        height={pathName.startsWith("/forgetPassword") ? 32 : 55}
        alt="logo"
      />
      <h1 className=" ml-2 text-3xl text-mainBlue font-bold">
        {pathName.startsWith("/forgetPassword") ? "忘記密碼" : "Line@ 打卡系統"}
      </h1>
    </header>
  );
}