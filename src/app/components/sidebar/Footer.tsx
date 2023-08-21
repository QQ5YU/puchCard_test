export default function Footer() {
  return (
    <footer className="bg-[url('/images/footer/footerBg.svg')] bg-cover bg-no-repeat md:absolute md:bottom-0 h-[138px] w-full">
      <div className="w-full h-full flex justify-center items-center pt-10">
        <div className="bg-mainBlue w-[15.83%] h-px"></div>
        <p className="mx-4 inline-block text-mainBlue text-lg font-bold">
          金屬工業發展研究中心
        </p>
        <div className="bg-mainBlue w-[15.83%] h-px"></div>
      </div>
    </footer>
  );
}
