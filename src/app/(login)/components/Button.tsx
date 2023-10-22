import { FC } from "react";
import { LuLoader2 } from "react-icons/lu";

interface ButtonProps extends Button {
  hoverTextColor: string;
  hoverBorderColor: string;
}

const Button: FC<ButtonProps> = ({
  bgColor,
  margin,
  text,
  hoverTextColor,
  hoverBorderColor,
  type,
  onClick,
  isLoading,
}) => {
  return (
    <button
      className={`${bgColor} ${
        margin && margin
      } h-12 w-full rounded-[10px] border-2 border-transparent 
      text-center font-bold text-white transition duration-[.3s]
       hover:bg-white ease ${hoverTextColor} ${hoverBorderColor}`}
      type={type}
      onClick={onClick}
    >
      {isLoading ? (
        <LuLoader2 size={28} className="m-auto animate-spin" />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
