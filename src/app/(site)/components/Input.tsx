import Image from "next/image";
import { FC } from "react";

interface InputProps extends Input {
  inputClassName?: string;
  readOnly?: boolean;
  margin?: string;
  inputType: "text";
  buttonType: "submit" | "button";
  onClick?: () => void;
  onMouseLeave?: () => void;
}

const Input: FC<InputProps> = ({
  margin,
  onClick,
  onChange,
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
    <div className={`relative ${margin} ml-1`}>
      <input
        className={`h-12 w-[38%] min-w-[390px] max-w-[420px] rounded-[10px] border-transparent bg-[#EAEAEA] px-7 outline-none  ${inputClassName}`}
        type={inputType}
        id={id}
        onClick={onClick}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        {...inputProps}
      />
      <span className="pointer-events-none absolute right-7 top-[14px] h-[22px] w-[22px] bg-[#EAEAEA]">
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
