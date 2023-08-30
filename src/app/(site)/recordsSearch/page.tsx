"use client";

import Title from "../components/Title";
import Input from "../components/Input";
import RecordList from "./components/RecordList";
import DateRangePickerComponent from "./components/DateRangePicker";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Line@ 打卡系統 打卡記錄修改/查詢",
};
export default function RecordSearchPage() {
  return (
    <div className="min-h-screen flex items-center flex-col w-[38.08%] min-w-[390px] max-w-[390px] mx-auto">
      {/* title  */}
      <Title text="打卡紀錄修改/查詢" margin="mt-[97px]" />
      <DateRangePickerComponent />
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
      />
      <RecordList />
    </div>
  );
}
