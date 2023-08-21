import Image from "next/image";
import { FC } from "react";

interface InputProps {
  onClick?: () => void;
  onMouseLeave?: () => void;
  inputType: "text" | "datetime-local";
  id: string;
  name: string;
  placeholder: string;
  buttonType: "submit" | "button";
  imgSrc: string;
  alt: string;
}

const Input: FC<InputProps> = ({
  onClick,
  inputType,
  id,
  name,
  placeholder,
  buttonType,
  imgSrc,
  alt,
}) => {
  return (
    <div className="relative mt-6 ml-1 cursor-pointer" onClick={onClick}>
      <input
        className="border-transparent rounded-[10px] bg-[#EAEAEA] w-[38%] min-w-[390px] max-w-[420px] h-12 px-7 outline-none transition-shadow ease-linear focus:shadow-input"
        type={inputType}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <span className="absolute bg-[#EAEAEA] w-[22px] h-[22px] pointer-events-none top-[14px] right-7">
        <button
          type={buttonType}
          title="button"
          className="border-none bg-transparent"
        >
          <Image src={imgSrc} alt={alt} width={21} height={12} />
        </button>
      </span>
    </div>
  );
};

export default Input;
