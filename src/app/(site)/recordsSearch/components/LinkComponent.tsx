import Link from "next/link";
import { FC } from "react";

interface LinkComponentProps {
  href: string;
  bgColor: string;
  text: string;
  margin?: string;
}

const LinkComponent: FC<LinkComponentProps> = ({
  href,
  bgColor,
  text,
  margin,
}) => {
  return (
    <Link
      href={href}
      className={`block bg-${bgColor} rounded-md w-[79] h-[30] px-6 py-1 text-white font-bold ${margin} 
      transition hover:opacity-60 hover:shadow-md cursor-pointer`}
    >
      {text}
    </Link>
  );
};

export default LinkComponent;
