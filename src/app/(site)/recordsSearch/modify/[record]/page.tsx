"use client";
import Selector from "./components/Selector";
import Title from "@/app/(site)/components/Title";
import FileUpload from "./components/FileUpload";
import { Note } from "./components/Note";
import Button from "@/app/(site)/components/Button";

export default function modifyRecordPage({ params }: any) {
  const handleSubmit = () => {
    window.location.href = "/recordsSearch/modify/success";
  };

  return (
    <div className="min-h-screen flex flex-col items-center  w-full">
      <div className="ml-[5%] md:mt-[57px]">
        <span className="font-bold text-lg text-[#DD614A]">
          5:00後將打卡失敗
        </span>
        <span className="text-[14px] text-[#DD614A] ml-1">
          系統將自動將您導回打卡頁面，重新進行打卡
        </span>
      </div>
      <div className="w-[38.08%] min-w-[390px] max-w-[390px] mx-auto">
        <Title text="打卡紀錄修改" margin="mt-[18px]" />
        <Selector />
        <FileUpload />
        <Note />
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
