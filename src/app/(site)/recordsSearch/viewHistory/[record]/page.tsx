"use client";
import Title from "@/app/(site)/components/Title";
import LinkButton from "@/app/(site)/components/LinkButton";
import Span from "./components/Span";
// import { useState, useEffect } from "react";
// import { signOut, useSession } from "next-auth/react";
import type { Metadata } from "next";
import { useRecordData } from "@/app/context/RecordDataContext";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 打卡記錄查詢",
};

export default function ViewHistoryRecordPage({ params }: any) {
  const { recordData } = useRecordData();
  console.log(recordData);
  // const [data, setData] = useState([]);
  // console.log("params", params);

  return (
    <div className="mx-auto flex min-h-screen w-[38.08%] min-w-[390px] max-w-[390px] flex-col items-center">
      {/* title  */}
      <Title text="打卡紀錄查詢" margin="mt-[97px]" />
      <div className="flex min-h-[109px] w-[38.28%] min-w-[392px] max-w-[420px] flex-wrap rounded-[20px] bg-[#B8D4F6] px-[30px] py-7">
        <Span
          width="w-1/2"
          margin="mb-2"
          label="員工編號"
          data={recordData[params.record].vw_employee}
        />
        <Span
          width="w-full"
          label="部門"
          data={recordData[params.record].vw_employee}
        />
      </div>
      <div className="mt-[21px] min-h-[109px] w-[38.28%] min-w-[392px] max-w-[420px] rounded-[20px] bg-[#DCE6F1] px-[30px] py-7">
        <Span
          width="w-full"
          margin="mb-5"
          label="日期"
          data={recordData[params.record].vw_datetime}
        />
        <Span
          width="w-full"
          margin="mb-5"
          label="地點"
          data={recordData[params.record].vw_addr}
        />
        <Span
          width="w-full"
          margin="mb-5"
          label="打卡類型"
          data={recordData[params.record].vw_type}
        />
        <Span
          width="w-full"
          margin="mb-5"
          label="照片"
          data={recordData[params.record].vw_img}
        />
        <Span
          width="w-full"
          margin="mb-5"
          label="備註"
          data={recordData[params.record].vw_notes}
        />
      </div>
      <LinkButton
        href="/recordsSearch"
        text="確定"
        color="bg-successBlue"
        margin="mt-20 mb-5"
      />
    </div>
  );
}
