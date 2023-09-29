import { FC } from "react";
import { LuLoader2 } from "react-icons/lu";

const Button: FC<Button> = ({ text, type, onClick, isLoading }) => {
  return (
    <button
      className="bg-successBlue ease hover:text-successBlue hover:border-successBlue mt-[71px] h-12 w-full rounded-[10px] border-2 border-transparent text-center font-bold text-white transition duration-[.3s] hover:bg-white"
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
