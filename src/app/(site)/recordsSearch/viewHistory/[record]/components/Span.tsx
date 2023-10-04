import { FC } from "react";
import Image from "next/image";

interface SpanProps {
  width: string;
  label: string;
  data: string;
  margin?: string;
}

const Span: FC<SpanProps> = ({ width, label, data, margin }) => {
  return (
    <span className={`${width} inline-block font-bold ${margin}`}>
      {label}：
      {label === "照片" ? (
        <Image
          src={data}
          width={320}
          height={120}
          alt="打卡照片"
          className="mt-2"
        />
      ) : (
        data
      )}
    </span>
  );
};

export default Span;
