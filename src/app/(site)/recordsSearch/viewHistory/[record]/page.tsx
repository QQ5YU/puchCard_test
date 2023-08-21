import Title from "@/app/(site)/components/Title";
import React from "react";
import { recordData } from "./data/recordData";
export default function viewHistoryRecordPage({ params }: any) {
  // console.log("params", params);
  return (
    <div className="min-h-screen flex items-center flex-col w-[38.08%] min-w-[390px] max-w-[390px] mx-auto">
      {/* title  */}
      <Title text="打卡紀錄查詢" />
      <div className="bg-[#B8D4F6] rounded-[20px] min-w-[392px] w-[38.28%] max-w-[420px] min-h-[109px] py-7 px-[30px] flex flex-wrap">
        <span className="mb-2 font-bold w-1/2">
          姓名：{recordData[params.record].name}
        </span>
        <span className="mb-2 font-bold  w-1/2">
          員工編號：{recordData[params.record].number}
        </span>
        <span className="font-bold">
          部門：{recordData[params.record].department}
        </span>
      </div>
      <div className="bg-[#DCE6F1] rounded-[20px] min-w-[392px] w-[38.28%] max-w-[420px] min-h-[109px] mt-[21px] py-7 px-[30px]">
        <span className="inline-block w-full mb-5 font-bold">
          日期：{recordData[params.record].name}
        </span>
        <span className="inline-block w-full mb-5 font-bold">
          地點：{recordData[params.record].number}
        </span>
        <span className="inline-block w-full mb-5 font-bold">
          打卡類型：{recordData[params.record].department}
        </span>
        <span className="inline-block w-full mb-5 font-bold">
          照片：{recordData[params.record].department}
        </span>
        <span className="inline-block w-full mb-5 font-bold">
          備註：{recordData[params.record].department}
        </span>
      </div>
    </div>
  );
}
