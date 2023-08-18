import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-center md:justify-start items-center sm:ml-14 mt-[55px] mb-[40px]">
      <Image src="images/logo.svg" width={55} height={55} alt="logo" />
      <h1 className=" ml-2 text-3xl text-mainBlue font-bold">Line@ 打卡系統</h1>
    </header>
  );
}
