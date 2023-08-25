import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Input from "../components/Input";
import Hr from "../components/Hr";
import Title from "../components/Title";
import Description from "../components/Description";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 登入",
};

export default function LogInpage() {
  return (
    <div className="max-w-screen-lg mx-auto flex items-center justify-center pb-[100px]">
      <div className="hidden w-[41.6vw] h-[347px] max-w-[462px] md:flex justify-center items-center">
        <Image
          src="images/login/login_draw.svg"
          className="hidden md:block"
          width={0}
          height={0}
          layout="responsive"
          alt="login draw"
        />
      </div>

      <Hr />
      <div className="flex flex-col justify-center">
        <Title text="登入" />
        <Description
          fontSize="lg"
          textColor="darkBlue"
          fontWeight="font-bold"
          content="您好，請輸入您的員工編號及密碼"
        />
        <div className="mt-[74px] relative">
          <Input
            label="員工編號"
            id="member-number"
            name="member-number"
            src="images/login/user.svg"
            width={19}
            height={19}
            alt="uer-icon"
          />
        </div>

        <div className="mt-[29px] relative">
          <Input
            label="員工密碼"
            id="member-password"
            name="member-password"
            src="images/login/password.svg"
            width={19}
            height={19}
            alt="uer-icon"
          />
        </div>
        <Button text="登入" type="submit" />
        <Link
          href="/forgetPassword"
          className="text-right text-red-600 text-sm font-bold mt-[11px]"
        >
          忘記密碼
        </Link>
        <p className="text-center text-red-600 text-lg font-bold mt-[93px] mb-[100px] sm:pb-0 md:mt-5 ">
          員工編號或密碼有誤
        </p>
      </div>
    </div>
  );
}
