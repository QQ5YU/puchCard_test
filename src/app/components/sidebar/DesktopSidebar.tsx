import useRoutes from "@/app/hooks/useRoutes";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

export default function DesktopSidebar() {
  const routes = useRoutes();
  return (
    <aside className="relative hidden min-h-screen w-1/3 min-w-[330px] max-w-[360px] bg-[#FBFBFB] md:block">
      <header className="mx-[44px] flex items-center  py-[43px]">
        <Image src="/images/logo.svg" width={55} height={55} alt="logo" />
        <h1 className=" text-mainBlue ml-2 text-2xl font-bold">
          Line@ 打卡系統
        </h1>
      </header>
      {routes.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={
            link.active
              ? "text-mainBlue my-5 ml-12 block text-xl font-bold"
              : "my-5 ml-12 block text-xl transition-opacity hover:opacity-70"
          }
        >
          {link.label}
        </Link>
      ))}
      <Footer />
    </aside>
  );
}
