import { FC } from "react";
import Image from "next/image";
interface ImageComponentProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const ImageComponent: FC<ImageComponentProps> = ({
  src,
  width,
  height,
  alt,
}) => {
  return (
    <>
      <Image src={src} width={width} height={height} alt={alt} />
    </>
  );
};

export default ImageComponent;
