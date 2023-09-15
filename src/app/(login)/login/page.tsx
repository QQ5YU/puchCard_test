"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import Hr from "../components/Hr";
import Title from "../components/Title";
import Description from "../components/Description";
import Modal from "@/app/components/Modal";
import Input from "../components/Input";

export default function LogInPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [authState, setAuthState] = useState({
    employeeId: "",
    password: "",
  });
  const [isAlert, setIsAlert] = useState(false);
  if (session) console.log(session);
  useEffect(() => {
    if (status === "authenticated") router.push("/gpsLocation");
  }, [status, router]);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthState((old) => ({ ...old, [e.target.id]: e.target.value }));
  };

  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    signIn("credentials", {
      ...authState,
      redirect: false,
    })
      .then((res) => {
        if (res?.error) {
          setIsLoading(false);
          setIsAlert(true);
        } else {
          setIsAlert(false);
          // router.push("/gpsLocation");
        }
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        setIsAlert(true);
      });
  };

  const handleReLogin = () => {
    setAuthState({
      employeeId: "",
      password: "",
    });
    setIsLoading(false);
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

      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-center pb-[100px]">
        <div className="hidden h-[347px] w-[41.6vw] max-w-[426px] items-center justify-center md:flex">
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
        <div className="flex w-[30.7%] min-w-[310px] max-w-[315px] flex-col justify-center">
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
                id="employeeId"
                name="employeeId"
                label="employeeId"
                value={authState.employeeId}
                placeholder="員工編號"
                onChange={handleFieldChange}
                src="images/login/user.svg"
                width={19}
                height={19}
                alt="uer-icon"
              />
            </div>
            <div className="mt-[29px]">
              <Input
                id="password"
                name="password"
                label="password"
                value={authState.password}
                placeholder="員工密碼"
                onChange={handleFieldChange}
                src="images/login/password.svg"
                width={19}
                height={19}
                alt="password-icon"
              />
            </div>
            <Button text="登入" type="submit" isLoading={isLoading} />
          </form>

          <Link
            href="/forgetPassword"
            className="mt-[11px] text-right text-sm font-bold text-red-600"
          >
            忘記密碼
          </Link>
          {isAlert === true && (
            <p className="mb-[100px] mt-[93px] text-center text-lg font-bold text-red-600 sm:pb-0 md:mt-5 ">
              員工編號或密碼有誤
            </p>
          )}
        </div>
      </div>
    </>
  );
}
