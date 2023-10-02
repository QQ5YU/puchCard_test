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
      <div className="mb-9 mt-2 h-0 w-[70%] border-[0.5px] border-dashed border-black" />
      <p className="mb-8 text-center text-2xl font-semibold">{title}</p>

      {pathname === "/recordsSearch/modify/fail" ? (
        <p className="mb-11 w-[390px] text-center text-base font-bold text-[#564A4A]">
          打卡後的五分鐘內請儘快修改您的打卡資料並且確保您輸入的資訊是正確且準確的若
          <span className="text-mainBlue relative inline-block font-bold">
            超過五分鐘未送出打卡資料
          </span>
          ，系統將自動將您導回打卡頁面，請重新進行打卡。
        </p>
      ) : (
        <p className="mb-11 w-80 text-center text-[#564A4A]">{description}</p>
      )}
      <div>
        <Button
          type="button"
          onClick={onClick}
          text={buttonText}
          bgColor="successBlue"
        />
        <LinkButton
          href={href}
          text={LinkText}
          bgColor="alertRed"
          margin="ml-6"
        />
      </div>
    </div>
  );
};

export default Content;
