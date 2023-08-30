"use client";

import Title from "../components/Title";
import Input from "../components/Input";
import RecordList from "./components/RecordList";
import DateRangePickerComponent from "./components/DateRangePicker";

export default function RecordSearchPage() {
  return (
    <div className="mx-auto flex min-h-screen w-[38.08%] min-w-[390px] max-w-[390px] flex-col items-center">
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
