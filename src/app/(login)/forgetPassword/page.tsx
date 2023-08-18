import Image from "next/image";
import Link from "next/link";
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
  return (
    <div className="max-w-screen-lg mx-auto flex items-center justify-center">
      <Image
        src="images/login/forgetPwd_draw.svg"
        className="hidden md:block"
        width={462}
        height={347}
        alt="forgetPwd draw"
      />
      <Hr />
      <div className="flex flex-col justify-center w-[28.22%] min-w-[320px] max-w-[340px]">
        <Title text="忘記密碼" />
        <Description
          fontSize="base"
          textColor="#564A4A"
          fontWeight="normal"
          lineHeight="leading-6"
          content="請輸入您員工編號及註冊的電子郵件，我們將向您發送重置密碼的信件。如果您需要任何協助，請隨時聯繫客服。"
        />
        <div className="mt-[30px] relative">
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
            label="員工密碼"
            id="member-password"
            name="member-password"
            src="images/login/email.svg"
            width={19}
            height={19}
            alt="email-icon"
          />
        </div>
        <Button text="寄送驗證碼" type="submit" />
      </div>
    </div>
  );
}
