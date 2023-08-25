import { FC } from "react";
import Image from "next/image";
import LinkButton from "@/app/(site)/components/LinkButton";
import Button from "@/app/(site)/components/Button";
import { usePathname } from "next/navigation";
import "../../../style/style.css";

interface ContentProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
  onClick?: () => void;
  buttonText: string;
  href: string;
  LinkText: string;
}

const Content: FC<ContentProps> = ({
  src,
  alt,
  title,
  description,
  onClick,
  buttonText,
  href,
  LinkText,
}) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center">
      <Image src={src} width={393} height={248} alt={alt} />
      <div className="w-[70%] h-0 border-[0.5px] border-dashed border-black mt-2 mb-9" />
      <p className="font-semibold text-2xl text-center mb-8">{title}</p>

      {pathname === "/recordsSearch/modify/fail" ? (
        <p className="mb-11 w-[390px] text-center text-base text-[#564A4A] font-bold">
          打卡後的五分鐘內請儘快修改您的打卡資料並且確保您輸入的資訊是正確且準確的若
          <span className="text-mainBlue font-bold inline-block relative">
            超過五分鐘未送出打卡資料
          </span>
          ，系統將自動將您導回打卡頁面，請重新進行打卡。
        </p>
      ) : (
        <p className="w-80 text-[#564A4A] text-center mb-11">{description}</p>
      )}
      <div>
        <Button
          type="button"
          onClick={onClick}
          text={buttonText}
          color="bg-buttonBlueColor"
        />
        <LinkButton
          href={href}
          text={LinkText}
          color="bg-buttonOrangeColor"
          margin="ml-6"
        />
      </div>
    </div>
  );
};

export default Content;