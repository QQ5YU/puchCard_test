import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 打卡記錄查詢",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
