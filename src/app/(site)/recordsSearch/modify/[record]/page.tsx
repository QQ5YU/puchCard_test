"use client";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/recordsSearch/modify/success");
  };

  return (
    <div className="flex min-h-screen w-full flex-col  items-center">
      <div className="hidden md:ml-[6%] md:mt-[57px] md:block lg:ml-[4%]">
        <span className="text-lg font-bold text-[#DD614A]">
          5:00後將打卡失敗
        </span>
        <span className="ml-1 text-[14px] text-[#DD614A]">
          系統將自動將您導回打卡頁面，重新進行打卡
        </span>
      </div>
      <div className="mx-auto w-[38.08%] min-w-[390px] max-w-[390px]">
        <Title text="打卡紀錄修改" margin="md:mt-[18px]" />
        <Selector />
        <FileUpload />
        <Note />
        <div className="md-[35px] mt-2 md:hidden">
          <span className="block text-center text-lg font-bold text-[#DD614A]">
            5:00後將打卡失敗
          </span>
          <span className="block text-center text-[14px] text-[#DD614A]">
            系統將自動將您導回打卡頁面，重新進行打卡
          </span>
        </div>
        <div className="mb-[19px] mt-[31px] flex justify-center">
          <Button
            type="submit"
            color="bg-alertRed"
            text="確認送出"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
