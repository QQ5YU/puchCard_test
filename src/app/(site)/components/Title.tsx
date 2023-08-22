import { FC } from "react";

interface TitleProps {
  text: string;
  margin?: string;
}

const Title: FC<TitleProps> = ({ text, margin }) => {
  return (
    <h1
      className={`hidden md:inline-block text-center sm:text-left text-mainBlue font-bold text-2xl ${margin} mb-8 w-full`}
    >
      {text}
    </h1>
  );
};

export default Title;
