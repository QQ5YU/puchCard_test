import { FC } from "react";

interface TitleProps extends Title {
  className?: string;
}

const Title: FC<TitleProps> = ({ text, className }) => {
  return (
    <p className={`${className} text-darkBlue font-bold text-center text-2xl`}>
      {text}
    </p>
  );
};

export default Title;
