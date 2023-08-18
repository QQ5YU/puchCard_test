import { FC } from "react";

interface DescriptionProps {
  textColor: string;
  content: string;
  fontSize: string;
  fontWeight?: string;
  lineHeight?: string;
}

const Description: FC<DescriptionProps> = ({
  content,
  textColor,
  fontWeight,
  lineHeight,
  fontSize,
}) => {
  return (
    <p
      className={`mt-[11px] text-${fontSize} text-${textColor} ${fontWeight} ${lineHeight} text-center `}
    >
      {content}
    </p>
  );
};
export default Description;
