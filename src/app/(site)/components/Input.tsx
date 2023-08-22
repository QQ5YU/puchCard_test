import Image from "next/image";
import { FC } from "react";

interface InputProps {
  onClick?: () => void;
  onMouseLeave?: () => void;
  inputClassName?: string;
  readOnly?: boolean;
  inputType: "text";
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
  readOnly,
  inputClassName,
  buttonType,
  imgSrc,
  alt,
}) => {
  const inputProps = {
    readOnly: readOnly ? true : undefined,
  };

  return (
    <div className="relative mt-6 ml-1">
      <input
        className={`border-transparent rounded-[10px] bg-[#EAEAEA] w-[38%] min-w-[390px] max-w-[420px] h-12 px-7 outline-none  ${inputClassName}`}
        type={inputType}
        id={id}
        onClick={onClick}
        name={name}
        placeholder={placeholder}
        {...inputProps}
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
