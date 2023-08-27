import { FC } from "react";

interface ButtonProps {
  text: string;
  type: "submit" | "button";
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ text, type, onClick }) => {
  return (
    <button
      className="bg-successBlue ease hover:text-successBlue hover:border-successBlue mt-[71px] h-12 w-full rounded-[10px] border-2 border-transparent font-bold text-white transition duration-[.3s] hover:bg-white"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
