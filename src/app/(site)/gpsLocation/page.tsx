"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../style/style.css";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";
import Title from "../components/Title";
import type { Metadata } from "next";
import Description from "./components/Description";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 GPS定位",
};
export default function UserLocationPage() {
  const router = useRouter();
  const [checkInStateText, setCheckInStateText] = useState<string>("立即打卡");
  const [isCheckInLoading, setIsCheckInLoading] = useState<boolean>(false);

  const handleCheckIn = () => {
    setIsCheckInLoading(true);
    setCheckInStateText("打卡中");
  };

  const handleCheckInSubmit = () => {
    router.push("/gpsLocation/success");
  };

  return (
    <div className="flex justify-center items-center flex-col w-[38.08%] min-w-[360px] max-w-[390px] mx-auto">
      {/* title  */}
      <Title text="GPS 定位打卡" margin="mt-[97px]" />
      {/* location img  */}
      <div className="bg-[#ECECEC] rounded-lg w-[390px] h-[48.94px] mt-8 p-4 flex items-center justify-between ">
        <label className="text-sm text-[#8B8B8B] inline-block">
          定位我的位置
        </label>
        <button
          type="button"
          title="locationBtn"
          className="bg-[#F03C5C] rounded-full w-[29px] h-[29px] flex justify-center items-center hover:opacity-70 transition-opacity"
        >
          <Image
            src="../images/gpsLocation/NavigationArrow.svg"
            width={19}
            height={19}
            alt="NavigationArrow icon"
          ></Image>
        </button>
      </div>
      {/*  description */}
      <div className="flex flex-col items-center justify-center mt-24">
        <Image
          src="../images/gpsLocation/location.svg"
          width={72}
          height={72}
          alt="location"
        />
        <p className="text-mainBlue font-bold text-2xl mt-6">
          {checkInStateText}
        </p>
        <Description
          text1="打卡後的五分鐘內請儘快修改您的打卡資料並且確保您輸入的資訊是正確且準確的若"
          highlightText="超過五分鐘未送出打卡資料"
          text2="，系統將自動將您導回打卡頁面，請重新進行打卡。"
        />
      </div>
      {/* buttons  */}

      <div className="mt-24 mb-[81px]">
        {isCheckInLoading === true ? (
          <Button
            type="submit"
            color="bg-buttonOrangeColor"
            text="確認送出"
            margin="ml-[26px]"
            onClick={handleCheckInSubmit}
          />
        ) : (
          <>
            <LinkButton
              href="/recordsSearch"
              color="bg-buttonBlueColor"
              text="打卡紀錄查詢/修改"
            />
            <Button
              type="submit"
              color="bg-buttonOrangeColor"
              text="開始打卡"
              margin="ml-[26px]"
              onClick={handleCheckIn}
            />
          </>
        )}
      </div>
    </div>
  );
}
