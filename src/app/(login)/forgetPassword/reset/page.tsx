import Image from "next/image";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Hr from "../../components/Hr";
import Title from "../../components/Title";
import Description from "../../components/Description";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Line@ 打卡系統 重設密碼",
};
export default function ResetPasswordPage() {
  return (
    <>
      <div className="mt-7 md:mt-0 h-[251px] md:h-[446px] w-[78.39%] sm:max-w-[312px] md:w-[54vw] md:max-w-[553px] flex justify-center items-center">
        <Image
          src="../images/login/changePassword.svg"
          width={0}
          height={0}
          layout="responsive"
          alt="changePassword draw"
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
          content="請輸入您的新密碼並確認，以完成密碼重設，您可以使用新密碼登入您的帳號。 如果您需要任何協助，請隨時聯繫客服。"
        />

        <div className="mt-6 md:mt-[30px] relative">
          <Input
            label="請輸入新密碼"
            id="new-password"
            name="new-password"
            src="../images/login/password.svg"
            width={19}
            height={19}
            alt="password-icon"
          />
        </div>
        <div className="mt-[30px] relative">
          <Input
            label="請再次確認您的新密碼"
            id="reset-password"
            name="reset-password"
            src="../images/login/password.svg"
            width={19}
            height={19}
            alt="password-icon"
          />
        </div>
        <Button text="送出" type="submit" />
      </div>
    </>
  );
}
