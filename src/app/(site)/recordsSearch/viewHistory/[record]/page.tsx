import Title from "@/app/(site)/components/Title";
import React from "react";
import { recordData } from "./data/recordData";
import LinkButton from "@/app/(site)/components/LinkButton";
import Span from "./components/Span";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 打卡記錄查詢",
};
export default function viewHistoryRecordPage({ params }: any) {
  // console.log("params", params);
  return (
    <div className="min-h-screen flex items-center flex-col w-[38.08%] min-w-[390px] max-w-[390px] mx-auto">
      {/* title  */}
      <Title text="打卡紀錄查詢" margin="mt-[97px]" />
      <div className="bg-[#B8D4F6] rounded-[20px] min-w-[392px] w-[38.28%] max-w-[420px] min-h-[109px] py-7 px-[30px] flex flex-wrap">
        <Span
          width="w-1/2"
          margin="mb-2"
          label="姓名"
          data={recordData[params.record - 1].name}
        />
        <Span
          width="w-1/2"
          margin="mb-2"
          label="員工編號"
          data={recordData[params.record - 1].number}
        />
        <Span
          width="w-full"
          label="部門"
          data={recordData[params.record - 1].department}
        />
      </div>
      <div className="bg-[#DCE6F1] rounded-[20px] min-w-[392px] w-[38.28%] max-w-[420px] min-h-[109px] mt-[21px] py-7 px-[30px]">
        <Span
          width="w-full"
          margin="mb-5"
          label="日期"
          data={recordData[params.record - 1].date}
        />
        <Span
          width="w-full"
          margin="mb-5"
          label="地點"
          data={recordData[params.record - 1].location}
        />
        <Span
          width="w-full"
          margin="mb-5"
          label="打卡類型"
          data={recordData[params.record - 1].type}
        />
        <Span
          width="w-full"
          margin="mb-5"
          label="照片"
          data={recordData[params.record - 1].photo}
        />
        <Span
          width="w-full"
          margin="mb-5"
          label="備註"
          data={recordData[params.record - 1].message}
        />
      </div>
      <LinkButton
        href="/recordsSearch"
        text="確定"
        color="bg-buttonBlueColor"
        margin="mt-20 mb-5"
      />
    </div>
  );
}