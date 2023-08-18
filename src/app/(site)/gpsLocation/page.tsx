"use client";
import { useState } from "react";
import Image from "next/image";
import "./gpsLocation.css";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";
import Title from "../components/Title";

export default function UserLocationPage() {
  const [ischeckIn, setIscheckIn] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center flex-col w-[38.08%] min-w-[360px] max-w-[390px] mx-auto">
      {/* title  */}
      <Title text="GPS 定位打卡" />
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
        {/* <Image
          src="../images/gpsLocation/location.svg"
          width={72}
          height={72}
          alt="location"
        ></Image> */}
        <Image
          src={
            ischeckIn
              ? "../images/gpsLocation/success.svg"
              : "../images/gpsLocation/location.svg"
          }
          width={ischeckIn ? 383 : 72}
          height={ischeckIn ? 242 : 72}
          alt={ischeckIn ? "success image" : "location image"}
        ></Image>
        <p className="text-mainBlue font-bold text-2xl  mt-6">立即打卡</p>
        <p className="mt-12 w-[390px] text-center text-base text-[#564A4A] font-bold">
          打卡後的五分鐘內請儘快修改您的打卡資料
          並且確保您輸入的資訊是正確且準確的 若
          <span className="text-mainBlue font-bold inline-block relative">
            超過五分鐘未送出打卡資料
          </span>
          ，系統將自動將您導回打卡頁面，請重新進行打卡。
        </p>
      </div>
      {/* buttons  */}
      <div className="mt-24 mb-[81px]">
        <LinkButton
          href="/recordSearch"
          color="bg-buttonBlueColor"
          text="打卡紀錄查詢/修改"
        />
        <Button type="submit" color="bg-buttonOrangeColor" text="開始打卡" />
      </div>
    </div>
  );
}
