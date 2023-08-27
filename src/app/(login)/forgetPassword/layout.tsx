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
