import { FC } from "react";
import "../../style/style.css";
interface DescriptionProps {
  text1: string;
  text2: string;
  highlightText: string;
}

const Description: FC<DescriptionProps> = ({ text1, text2, highlightText }) => {
  return (
    <p className="mt-3 w-[390px] text-center text-base text-[#564A4A] font-bold">
      {text1}
      <span className="text-mainBlue font-bold inline-block relative">
        {highlightText}
      </span>
      {text2}
    </p>
  );
};

export default Description;
