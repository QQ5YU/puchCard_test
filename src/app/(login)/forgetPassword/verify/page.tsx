"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Hr from "../../components/Hr";
import Title from "../../components/Title";
import Description from "../../components/Description";

export default function VerifyPage() {
  const router = useRouter();
  const handleVerifyCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/forgetPassword/reset");
  };
  return (
    <>
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
              placeholder="輸入驗證碼"
              // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              //   setMemberNumber(e.target.value)
              // }
              src="../images/login/receive.svg"
              width={19}
              height={19}
              alt="receive-icon"
            />
          </div>
          <Button text="驗證" type="submit" />
        </form>
      </div>
    </>
  );
}
