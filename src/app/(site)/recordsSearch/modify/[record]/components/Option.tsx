import { FC } from "react";
import Image from "next/image";

interface OptionProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  src: string;
  alt: string;
  text: string;
  borderBottom?: boolean;
}

const Option: FC<OptionProps> = ({
  onClick,
  src,
  alt,
  text,
  borderBottom = true,
}) => {
  return (
    <div
      className={`px-7 ${borderBottom ? "border-b-2" : ""} cursor-pointer`}
      onClick={onClick}
    >
      <Image
        className="inline-block pointer-events-none"
        src={src}
        width={22}
        height={22}
        alt={alt}
      />
      <span className="ml-4 leading-[48px] text-slate-700  pointer-events-none">
        {text}
      </span>
    </div>
  );
};

export default Option;
