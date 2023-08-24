"use client";
import Title from "@/app/(site)/components/Title";
import Content from "../../components/Content";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 打卡記錄修改成功",
};
export default function SuccessPage() {
  const router = useRouter();
  const goToPrevPage = () => {
    router.back();
  };

  return (
    <>
      <Title text="打卡紀錄修改" margin="mt-[97px]" />
      <Content
        src="../../images/recordsSearch/modify/success.svg"
        alt="success image"
        title="打卡資料修改完成！"
        description="我們已成功記錄您的打卡紀錄，請確保您的打卡資訊是正確且準確的，您可以查詢或修改打卡記錄。 再次感謝您的配合！"
        onClick={goToPrevPage}
        buttonText="重新修改"
        href="/recordsSearch"
        LinkText="打卡紀錄查詢"
      />
    </>
  );
}
