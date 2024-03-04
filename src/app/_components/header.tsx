"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Inter, Salsa } from "next/font/google";
import React from "react";

type Props = {};
const salsa = Salsa({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-salsa",
  weight: ["400"],
});
export const Header = (props: Props) => {
  return (
    <div className="absolute z-10 top-0 w-full h-[74px] bg-gradient-to-b from-header-start to-header-end px-6 py-4 flex justify-between">
      <h1 className={cn("text-3xl font-semibold ", salsa.className)}>Mocsha</h1>
      <div className="flex space-x-8">
        <Button className="px-[24px] py-[12px]">Sign Up</Button>
        <Button className="bg-gradient-to-r from-[#6843CD] to-[#9943CD] text-white px-[24px] py-[12px]">
          Login
        </Button>
      </div>
    </div>
  );
};
