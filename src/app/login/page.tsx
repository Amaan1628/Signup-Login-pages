"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import OtpVerification from "./_components/otpVerification";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { githubAPI } from "@/utils/api";
import { useRouter } from "next/navigation";
import { RootState, AppDispatch } from "@/store/store";
import { loggedIn, sendOTP } from "@/store/slice";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { getCode } from "@/store/login/githubLogin.logic";

interface MyComponentProps {
  search: string;
}

const Login: React.FC<MyComponentProps> = () => {
  const { toast } = useToast();

  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("code");
  console.log("this is the code in query param", search);

  const otp = useSelector((state: RootState) => state.otp.otpvalue);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const getCode = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/auth/callback?code=${search}`,
        );
        console.log("this is the response from backend", res);
        localStorage.setItem("Authorization", `Bearer ${res.data.token}`);
        console.log("This is the Token", localStorage.getItem("Authorization"));
        // router.push("/")
        toast({
          title: "Successful Login",
          description: "Continue to the Homepage",
        });
      } catch (error) {
        console.log(error);
        if (!localStorage.getItem("Authorization")) {
          toast({
            title: "Unsuccessful Login",
            description: "Retry",
          });
        }
      }
    };
    getCode();
  }, [search, router]);

  // useEffect(() => {
  //   if (search) {
  //     dispatch(getCode());
  //   }
  // }, [search, dispatch]);

  const githubLogin = async () => {
    router.push(
      "https://github.com/login/oauth/authorize?client_id=Ov23lis45NfFVnFRykZY",
    );
    // const res = await githubAPI(()=>{

    //   router.push("/")
    // })
  };

  // const [sendOtp,setSendOtp] = useState(false);
  // function handleOtp() {
  //   setSendOtp(true);
  // }

  return (
    //main screen
    <div className="h-screen flex ">
      {/* //purple div */}
      <div className="bg-gradient-to-b from-lightPurple via-mediumPurple to-darkPurple h-screen w-7/12 relative">
        <img
          src="/spiral-login.png"
          alt="spiral"
          className="absolute pl-[1000px]"
        />
        <img src="/dots.png" alt="dots" className="absolute" />
        <img
          src="/outerEllipse.png"
          alt="out ellipse"
          className="absolute pt-[36px] h-[100%] "
        />
        <img
          src="/innerEllipse.png"
          alt="in ellipse"
          className="absolute pt-[176px] "
        />
        <img
          src="/blurEllipse.png"
          alt="blur img"
          className="absolute pl-[972px] pt-[760px]"
        />

        <h1 className="absolute pl-[300px] pt-[170px] w-[800px] z-10  font-RobotoSerif font-semibold text-[48px] text-white">
          Embark on Your Learning Adventure with
          <span className="font-Syne font-bold text-[56px]"> Mocsha</span>
        </h1>
        <img
          className="absolute z-10 pt-[446px] pl-[250px]"
          src="/girlImage.png"
          alt="girl"
        />
        <img
          className="absolute z-10 pt-[596px] pl-[250px]"
          src="/imageEllipse.png"
          alt="ellipse"
        />

        <div className="flex flex-col absolute mt-[70px] ml-[150px] h-[805px] w-[842px] rounded-xl bg-white shadow-lg  opacity-25"></div>
      </div>

      {/* //white div */}
      <div className="flex flex-col w-5/12 bg-white ">
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {/* //Sending OTP for Logging in */}
          {otp ? (
            <>
              <OtpVerification />
              <div className="flex justify-end w-[55%]">
                <h4 className="text-[#11068C] font-semibold text-[14px] font-regular font-Roboto">
                  Time{" "}
                  <Link href="/signup">
                    <span className="text-[#B5B5DF] text-[16px] font-Roboto font-semibold cursor-pointer">
                      Resend Code
                    </span>
                  </Link>
                </h4>
              </div>
              <Button className="p-6" variant={"authButton"}>
                Log in
              </Button>
            </>
          ) : (
            <div className="flex flex-col items-center gap-6">
              <h2 className=" font-semibold font-Roboto text-3xl text-textPurple ">
                Login to your account
              </h2>
              <div className="flex flex-col  items-start">
                <label className="pl-3 text-textColor text-[16px] font-medium font-Roboto">
                  Email
                </label>
                <Input
                  className="bg-emailButton rounded-[12px] w-[482px] p-6 border-none placeholder:text-textColor text-black font-normal font-Roboto "
                  type="email"
                  placeholder="xyz@gmail.com"
                  required
                />
              </div>
              <Button
                className="p-6"
                variant={"authButton"}
                onClick={() => dispatch(sendOTP(), loggedIn())}
              >
                Send OTP
              </Button>
              <div className="flex justify-end">
                <h4 className="text-textColor  text-[14px] font-regular font-Roboto">
                  Dont have an account?{" "}
                  <Link href="/signup">
                    <span className="text-OTPButton text-[16px] font-Roboto font-semibold cursor-pointer">
                      Sign Up
                    </span>
                  </Link>
                </h4>
              </div>
            </div>
          )}

          <div className="flex justify-center  items-center space-x-2">
            <div className="h-[1px] bg-gray-300 w-[100px]"></div>
            <h1 className="text-textColor font-Roboto">Or</h1>
            <div className="h-[1px] bg-gray-300 w-[100px]"></div>
          </div>

          <Button className="flex gap-4 justify-center border-2 bg-white border-borderColor w-[482px] rounded-[12px] p-6 text-textColor text-[16px] font-medium font-Roboto">
            <img src="/GoogleIcon.png" alt="google icon" />
            Continue with Google
          </Button>
          {/* <a href="https://github.com/login/oauth/authorize?client_id=Ov23lis45NfFVnFRykZY"> */}
          <Button
            className="flex gap-4 justify-center border-2 bg-white border-borderColor w-[482px] rounded-[12px] p-6 text-textColor text-[16px] font-medium font-Roboto"
            onClick={githubLogin}
          >
            <img src="/GithubIcon.png" alt="github icon" />
            Continue with Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
