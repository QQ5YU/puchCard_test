"use client";
import { useState } from "react";
import Image from "next/image";

export default function FileUpload({
  onUpload,
}: {
  onUpload: (value: string) => void;
}) {
  const [fileName, setFileName] = useState("");
  const [image, setImage] = useState<string | undefined>(undefined);
  const [validFileType, setValidFileType] = useState(true);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const upLoadFile = e.target.files?.[0];
    if (upLoadFile) {
      console.log(e);
      if (upLoadFile.type.startsWith("image/")) {
        onUpload(`/images/records/${upLoadFile.name}`);
        setFileName(upLoadFile.name);
        setImage(URL.createObjectURL(upLoadFile));
      } else {
        setValidFileType(false);
        e.target.value = "";
      }
    }
  };
  return (
    <label className="border-mainBlue mb-[18px] mt-7 flex h-[207px] w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed">
      <Image
        src={image ? image : "../../images/recordsSearch/fileUpload/upload.svg"}
        width={image ? 200 : 48}
        height={image ? 200 : 48}
        alt={image ? fileName : "upload icon"}
        className={image ? "" : "mb-4"}
      />
      <input
        type="file"
        accept="image/*"
        id="imageFIle"
        name={fileName}
        hidden
        onChange={handleUpload}
      />
      {image ? null : (
        <>
          <p className="text-center text-[#828282]">照片上傳</p>

          {validFileType ? (
            <p className="px-[7.69%] text-center text-[10px] text-[#828282]">
              （請確保照片清晰可見且包含相關的打卡信息，例如工作地點，這將有助於更準確地記錄您的打卡紀錄。）
            </p>
          ) : (
            <p className=" text-buttonOrangeColor px-[7.69%] text-center text-lg font-bold">
              請選擇正確的照片格式
            </p>
          )}
        </>
      )}
    </label>
  );
}
