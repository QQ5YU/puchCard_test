import React from "react";

export const Note = () => {
  return (
    <textarea
      title="leave a message"
      className="w-full min-h-[168px] bg-[#EAEAEA] rounded-[10px] resize-none outline-mainBlue px-[18px] py-[9px]"
      placeholder="備註"
    ></textarea>
  );
};
