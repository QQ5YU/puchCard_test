"use client";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Input from "../../components/Input";

// mainDoc: https://github.com/hypeserver/react-date-range
// RefDoc: https://github.com/EvgeniyBudaev/react-typescript-ui/blob/master/src/uikit/components/DatePicker/DateRangePicker/DateRangePicker.tsx

export default function DateRangePicker() {
  const [dateRange, setDateRange] = useState<Range[] | undefined>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [inputClick, setInputClick] = useState(false);
  const rangeColor = ["#033492"];
  const handleSelect = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    setDateRange([selection]);
  };

  const displayDateRange = (dateRange: Range[] | undefined) => {
    if (dateRange) {
      const startDate = dateRange[0].startDate?.toLocaleDateString();
      const endDate = dateRange[0].endDate?.toLocaleDateString();
      const dataRange = `${startDate} ~ ${endDate}`;
      if (startDate !== endDate) {
        return dataRange;
      } else {
        return "請輸入日期";
      }
    }
  };

  const handleClick = () => {
    setInputClick(true);
  };

  const handleDivMouseLeave = () => {
    setInputClick(false);
  };

  return (
    <>
      <Input
        onClick={handleClick}
        inputType="text"
        id="selected_dateRange"
        name="selected_dateRange"
        placeholder={displayDateRange(dateRange)!}
        buttonType="submit"
        imgSrc="../../images/recordsSearch/arrow.svg"
        alt="arrow icon"
        readOnly
        inputClassName="cursor-pointer transition-shadow ease-linear focus:shadow-input"
      />
      {inputClick && (
        <div
          onMouseLeave={handleDivMouseLeave}
          className="absolute top-[212px] md:top-[233px] z-10"
        >
          <DateRange
            className="shadow-lg "
            color="#033492"
            rangeColors={rangeColor}
            ranges={dateRange}
            onChange={handleSelect}
            maxDate={new Date()}
          />
        </div>
      )}
    </>
  );
}
