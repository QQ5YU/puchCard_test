"use client";
import Selector from "./components/Selector";
import Title from "@/app/(site)/components/Title";
import FileUpload from "./components/FileUpload";
import { Note } from "./components/Note";
import Button from "@/app/(site)/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 修改",
};
export default function ModifyRecordPage({ params }: any) {
  const handleSubmit = () => {
    window.location.href = "/recordsSearch/modify/success";
  };

  return (
    <div className="min-h-screen flex flex-col items-center  w-full">
      <div className="hidden md:block md:ml-[6%] lg:ml-[4%] md:mt-[57px]">
        <span className="font-bold text-lg text-[#DD614A]">
          5:00後將打卡失敗
        </span>
        <span className="text-[14px] text-[#DD614A] ml-1">
          系統將自動將您導回打卡頁面，重新進行打卡
        </span>
      </div>
      <div className="w-[38.08%] min-w-[390px] max-w-[390px] mx-auto">
        <Title text="打卡紀錄修改" margin="md:mt-[18px]" />
        <Selector />
        <FileUpload />
        <Note />
        <div className="md:hidden mt-2 md-[35px]">
          <span className="block font-bold text-lg text-[#DD614A] text-center">
            5:00後將打卡失敗
          </span>
          <span className="block text-[14px] text-[#DD614A] text-center">
            系統將自動將您導回打卡頁面，重新進行打卡
          </span>
        </div>
        <div className="flex justify-center mt-[31px] mb-[19px]">
          <Button
            type="submit"
            color="bg-buttonOrangeColor"
            text="確認送出"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
