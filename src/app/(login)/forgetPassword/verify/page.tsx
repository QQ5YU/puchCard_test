"use client";
import Image from "next/image";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Hr from "../../components/Hr";
import Title from "../../components/Title";
import Description from "../../components/Description";
import { useState } from "react";
import Modal from "@/app/components/Modal";

export default function VerifyPage() {
  const [isAlert, setIsAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };
  const handleVerifyCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const compareCode = localStorage.getItem("verificationCode");
    console.log(verificationCode);
    if (compareCode === verificationCode) {
      setMessage("驗證成功，即將前往修改密碼。");
      setRedirect(true);
      setIsAlert(true);
    } else {
      setMessage("驗證碼輸入錯誤，請重新回信件確認驗證碼再輸入。");
      setIsAlert(true);
    }
  };

  const handleCloseAlert = () => {
    setIsLoading(false);
    setIsAlert(false);
  };
  return (
    <>
      {isAlert === true && (
        <Modal
          content={message}
          contentStyle="text-lg"
          href={
            redirect === true
              ? "/forgetPassword/reset"
              : "/forgetPassword/verify"
          }
          buttonText="確定"
          onClick_1={handleCloseAlert}
        />
      )}
      <div className="mt-7 flex h-[251px] w-[78.39%] items-center justify-center sm:max-w-[312px] md:mt-0 md:h-[446px] md:w-[54vw] md:max-w-[553px]">
        <Image
          src="../images/login/verify.svg"
          width={0}
          height={0}
          layout="responsive"
          alt="verify draw"
        />
      </div>

      <Hr />
      <div className="flex w-[28.22%] min-w-[320px] max-w-[340px] flex-col justify-center">
        <Title text="忘記密碼" className="hidden md:block" />
        <Description
          fontSize="base"
          textColor="#564A4A"
          fontWeight="normal"
          lineHeight="leading-6"
          content="我們已將驗證碼發送到您的註冊電子郵件， 請查看並輸入，如果您沒有收到驗證碼， 請檢查垃圾郵件或選擇重新發送驗證碼。"
        />
        <form onSubmit={handleVerifyCode}>
          <div className="relative mt-6 md:mt-[30px]">
            <Input
              id="verifyCode"
              name="verifyCode"
              label="verifyCode"
              value={verificationCode}
              placeholder="輸入驗證碼"
              onChange={handleFieldChange}
              src="../images/login/receive.svg"
              width={19}
              height={19}
              alt="receive-icon"
            />
          </div>
          <Button text="驗證" type="submit" isLoading={isLoading} />
        </form>
      </div>
    </>
  );
}
