"use client";
import Title from "@/app/(site)/components/Title";
import LinkButton from "@/app/(site)/components/LinkButton";
import Span from "./components/Span";
import handleDateTime from "../../actions/handleDateTime";
import { useEffect, useState } from "react";


export default function ViewHistoryRecordPage({ params }: any) {
  const [recordData, setRecordData] = useState<undefined | recordType>(
    undefined
  );
  const dateTime = handleDateTime(recordData?.vw_datetime);
  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_HOST_URL}/api/viewHistoryRecord`;
    fetch(url, {
      method: "POST",
      body: params.record,
    })
      .then((res) => res.json())
      .then((data) => {
        setRecordData(data.recordData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.record]);

  return (
    <div className="mx-auto flex min-h-screen w-[38.08%] min-w-[390px] max-w-[390px] flex-col items-center">
      <Title text="打卡紀錄查詢" margin="mt-[97px]" />

      <div className="flex min-h-[109px] w-[38.28%] min-w-[392px] max-w-[420px] flex-wrap rounded-[20px] bg-[#B8D4F6] px-[30px] py-7">
        <Span
          width="w-1/2"
          margin="mb-2"
          label="員工編號"
          data={recordData ? recordData.vw_employee : "null"}
        />
        <Span
          width="w-full"
          label="部門"
          data={recordData ? recordData.vw_employee : "null"}
        />
      </div>
      <div className="mt-[21px] min-h-[109px] w-[38.28%] min-w-[392px] max-w-[420px] rounded-[20px] bg-[#DCE6F1] px-[30px] py-7">
        <Span
          width="w-full"
          margin="mb-5"
          label="日期"
          data={dateTime ? dateTime.originTime : "null"}
        />
        <Span
          width="w-full"
          margin="mb-5"
          label="地點"
          data={recordData ? recordData.vw_addr : "null"}
        />
        <Span
          width="w-full"
          margin="mb-5"
          label="打卡類型"
          data={recordData ? recordData.vw_type : "null"}
        />
        <Span
          width="w-full"
          margin="mb-5"
          label="照片"
          data={
            recordData
              ? recordData.vw_img === null
                ? "無照片"
                : recordData.vw_img
              : "null"
          }
        />
        <Span
          width="w-full"
          margin="mb-5"
          label="備註"
          data={
            recordData
              ? recordData.vw_notes === null
                ? "無備註"
                : recordData.vw_notes
              : "null"
          }
        />
      </div>
      <LinkButton
        href="/recordsSearch"
        text="確定"
        bgColor="successBlue"
        margin="mt-20 mb-5"
      />
    </div>
  );
}
