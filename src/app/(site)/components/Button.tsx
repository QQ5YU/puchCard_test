import { FC } from "react";

interface ButtonProps extends Button {
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  type,
  bgColor,
  margin,
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${bgColor} ${margin} rounded-[10px] 
      ${disabled === true && "brightness-75"}
     text-white text-center text-[18px] font-bold inline-block
       py-5 px-2 min-w-[163px] sm:w-[17.77%] sm:max-w-[182px]
       hover:opacity-70 transition-opacity cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
