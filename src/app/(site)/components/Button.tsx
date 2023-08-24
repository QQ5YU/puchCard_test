import { FC } from "react";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  color: string;
  margin?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, type, color, margin, onClick }) => {
  return (
    <button
      type={type}
      className={`${color} ${margin} rounded-[10px] text-white text-center text-[20px] font-bold py-5 px-[50px] w-[180px] hover:opacity-70 transition-opacity cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
