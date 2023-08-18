import { FC } from "react";

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return (
    <h1 className="hidden md:inline-block text-center sm:text-left text-mainBlue font-bold text-2xl mt-[97px] w-full">
      {text}
    </h1>
  );
};

export default Title;
