import { FC } from "react";

interface TitleProps {
  text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
  return <p className="text-darkBlue font-bold text-center text-2xl">{text}</p>;
};

export default Title;
