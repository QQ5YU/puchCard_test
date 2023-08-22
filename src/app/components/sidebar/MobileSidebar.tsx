import useRoutes from "@/app/hooks/useRoutes";
import Image from "next/image";
import Footer from "./Footer";

export default function MobileSidebar() {
  const routes = useRoutes();
  return (
    <header className="md:hidden flex justify-center items-center mt-[55px] mb-[49px]">
      <Image
        src="/images/logo.svg"
        width={32}
        height={32}
        alt="logo"
        className="mx-2"
      />
      {routes.map((link) =>
        link.active ? (
          <p
            className=" ml-2 text-3xl text-mainBlue font-bold"
            key={link.label}
          >
            {link.label}
          </p>
        ) : (
          ""
        )
      )}
    </header>
  );
}
