import { FC } from "react";
import Image from "next/image";

interface InputProps extends Input {
  label: string;
  value: string;
  width: number;
  height: number;
}

const Input: FC<InputProps> = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  imgSrc,
  width,
  height,
  alt,
}) => {
  return (
    <>
      <div className="relative h-12">
        <input
          type="text"
          id={id}
          name={name}
          autoComplete="off"
          value={value}
          placeholder=" "
          required
          onChange={onChange}
          className="bg-loginInputColor input absolute left-0 top-0 h-full w-full rounded-[10px] border-2 border-transparent px-4 py-2 outline-none transition duration-200"
        />
        <label
          htmlFor={label}
          className="input-text absolute left-4 top-3 bg-opacity-0 transition duration-200"
        >
          <Image
            src={imgSrc}
            width={width}
            height={height}
            className="mr-4 inline-block align-middle"
            alt={alt}
          />
          <span className="align-middle font-bold text-gray-400">
            {placeholder}
          </span>
        </label>
      </div>
    </>
  );
};

export default Input;
