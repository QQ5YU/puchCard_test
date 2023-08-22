import React from "react";
import Image from "next/image";
export default function FileUpload() {
  return (
    <label className="flex flex-col justify-center items-center mt-7 border-2 border-mainBlue rounded-lg border-dashed w-full h-[207px] mb-[18px]">
      <Image
        src="../../images/recordsSearch/fileUpload/upload.svg"
        width={48}
        height={48}
        alt="upload icon"
        className="mb-4"
      />
      <input type="file" id="myFile" name="filename" className="hidden" />
      <p className="text-[#828282] text-center">照片上傳</p>
      <p className="text-[#828282] text-center text-[10px] px-[7.69%]">
        （請確保照片清晰可見且包含相關的打卡信息，例如工作地點，這將有助於更準確地記錄您的打卡紀錄。）
      </p>
    </label>
  );
}
