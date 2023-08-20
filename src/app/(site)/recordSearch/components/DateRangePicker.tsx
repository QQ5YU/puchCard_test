"use client";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function DateRangePicker() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const handleSelect = (ranges: any) => {
    setDateRange([ranges.selection]);
  };

  return (
    <>
      <DateRange ranges={dateRange as any} onChange={handleSelect} />
    </>
  );
}
