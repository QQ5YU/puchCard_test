import Title from "../../components/Title";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-[38.08%] min-w-[360px] max-w-[390px] flex-col items-center justify-center">
      <Title text="GPS 定位打卡" margin="mt-[97px]" />
      {children}
    </div>
  );
}
