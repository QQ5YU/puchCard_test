"use client";

import Title from "../components/Title";
import Input from "../components/Input";
import RecordList from "./components/RecordList";
import DateRangePickerComponent from "./components/DateRangePicker";

export default function recordSearchPage() {
  return (
    <div className="min-h-screen flex items-center flex-col w-[38.08%] min-w-[390px] max-w-[390px] mx-auto">
      {/* title  */}
      <Title text="打卡紀錄修改/查詢" />
      <DateRangePickerComponent />
      <Input
        inputType="text"
        id="searchLocation"
        name="searchLocation"
        placeholder="請輸入地點"
        buttonType="submit"
        imgSrc="../../images/recordSearch/search.svg"
        alt="search icon"
      />
      <RecordList />
    </div>
  );
}
