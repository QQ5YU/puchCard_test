export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center  w-full">
      <div className="w-[38.08%] min-w-[390px] max-w-[390px] mx-auto mb-[76px]">
        {children}
      </div>
    </div>
  );
}
