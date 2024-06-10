"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Inter, Salsa } from "next/font/google";
import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";

type Props = {};
const salsa = Salsa({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-salsa",
  weight: ["400"],
});

export const Header = (props: Props) => {
  const logged = useSelector(
    (state: RootState) => state.authButton.loggedvalue,
  );

  return (
    <div className="absolute z-10 top-0 w-full h-[74px] bg-gradient-to-b from-header-start to-header-end px-6 py-4 flex justify-between">
      <h1 className={cn("text-3xl font-semibold ", salsa.className)}>Mocsha</h1>
      <div className="flex space-x-8">
        {/* {!logged &&
         (<>
          <Link href="/signup">
          <Button className="px-[24px] py-[12px]">Sign Up</Button>
          </Link>
          <Link href="/login" >
            <Button className="bg-gradient-to-r from-[#6843CD] to-[#9943CD] text-white px-[24px] py-[12px]">
              Login
            </Button>
          </Link>
        </>) } */}

        <Link href="/signup">
          <Button className="px-[24px] py-[12px]">Sign Up</Button>
        </Link>
        <Link href="/login">
          <Button className="bg-gradient-to-r from-[#6843CD] to-[#9943CD] text-white px-[24px] py-[12px]">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};
