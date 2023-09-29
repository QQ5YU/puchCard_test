"use client";
import { FC } from "react";
import { useState } from "react";
import Option from "./Option";
import Input from "@/app/(site)/components/Input";
import { options } from "../utils/options";
interface SelectorProps {
  onSelect: (value: number) => void;
}

const Selector: FC<SelectorProps> = ({ onSelect }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [optionContent, setOptionContent] = useState("請選擇打卡類型");
  const handleClick = () => {
    setOpenOptions(!openOptions);
  };
  const handleClickOption = (e: React.MouseEvent<HTMLDivElement>) => {
    const div = e.currentTarget;
    const option = div.querySelector("span")?.textContent;
    if (option) {
      setOptionContent(option);
      const selectOption = options.find((o) => o.type === option);
      if (selectOption) onSelect(selectOption.id);
    }
    setOpenOptions(false);
  };
  return (
    <>
      <Input
        inputType="text"
        id="selector"
        name="selector"
        inputClassName={`cursor-pointer ${openOptions && "rounded-b-none"}`}
        placeholder={optionContent}
        buttonType="submit"
        imgSrc="../../images/recordsSearch/arrow.svg"
        alt="button icon"
        readOnly
        onClick={handleClick}
      />
      {openOptions && (
        <div className="ml-1 border-2 border-[#EAEAEA] rounded-b-md bg-white w-[38%] min-w-[390px] max-w-[420px] shadow-md">
          {options.map((option, index) =>
            index !== options.length - 1 ? (
              <Option
                key={option.id}
                src={option.icon}
                alt={`${option.type} icon`}
                text={option.type}
                onClick={handleClickOption}
                borderBottom
              />
            ) : (
              <Option
                key={option.id}
                src={option.icon}
                alt={`${option.type} icon`}
                text={option.type}
                onClick={handleClickOption}
              />
            )
          )}
        </div>
      )}
    </>
  );
};

export default Selector;
