import { FC } from "react";
import Image from "next/image";

interface InputProps {
  label: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  id: string;
  name: string;
}

const Input: FC<InputProps> = ({
  label,
  src,
  width,
  height,
  alt,
  id,
  name,
}) => {
  return (
    <>
      <input
        className="w-full h-12 px-4 py-2 rounded-[10px] bg-loginInputColor focus:outline-mainBlue"
        type="text"
        id={id}
        name={name}
      />
      <label
        htmlFor={id}
        className="text-gray-400 absolute left-0 px-4 leading-[48px] transition duration-200 ease-out  bg-transparent"
      >
        <Image
          src={src}
          width={width}
          height={height}
          className="mr-4 inline-block align-middle"
          alt={alt}
        />
        <span className="align-middle font-bold">{label}</span>
      </label>
    </>
  );
};

export default Input;
