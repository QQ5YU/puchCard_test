"use client";
import { useState } from "react";
import Image from "next/image";

export default function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const now = new Date().toISOString().slice(0, 16);

  const handleDateChange = (date: Date) => {
    setDate(date);
    if (date.toString() === "Invalid Date") setDate(undefined);
  };

  return (
    <div className="relative">
      <input
        className="border-transparent rounded-[10px] bg-[#EAEAEA] w-[38%] min-w-[390px] max-w-[420px] h-12 px-7 ml-1 outline-none transition-shadow ease-linear focus:shadow-input"
        type="datetime-local"
        id="selected_date"
        name="selected_date"
        placeholder="請選擇日期與時間"
        max={now}
        onChange={(event) => handleDateChange(new Date(event.target.value))}
      />
      <span className="absolute bg-[#EAEAEA] text-sm text-[#828282] w-72 h-full leading-[50px] left-7">
        {date ? date.toLocaleDateString() : "請選擇日期與時間"}
      </span>
      <span className="absolute bg-[#EAEAEA] w-[22px] h-[22px] pointer-events-none top-[14px] right-7">
        <button
          type="button"
          title="button"
          className="border-none bg-transparent"
        >
          <Image
            src="../../images/recordSearch/arrow.svg"
            alt="arrow icon"
            width={21}
            height={12}
          />
        </button>
      </span>
    </div>
  );
}
