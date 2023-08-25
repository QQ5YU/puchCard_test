export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center pb-[160px]">
      {children}
    </div>
  );
}
