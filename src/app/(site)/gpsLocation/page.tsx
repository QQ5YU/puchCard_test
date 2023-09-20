"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "../style/style.css";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";
import Title from "../components/Title";
import axios from "axios";
import Description from "./components/Description";
import Modal from "@/app/components/Modal";
import getGpsLocation from "./utils/getGpsLocation";

export default function UserLocationPage() {
  const router = useRouter();
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [checkInStateText, setCheckInStateText] = useState<string>("立即打卡");
  const [isCheckInLoading, setIsCheckInLoading] = useState<boolean>(false);

  // open modal window
  const handleGpsLocation = () => {
    navigator.permissions.query({ name: "geolocation" }).then((status) => {
      if (status.state !== "granted") {
        setIsOpenModal(true);
      } else {
        setIsOpenModal(false);
        handleOpenGPS();
      }
    });
  };

  // request gps location
  const handleOpenGPS = () => {
    setIsCheckInLoading(true);
    setCheckInStateText("打卡中");
    getGpsLocation().then((addressLocation) => {
      setIsOpenModal(false);
      setAddress(addressLocation as string);
    });
  };

  const handleCheckInSubmit = () => {
    const url = `${process.env.NEXT_APP_BASE_URL}/api/CreatePunch/`;
    axios.post(url, {
      Headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    router.push("/gpsLocation/success");
  };

  return (
    <>
      {isOpenModal === true && (
        <Modal
          content="我們需要使用您的GPS定位來記錄您的打卡位置請確保您已開啟定位服務"
          contentStyle="font-bold"
          href="/gpsLocation"
          buttonText="開啟定位"
          onClick_1={handleOpenGPS}
          twoOption
          href_2="/gpsLocation/failed"
          buttonText_2="取消"
        />
      )}
      <div className="mx-auto flex w-[38.08%] min-w-[360px] max-w-[390px] flex-col items-center justify-center">
        {/* title  */}
        <Title text="GPS 定位打卡" margin="mt-[97px]" />
        {/* location img  */}
        <div className="mt-8 flex h-[48.94px] w-[390px] items-center justify-between rounded-lg bg-[#ECECEC] p-4 ">
          <label
            className={`inline-block text-sm ${
              address !== undefined ? null : "text-[#8B8B8B]"
            }`}
          >
            {address !== undefined ? address : " 定位我的位置"}
          </label>

          <button
            type="button"
            title="locationBtn"
            className="ml-2 flex h-[29px] w-[29px] items-center justify-center rounded-full bg-[#F03C5C] transition-opacity hover:opacity-70"
            onClick={handleGpsLocation}
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
        <div className="mt-24 flex flex-col items-center justify-center">
          <Image
            src="../images/gpsLocation/location.svg"
            width={72}
            height={72}
            alt="location"
          />
          <p className="text-mainBlue mt-6 text-2xl font-bold">
            {checkInStateText}
          </p>
          <Description
            text1="打卡後的五分鐘內請儘快修改您的打卡資料並且確保您輸入的資訊是正確且準確的若"
            highlightText="超過五分鐘未送出打卡資料"
            text2="，系統將自動將您導回打卡頁面，請重新進行打卡。"
          />
        </div>
        {/* buttons  */}

        <div className="mb-[81px] mt-24">
          {isCheckInLoading === true ? (
            <Button
              type="submit"
              color="bg-alertRed"
              text="確認送出"
              margin="ml-[26px]"
              onClick={handleCheckInSubmit}
            />
          ) : (
            <>
              <LinkButton
                href="/recordsSearch"
                color="bg-successBlue"
                text="打卡紀錄查詢/修改"
              />
              <Button
                type="submit"
                color="bg-alertRed"
                text="開始打卡"
                margin="ml-[26px]"
                onClick={handleGpsLocation}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
