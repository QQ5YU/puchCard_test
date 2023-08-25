"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../components/Button";
import Input from "../components/Input";
import Hr from "../components/Hr";
import Title from "../components/Title";
import Description from "../components/Description";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 忘記密碼",
};

export default function ForgetPasswordPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/forgetPassword/verify");
  };
  return (
    <>
      <div className="mt-7 md:mt-0 h-[251px] md:h-[446px] w-[78.39%] sm:max-w-[312px] md:w-[54vw] md:max-w-[553px] flex justify-center items-center">
        <Image
          src="images/login/forgetPwd_draw.svg"
          width={0}
          height={0}
          layout="responsive"
          alt="forgetPwd draw"
        />
      </div>
      <Hr />
      <div className="flex flex-col justify-center w-[28.22%] min-w-[320px] max-w-[340px]">
        <Title text="忘記密碼" className="hidden md:block" />
        <Description
          fontSize="base"
          textColor="#564A4A"
          fontWeight="normal"
          lineHeight="leading-6"
          content="請輸入您員工編號及註冊的電子郵件，我們將向您發送重置密碼的信件。如果您需要任何協助，請隨時聯繫客服。"
        />
        <div className="mt-6 md:mt-[30px] relative">
          <Input
            label="員工編號"
            id="member-number"
            name="member-number"
            src="images/login/user.svg"
            width={19}
            height={19}
            alt="draw"
          />
        </div>

        <div className="mt-[29px] relative">
          <Input
            label="電子信箱"
            id="email"
            name="email"
            src="images/login/email.svg"
            width={19}
            height={19}
            alt="email-icon"
          />
        </div>
        <Button text="寄送驗證碼" type="submit" onClick={handleClick} />
      </div>
    </>
  );
}
