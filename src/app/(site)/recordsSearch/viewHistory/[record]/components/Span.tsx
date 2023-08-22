import { FC } from "react";

interface SpanProps {
  width: string;
  label: string;
  data: string;
  margin?: string;
}

const Span: FC<SpanProps> = ({ width, label, data, margin }) => {
  return (
    <span className={`${width} inline-block font-bold ${margin}`}>
      {label}：{data}
    </span>
  );
};

export default Span;
