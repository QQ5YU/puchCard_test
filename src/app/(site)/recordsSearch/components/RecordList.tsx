"use client";
import LinkComponent from "./LinkComponent";
import { useState, useEffect, useRef } from "react";
import { signOut, useSession } from "next-auth/react";
import { Range } from "react-date-range";
import handleDateTime from "../actions/handleDateTime";

function renderRecord(record: recordType, index: number) {
  const dateTime = handleDateTime(record.vw_datetime);
  return (
    <div
      className="shadow-record mt-[26px] flex w-full rounded-lg bg-[#FBFBFB] py-3 pl-[10px] pr-[21p]"
      key={index}
    >
      <div className="w-min-[252px] w-max-[260px] mr-7 w-[64.62%]">
        <div className="w-full rounded-t-md bg-[#74ADF080] px-[19px] py-2">
          <span className="mr-7">{dateTime && dateTime.date}</span>
          <span>{dateTime && dateTime.time}</span>
        </div>
        <div className="w-full rounded-b-md bg-[#6091CA20] px-[19px] py-2">
          <span>{record.vw_addr}</span>
        </div>
      </div>
      <div className="flex flex-col justify-around">
        <LinkComponent
          href={`/recordsSearch/modify/${record.vw_punchId}`}
          bgColor="alertRed"
          text="修改"
        />
        <LinkComponent
          href={`/recordsSearch/viewHistory/${record.vw_punchId}`}
          bgColor="successBlue"
          text="查看"
          margin="mt-2"
        />
      </div>
    </div>
  );
}

function handleDataRangeFilter(
  dateRange: Range[] | undefined,
  employeeData: recordType[]
) {
  try {
    if (dateRange?.[0].startDate && dateRange?.[0].endDate) {
      return employeeData.filter((data: recordType) => {
        const recordDate = new Date(data.vw_datetime);
        if (
          recordDate >= dateRange[0].startDate! &&
          recordDate <= dateRange[0].endDate!
        )
          return data;
      });
    }
  } catch (err) {
    console.log("----- DataRangeFilterError -----", err);
    return [];
  }
}

function handleSearchDataFilter(
  searchContent: string,
  employeeData: recordType[]
) {
  try {
    return employeeData.filter((data: recordType) =>
      data.vw_addr.includes(searchContent)
    );
  } catch (err) {
    console.log("----- SearchDataFilterError -----", err);
    return [];
  }
}

function handleFilters(
  data: recordType[],
  searchContent: string,
  dateRange: Range[] | undefined
) {
  let filteredData = [...data];
  let filter = false;

  if (searchContent !== "") {
    filter = true;
    filteredData = handleSearchDataFilter(searchContent, filteredData);
  }

  if (
    dateRange?.[0].startDate?.toString() !== dateRange?.[0].endDate?.toString()
  ) {
    filter = true;
    const data = handleDataRangeFilter(dateRange, filteredData);
    if (data) filteredData = data;
  }

  if (filter) return filteredData;
  else return undefined;
}

export default function RecordList({
  searchContent,
  dateRange,
}: {
  searchContent: string;
  dateRange: Range[] | undefined;
}) {
  const { data: session } = useSession();
  const [employeeData, setEmployeeData] = useState<recordType[]>([]);
  const [processedData, setProcessedData] = useState<recordType[] | undefined>(
    undefined
  );
  const processedDataRef = useRef<recordType[] | undefined>(undefined);

  const url = `${process.env.NEXT_PUBLIC_HOST_URL}/api/getHistoryRecords`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 401) {
          alert(data.message);
          signOut();
        } else setEmployeeData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let rawData: recordType[] = processedDataRef.current || [...employeeData];
    const filteredData = handleFilters(rawData, searchContent, dateRange);
    processedDataRef.current = filteredData;
    setProcessedData(filteredData);

    if (filteredData?.length === 0) {
      rawData = [...employeeData];
      const filteredData = handleFilters(rawData, searchContent, dateRange);
      processedDataRef.current = filteredData;
      setProcessedData(filteredData);
    }
  }, [employeeData, searchContent, dateRange]);

  return (
    <>
      {processedData
        ? processedData.map((record: recordType, index: number) =>
            renderRecord(record, index)
          )
        : employeeData &&
          employeeData.map((record: recordType, index: number) =>
            renderRecord(record, index)
          )}
    </>
  );
}
