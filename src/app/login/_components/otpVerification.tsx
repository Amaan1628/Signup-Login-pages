"use client";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
  


export default function OtpVerification () {
    return (
        <div className="flex flex-col gap-5 items-start">
            <h1 className="pl-3 font-semibold font-Roboto text-2xl text-black "> Verify your Email !</h1>
            <label className="pl-3 text-textColor text-[16px] font-medium font-Roboto"> Please enter the verification code that was sent to your mail. </label>
            
            <InputOTP maxLength={6}>
            <InputOTPGroup className="text-textColor">
                <InputOTPSlot className="border-b-4 mx-4 "  index={0} />
                <InputOTPSlot className="border-b-4 mx-4"  index={1} />
                <InputOTPSlot className="border-b-4 mx-4"  index={2} />
                <InputOTPSlot className="border-b-4 mx-4"  index={3} />
                <InputOTPSlot className="border-b-4 mx-4"  index={4} />
                <InputOTPSlot className="border-b-4 mx-4"  index={5} />
            </InputOTPGroup>
            </InputOTP>
        </div>
    )
}