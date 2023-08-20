import { FC } from "react";

interface ButtonProps {
  type: "submit" | "button";
  bgColor: string;
  text: string;
  margin?: string;
}

const Button: FC<ButtonProps> = ({ type, bgColor, text, margin }) => {
  return (
    <button
      type={type}
      className={`bg-${bgColor} rounded-md w-[79] h-[30] px-6 py-1 border-2 border-transparent text-white font-bold ${margin} transition hover:border-${bgColor} hover:bg-transparent hover:text-slate-500`}
    >
      {text}
    </button>
  );
};

export default Button;
