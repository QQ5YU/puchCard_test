"use client";
import Title from "@/app/(site)/components/Title";
import Content from "../../components/Content";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Line@ 打卡系統 打卡記錄修改失敗",
};
export default function FailPage() {
  const router = useRouter();
  const goToPrevPage = () => {
    router.back();
  };

  return (
    <>
      <Title text="打卡紀錄修改" margin="mt-[97px]" />
      <Content
        src="../../images/recordsSearch/modify/fail.svg"
        alt="failed image"
        title="打卡資料修改失敗！"
        onClick={goToPrevPage}
        buttonText="重新修改"
        href="/recordsSearch"
        LinkText="打卡紀錄查詢"
      />
    </>
  );
}
