"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Input from "../components/Input";
import Hr from "../components/Hr";
import Title from "../components/Title";
import Description from "../components/Description";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 登入",
};

export default function LogInpage() {
  const router = useRouter();
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [isAlert, setIsAlert] = useState(false);
  const handleLogIn = () => {
    if (!isPasswordCorrect) {
      setIsAlert(true);
    }
    router.push("/gpsLocation");
  };

  return (
    <>
      {isAlert === true && (
        <div className="fixed top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-white bg-opacity-60 ">
          <div className="h-[133px] w-[354px] rounded-t-md bg-[#EAEAEA] px-[33px] py-[10px]">
            <p className="text-center text-xl font-bold leading-10 text-[#DD614A]">
              ⚠️ 帳號或密碼有誤 ⚠️
            </p>
            <p className="text-center font-normal leading-6">
              很抱歉，您輸入的帳號或密碼有誤，請重新確認後再試一次。如果您需要任何協助，請隨時聯繫客服
            </p>
          </div>
          <Link
            href="/login"
            className="h-[79px] w-[354px] rounded-b-md bg-[#D9D9D9] py-7"
          >
            <p className="text-center text-xl text-[#DD614A]">重新登入</p>
          </Link>
        </div>
      )}

      <div className="mx-auto flex max-w-screen-lg items-center justify-center pb-[100px]">
        <div className="hidden h-[347px] w-[41.6vw] max-w-[462px] items-center justify-center md:flex">
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
          <div className="relative mt-[74px]">
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

          <div className="relative mt-[29px]">
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
          <Button text="登入" type="submit" onClick={handleLogIn} />
          <Link
            href="/forgetPassword"
            className="mt-[11px] text-right text-sm font-bold text-red-600"
          >
            忘記密碼
          </Link>
          <p className="mb-[100px] mt-[93px] text-center text-lg font-bold text-red-600 sm:pb-0 md:mt-5 ">
            員工編號或密碼有誤
          </p>
        </div>
      </div>
    </>
  );
}
