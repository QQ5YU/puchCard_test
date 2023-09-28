"use client";

import { useState } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import RecordList from "./components/RecordList";
import DateRangePicker from "./components/DateRangePicker";
import { Range } from "react-date-range";

export default function RecordSearchPage() {
  const [searchContent, setSearchContent] = useState("");
  const [dateRange, setDateRange] = useState<Range[] | undefined>();

  const handleDateChange = (range: Range[] | undefined) => {
    setDateRange(range);
  };

  return (
    <div className="mx-auto flex min-h-screen w-[38.08%] min-w-[390px] max-w-[390px] flex-col items-center">
      {/* title  */}
      <Title text="打卡紀錄修改/查詢" margin="mt-[97px]" />
      <DateRangePicker onDateChange={handleDateChange} />
      <Input
        margin="mt-6"
        inputType="text"
        id="searchLocation"
        name="searchLocation"
        placeholder="請輸入地點"
        buttonType="submit"
        imgSrc="../../images/recordsSearch/search.svg"
        alt="search icon"
        inputClassName="transition-shadow ease-linear focus:shadow-input"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchContent(e.target.value)
        }
      />
      <RecordList searchContent={searchContent} dateRange={dateRange} />
    </div>
  );
}
