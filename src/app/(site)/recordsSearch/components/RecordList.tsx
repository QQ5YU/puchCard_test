"use client";
import LinkComponent from "./LinkComponent";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function RecordList() {
  const { data: session } = useSession();
  const [data, setData] = useState([]);
  const url = `${process.env.NEXT_PUBLIC_HOST_URL}/api/getHistoryRecords`;
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {data &&
        data
          .filter(
            (record: any) => record.vw_employee === session?.user.employeeId
          )
          .map((record: any, index) => {
            const originTime = new Date(record.vw_datetime).toLocaleString();
            const datetime = originTime.split(" ");
            const date = datetime[0];
            const time = datetime[1].slice(0, -3);
            return (
              <div
                className="shadow-record mt-[26px] flex w-full rounded-lg bg-[#FBFBFB] py-3 pl-[10px] pr-[21p]"
                key={index}
              >
                <div className="w-min-[252px] w-max-[260px] mr-7 w-[64.62%]">
                  <div className="w-full rounded-t-md bg-[#74ADF080] px-[19px] py-2">
                    <span className="mr-7">{date}</span>
                    <span>{time}</span>
                  </div>
                  <div className="w-full rounded-b-md bg-[#6091CA20] px-[19px] py-2">
                    <span>{record.vw_addr}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-around">
                  <LinkComponent
                    href={`/recordsSearch/modify/${index}`}
                    bgColor="alertRed"
                    text="修改"
                  />
                  <LinkComponent
                    href={`/recordsSearch/viewHistory/${index}`}
                    bgColor="successBlue"
                    text="查看"
                    margin="mt-2"
                  />
                </div>
              </div>
            );
          })}
    </>
  );
}
