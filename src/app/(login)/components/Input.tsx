import { FC } from "react";
import Image from "next/image";

interface InputProps {
  label: string;
  value: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  id: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  label,
  value,
  src,
  width,
  height,
  alt,
  id,
  name,
  onChange,
}) => {
  return (
    <>
      <input
        className="bg-loginInputColor focus:outline-mainBlue h-12 w-full rounded-[10px] px-4 py-2"
        type="text"
        value={value}
        id={id}
        name={name}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`absolute left-0 ${
          value !== ""
            ? "text-mainBlue -translate-y-4 translate-x-1.5 scale-75 rounded bg-white px-1.5 leading-normal"
            : " bg-transparent px-4 leading-[48px] text-gray-400 transition duration-200  ease-out"
        }
          `}
      >
        <Image
          src={src}
          width={width}
          height={height}
          className={value !== "" ? "hidden" : "mr-4 inline-block align-middle"}
          alt={alt}
        />
        <span className="align-middle font-bold">{label}</span>
      </label>
    </>
  );
};

export default Input;
