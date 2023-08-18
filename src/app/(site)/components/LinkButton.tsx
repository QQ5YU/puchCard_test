import { FC } from "react";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  text: string;
  color: string;
}

const LinkButton: FC<LinkButtonProps> = ({ href, text, color }) => {
  return (
    <Link
      href={href}
      className={`${color} rounded-lg text-white font-bold py-5 px-2 w-[163px] sm:w-[182px] inline-block text-center hover:opacity-70 transition-opacity `}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
