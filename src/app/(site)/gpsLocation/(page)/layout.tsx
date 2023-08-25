import Title from "../../components/Title";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center flex-col w-[38.08%] min-w-[360px] max-w-[390px] mx-auto">
      <Title text="GPS 定位打卡" margin="mt-[97px]" />
      {children}
    </div>
  );
}
