import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 信箱驗證",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
