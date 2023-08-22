import { FC } from "react";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  text: string;
  color: string;
  margin?: string;
}

const LinkButton: FC<LinkButtonProps> = ({ href, text, color, margin }) => {
  return (
    <Link
      href={href}
      className={`${color} ${margin} rounded-lg text-white font-bold py-5 px-2 min-w-[163px] sm:w-[17.77%] sm:max-w-[182px] inline-block text-center hover:opacity-70 transition-opacity cursor-pointer `}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
