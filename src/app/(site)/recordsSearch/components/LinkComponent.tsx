import Link from "next/link";
import { FC } from "react";

const LinkComponent: FC<LinkButton> = ({ href, bgColor, text, margin }) => {
  return (
    <Link
      href={href}
      className={`block ${bgColor} rounded-md w-[79] h-[30] px-6 py-1 text-white font-bold ${margin} 
      transition hover:opacity-60 hover:shadow-md cursor-pointer`}
    >
      {text}
    </Link>
  );
};

export default LinkComponent;
