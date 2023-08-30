import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 登入",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-center pb-[160px] md:flex-row">
      {children}
    </div>
  );
}
