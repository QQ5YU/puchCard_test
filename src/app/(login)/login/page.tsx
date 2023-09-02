"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Hr from "../components/Hr";
import Title from "../components/Title";
import Description from "../components/Description";
import Modal from "@/app/components/Modal";
import Input from "../components/Input";
import { LuLoader2 } from "react-icons/lu";

export default function LogInpage() {
  const router = useRouter();
  const [isPasswordCorrect, setIsPasswordCorrect] = useState<
    boolean | undefined
  >(false);
  const [memberNumber, setMemberNumber] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  const handleLogIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "http://20.243.17.49:83/api/token/signIn/";
    const data = {
      EmployeeId: memberNumber,
      Password: memberPassword,
    };

    // 0528
    // kanasshi

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          setIsPasswordCorrect(true);
          setIsAlert(false);
          router.push("/gpsLocation");
        } else {
          setIsPasswordCorrect(false);
          setIsAlert(true);
          throw new Error(data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleReLogin = () => {
    setIsPasswordCorrect(undefined);
    setMemberNumber("");
    setMemberPassword("");
    setIsAlert(false);
  };

  return (
    <>
      {isAlert === true && (
        <Modal
          title="⚠️ 帳號或密碼有誤 ⚠️"
          content="很抱歉，您輸入的帳號或密碼有誤，請重新確認後再試一次。如果您需要任何協助，請隨時聯繫客服"
          href="/login"
          buttonText="重新登入"
          buttonTextColor="text-alertRed"
          onClick_1={handleReLogin}
        />
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
          <form onSubmit={handleLogIn}>
            <div className="mt-20">
              <Input
                id="memberNumber"
                name="memberNumber"
                label="memberNumber"
                placeholder="員工編號"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMemberNumber(e.target.value)
                }
                src="images/login/user.svg"
                width={19}
                height={19}
                alt="uer-icon"
              />
            </div>
            <div className="mt-[29px]">
              <Input
                id="memberPassword"
                name="memberPassword"
                label="memberPassword"
                placeholder="員工密碼"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMemberPassword(e.target.value)
                }
                src="images/login/password.svg"
                width={19}
                height={19}
                alt="password-icon"
              />
            </div>
            <Button text="登入" type="submit" />
          </form>

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
