import { FC } from "react";
import Link from "next/link";


const LinkButton: FC<LinkButton> = ({ href, text, bgColor, margin }) => {
  return (
    <Link
      href={href}
      className={`bg-${bgColor} ${margin}
       rounded-lg text-white font-bold text-[18px] 
       py-5 px-1 min-w-[163px] sm:w-[17.77%] sm:max-w-[182px]
       inline-block text-center
       hover:opacity-70 transition-opacity cursor-pointer `}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
