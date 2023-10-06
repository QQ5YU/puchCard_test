import ImageComponent from "../components/ImageComponent";
import Title from "../components/Title";
import LinkButton from "@/app/(site)/components/LinkButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 GPS定位 打卡失敗",
};
export default function GpsCheckInFailedPage() {
  return (
    <>
      <ImageComponent
        src="../../images/gpsLocation/failed.svg"
        width={383}
        height={242}
        alt="failed img"
      />
      <Title text="打卡失敗！" color="text-[#F00]" />
      <p className="pt-3 text-[#564A4A] text-[15px] leading-[28.5px] text-center">
        為確保順利完成打卡，請您開啟GPS定位功能。
        GPS定位將幫助我們確定您當前的地理位置，
        以便完成準確的打卡記錄，感謝您的合作！
      </p>
      <div className="mt-[18px] mb-[81px]">
        <LinkButton
          href="/gpsLocation"
          bgColor="bg-successBlue"
          text="重新打卡"
        />
        <LinkButton
          href="/recordsSearch"
          bgColor="bg-alertRed"
          text="打卡紀錄查詢/修改"
          margin="ml-[22px]"
        />
      </div>
    </>
  );
}
