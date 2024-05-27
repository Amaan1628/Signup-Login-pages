import React from "react";



export default function OtpButton ( {changeOtp}: {changeOtp: (p: boolean) => any} ) {
    return (
        <button 
        className=" bg-OTPButton rounded-[12px] w-[482px] text-white p-3 font-semibold font-Roboto"
        onClick={() => changeOtp(true)}>
            Send OTP
        </button>
    )
}