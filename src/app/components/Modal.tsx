"use client";
import { useEffect } from "react";
import Link from "next/link";
import { FC } from "react";

interface ModalProps {
  title?: string;
  content: string;
  contentStyle?: string;
  buttonText: string;
  buttonText_2?: string;
  buttonTextColor?: string;
  href: string;
  href_2?: string;
  twoOption?: boolean;
  onClick?: () => void;
}

const Modal: FC<ModalProps> = ({
  title,
  content,
  contentStyle,
  buttonText,
  buttonTextColor = "black",
  href,
  twoOption = false,
  buttonText_2,
  href_2,
  onClick,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-white bg-opacity-60">
      <div className="animate-pop w-[354px]  ">
        <div className="flex h-[133px] w-full flex-col items-center justify-center rounded-t-lg bg-[#EAEAEA] px-[33px] py-[10px]">
          {title && (
            <p className="text-center text-xl font-bold leading-10 text-[#DD614A]">
              {title}
            </p>
          )}

          <p className={`text-center ${contentStyle} leading-6`}>{content}</p>
        </div>
        <div className="flex">
          <Link
            href={href}
            className={`block h-[79px] w-full ${
              twoOption === true ? "rounded-bl-lg" : "rounded-b-lg"
            }  bg-[#D9D9D9] py-7`}
            onClick={onClick}
          >
            <p className={`text-center text-xl ${buttonTextColor}`}>
              {buttonText}
            </p>
          </Link>
          {twoOption === true && (
            <Link
              href={href_2!}
              className="block h-[79px] w-full rounded-br-lg bg-[#CACACA] py-7"
              onClick={onClick}
            >
              <p className={`text-center text-xl ${buttonTextColor}`}>
                {buttonText_2}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
