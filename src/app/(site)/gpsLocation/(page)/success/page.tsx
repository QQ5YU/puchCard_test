import ImageComponent from "../components/ImageComponent";
import Title from "../components/Title";
import Description from "../../components/Description";
import LinkButton from "@/app/(site)/components/LinkButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 GPS定位 打卡成功",
};

export default function GpsCheckInSuccessPage() {
  return (
    <>
      <ImageComponent
        src="../../images/gpsLocation/success.svg"
        width={383}
        height={242}
        alt="success img"
      />
      <Title text="打卡完成！" />
      <Description
        text1="打卡後的五分鐘內請儘快修改您的打卡資料並且確保您輸入的資訊是正確且準確的若"
        highlightText="超過五分鐘未送出打卡資料"
        text2="，系統將自動將您導向回打卡頁面，請重新進行打卡。"
      />
      <div className="mb-[81px] mt-24">
        <LinkButton
          href="/gpsLocation"
          bgColor="successBlue"
          text="重新打卡"
        />
        <LinkButton
          href="/recordsSearch"
          bgColor="alertRed"
          text="打卡紀錄查詢/修改"
          margin="ml-[22px]"
        />
      </div>
    </>
  );
}
