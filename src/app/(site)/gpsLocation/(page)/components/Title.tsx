import { FC } from "react";

interface TitleProps extends Title {
  color?: string;
}

const Title: FC<TitleProps> = ({ text, color }) => {
  return (
    <>
      <p className={`text-2xl font-bold mt-5 ${color}`}>{text}</p>
    </>
  );
};

export default Title;
