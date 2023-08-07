import Image from "next/image";
import Link from "next/link";

export default function UserLoginpage() {
  return (
    <div className="max-w-screen-lg mx-auto flex items-center justify-center">
      <Image
        src="images/draw.svg"
        className="hidden md:block"
        width={462}
        height={347}
        alt="draw"
      />
      <div className="hidden md:block bg-mainBlue w-px h-[448px] ml-[2.6%] mr-[5%] lg:mr-[8.2%]"></div>
      <div className="flex flex-col justify-center">
        <p className="text-mainBlue font-bold text-center text-2xl">登入</p>
        <p className="mt-[11px] text-mainBlue font-bold text-center text-lg">
          您好，請輸入您的員工編號及密碼
        </p>
        <div className="mt-[74px] relative">
          <input
            className="w-80 h-12 px-4 py-2 rounded-[10px] bg-inputColor focus:outline-mainBlue"
            type="text"
            id="member-number"
            name="member-number"
          />
          <label
            htmlFor="member-number"
            className="text-gray-400 absolute left-0 px-4 leading-[48px] transition duration-200 ease-out  bg-transparent"
          >
            <Image
              src="images/login/user.svg"
              width={19}
              height={19}
              className="mr-4 inline-block align-middle"
              alt="user-icon"
            />
            <span className="align-middle font-bold">員工編號</span>
          </label>
        </div>

        <div className="mt-[29px] relative">
          <input
            className="w-80 h-12 px-4 py-2 rounded-[10px] bg-inputColor focus:outline-mainBlue"
            type="text"
            id="member-password"
            name="member-password"
          />
          <label
            htmlFor="member-password"
            className="text-gray-400 absolute left-0 px-4 leading-[48px] transition duration-200 ease-out bg-transparent"
          >
            <Image
              src="images/login/password.svg"
              width={19}
              height={19}
              className="mr-4 inline-block align-middle opacity-100"
              alt="user-icon"
            />
            <span className="align-middle font-bold">員工密碼</span>
          </label>
        </div>
        <button
          className="w-80 h-12 mt-[71px] rounded-[10px] border-2 border-transparent bg-buttonColor font-bold text-white transition duration-[.3s] ease hover:bg-white hover:text-buttonColor hover:border-buttonColor"
          type="submit"
          title="submit Button"
        >
          登入
        </button>
        <Link
          href="/forgetPassword"
          className="text-right text-red-600 text-sm font-bold mt-[11px]"
        >
          忘記密碼
        </Link>
        <p className="text-center text-red-600 text-lg font-bold mt-[93px] md:mt-7">
          員工編號或密碼有誤
        </p>
      </div>
    </div>
  );
}
