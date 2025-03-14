'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import OtpVerification from '../login/_components/otpVerification';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const signup = () => {

    const [sendOtp, setSendOtp] = useState(false);

    function handleOtp () {
        setSendOtp(true);
    }

    return (
    //main screen
    <div className="h-screen grid grid-cols-5 ">
        {/* //purple div */}
        <div className="bg-gradient-to-b from-lightPurple via-mediumPurple to-darkPurple col-span-3 h-screen relative">

            <img src="/spiral-login.png" alt="spiral" 
            className="absolute right-0"/>
            <img src="/dots.png" alt="dots" 
            className="absolute" />
            <img src="/outerEllipse.png" alt="out ellipse" 
            className="absolute pt-[36px] h-[100%] " />
            <img src="/innerEllipse.png" alt="in ellipse" 
            className="absolute top-[18vh] " />
            <img src="/blurEllipse.png" alt="blur img" 
            className="absolute right-[5vw] bottom-[4vh]" />
            
            <h1 className="absolute pl-[300px] pt-[170px] w-[800px] z-10  font-RobotoSerif font-semibold text-[48px] text-white">
                Embark on Your Learning Adventure with 
                <span className="font-Syne font-bold text-[56px]">{" "}Mocsha</span>
            </h1>
            <img className="absolute z-10 pt-[446px] pl-[250px]" src="/girlImage.png" alt="girl"/>
            <img className="absolute z-10 pt-[596px] pl-[250px]" src="/imageEllipse.png" alt="ellipse"/>

            <div className="flex flex-col absolute mt-[70px] ml-[150px] h-[805px] w-[842px] rounded-xl bg-white shadow-lg  opacity-25">
            </div>
        </div>

        {/* //white div */}
        <div className="flex flex-col col-span-2  bg-white ">
            <div className="flex flex-col items-center justify-center h-full space-y-6">
                {sendOtp ? 
                <>
                <OtpVerification/>
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
                <Button 
                  className='p-6'
                  variant={"authButton"}>
                   Log in
                </Button>
                </> : <>
                <h2 className=" font-semibold font-Roboto text-3xl text-textPurple ">
                Signup
                </h2>
                <div className="flex flex-col  items-start">
                    <label className="pl-3 text-textColor text-[16px] font-medium font-Roboto">
                        Full Name
                    </label>
                    <Input
                        className="bg-emailButton border-none rounded-[12px] w-[482px] p-6 placeholder:text-textColor text-black font-normal font-Roboto "
                        type="email"
                        placeholder="Enter Your Full Name"
                        required
                    />
                    <label className="pl-3 text-textColor text-[16px] font-medium font-Roboto mt-[14px]">
                        Email
                    </label>
                    <Input
                        className="bg-emailButton border-none rounded-[12px] w-[482px] p-6 placeholder:text-textColor text-black font-normal font-Roboto "
                        type="email"
                        placeholder="xyz@gmail.com"
                        required
                    />
                </div>

                <Button 
                className='p-6'
                variant={"authButton"}
                onClick={handleOtp}>
                Send OTP
                </Button>

                <div className="flex justify-end w-[55%]">
                    <h4 className="text-textColor  text-[14px] font-regular font-Roboto">
                    Dont have an account?{" "}
                    <Link href="/login">
                        <span className="text-OTPButton text-[16px] font-Roboto font-semibold cursor-pointer">
                        Login
                        </span>
                    </Link>
                    </h4>
                </div>
                </>
                }
                

                <div className="flex justify-center  items-center space-x-2">

                    <div className="h-[1px] bg-gray-300 w-[100px]"></div>
                    <h1 className="text-textColor font-Roboto">Or</h1>
                    <div className="h-[1px] bg-gray-300 w-[100px]"></div>
                
                </div>
                
                <Button className="flex gap-4 justify-center border-2 bg-white border-borderColor w-[482px] rounded-[12px] p-6 text-textColor text-[16px] font-medium font-Roboto">
                    <img src="/GoogleIcon.png" alt="google icon" />
                    Continue with Google
                </Button>
                <Button className="flex gap-4 justify-center border-2 bg-white border-borderColor w-[482px] rounded-[12px] p-6 text-textColor text-[16px] font-medium font-Roboto">
                    <img src="/GithubIcon.png" alt="github icon"/>
                    Continue with Github
                </Button>
                
            </div>
        </div>
    </div>
    )
}

export default signup;