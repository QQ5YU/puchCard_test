import { FC } from "react";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  color: string;
}

const Button: FC<ButtonProps> = ({ text, type, color }) => {
  return (
    <button
      type={type}
      className={`${color} rounded-lg text-white font-bold py-5 px-2 w-[163px] sm:w-[182px] ml-5 text-center hover:opacity-70 transition-opacity `}
    >
      {text}
    </button>
  );
};

export default Button;
