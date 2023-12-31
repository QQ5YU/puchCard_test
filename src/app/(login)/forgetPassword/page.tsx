"use client";
import Image from "next/image";
import Button from "../components/Button";
import Input from "../components/Input";
import Hr from "../components/Hr";
import Title from "../components/Title";
import Description from "../components/Description";
import { useState } from "react";
import Modal from "@/app/components/Modal";

export default function ForgetPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const [authState, setAuthState] = useState({
    email: "",
    employeeId: "",
  });
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthState((old) => ({ ...old, [e.target.id]: e.target.value }));
  };

  const handleCloseAlert = () => {
    setIsLoading(false);
    setIsAlert(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    const authData = {
      email: authState.email,
      employeeId: authState.employeeId,
    };

    try {
      const url = `${process.env.NEXT_PUBLIC_HOST_URL}/api/forgetPassword?email=${authData.email}&employeeId=${authData.employeeId}`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.status === 200) {
        localStorage.setItem("email", data.email);
        localStorage.setItem("verificationCode", data.verifyCode);
        setMessage(data.message);
        setIsAlert(true);
        setRedirectUrl("/forgetPassword/verify");
      }
      if (!res.ok) {
        setIsAlert(true);
        setMessage(data.message);
        if (res.status === 400) setRedirectUrl("/forgetPassword/verify");
        else setRedirectUrl("/forgetPassword");
      }
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <>
      {isAlert === true && (
        <Modal
          content={message}
          contentStyle="text-lg"
          href={redirectUrl}
          buttonText="確定"
          onClick_1={handleCloseAlert}
        />
      )}
      <div className="mt-7 flex h-[251px] w-[78.39%] items-center justify-center sm:max-w-[312px] md:mt-0 md:h-[446px] md:w-[54vw] md:max-w-[553px]">
        <Image
          src="images/login/forgetPwd_draw.svg"
          width={0}
          height={0}
          layout="responsive"
          alt="forgetPwd draw"
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
          content="請輸入您員工編號及註冊的電子郵件，我們將向您發送重置密碼的信件。如果您需要任何協助，請隨時聯繫客服。"
        />
        <form onSubmit={handleSubmit}>
          <div className="relative mt-6 md:mt-[30px]">
            <Input
              id="employeeId"
              name="employeeId"
              label="employeeId"
              value={authState.employeeId}
              placeholder="員工編號"
              onChange={handleFieldChange}
              imgSrc="images/login/user.svg"
              width={19}
              height={19}
              alt="uer-icon"
            />
          </div>

          <div className="relative mt-[29px]">
            <Input
              id="email"
              name="email"
              value={authState.email}
              label="email"
              placeholder="電子信箱"
              onChange={handleFieldChange}
              imgSrc="images/login/email.svg"
              width={19}
              height={19}
              alt="email-icon"
            />
          </div>
          <Button
            bgColor="bg-successBlue"
            hoverTextColor="hover:text-successBlue"
            hoverBorderColor="hover:border-successBlue"
            margin="mt-[71px]"
            text="寄送驗證碼"
            type="submit"
            isLoading={isLoading}
          />
        </form>
      </div>
    </>
  );
}
