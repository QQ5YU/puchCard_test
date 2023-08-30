import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 重設密碼",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
