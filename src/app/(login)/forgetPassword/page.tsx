"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../components/Button";
import Input from "../components/Input";
import Hr from "../components/Hr";
import Title from "../components/Title";
import Description from "../components/Description";

export default function ForgetPasswordPage() {
  const router = useRouter();
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/forgetPassword/verify");
  };
  return (
    <>
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
        <form onSubmit={handleClick}>
          <div className="relative mt-6 md:mt-[30px]">
            <Input
              id="memberNumber"
              name="memberNumber"
              label="memberNumber"
              placeholder="員工編號"
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   setMemberNumber(e.target.value)
              // }
              src="images/login/user.svg"
              width={19}
              height={19}
              alt="uer-icon"
            />
          </div>

          <div className="relative mt-[29px]">
            <Input
              id="memberEmail"
              name="memberEmail"
              label="memberEmail"
              placeholder="電子信箱"
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              // setMemberNumber(e.target.value)
              // }
              src="images/login/email.svg"
              width={19}
              height={19}
              alt="email-icon"
            />
          </div>
          <Button text="寄送驗證碼" type="submit" />
        </form>
      </div>
    </>
  );
}
