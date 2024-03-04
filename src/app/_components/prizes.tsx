import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import React from "react";

type Props = {};

const inter = Inter({ subsets: ["latin"] });

const Prizes = (props: Props) => {
  return (
    <div className="w-full relative    px-[74px] py-[120px] grid grid-cols-5">
      <div className="absolute -top-[200px] right-0">
        <img src="/gradientPrize.svg" alt="" />
      </div>
      <div className="flex flex-col space-y-4 col-span-3">
        <div className="flex relative space-x-4 items-baseline">
          <h1 className={cn("text-[40px] font-bold", inter.className)}>
            Win Exiting Prizes & Certifications
          </h1>
          <img src="/textStar.svg" alt="" className="w-[28px] h-[24px] " />
          <img
            src="/curvyline.svg"
            alt=""
            className="absolute top-14 -left-3"
          />
        </div>
        <h1 className="text-lg">
          Unlock the opportunity to win exciting prizes by participating in the
          Mocsha coding platform. Join us now and elevate your coding journey
          while competing for incredible prizes!
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-[14px] h-[14px] bg-[#d5b352] rounded-full"></div>
            <h1 className="text-2xl text-[#d5b352] font">Cash rewards</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-[14px] h-[14px] bg-[#d5b352] rounded-full"></div>
            <h1 className="text-2xl text-[#d5b352] font">Tech gadgets</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-[14px] h-[14px] bg-[#d5b352] rounded-full"></div>
            <h1 className="text-2xl text-[#d5b352] font">Internships</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-[14px] h-[14px] bg-[#d5b352] rounded-full"></div>
            <h1 className="text-2xl text-[#d5b352] font">Certifications</h1>
          </div>
        </div>
      </div>
      <div className="relative col-span-2">
        <div className="w-[450px] h-[460px] rounded-full absolute -top-[50px]  border-2 right-0 border-white">
          <img
            src="/info-block.svg"
            alt=""
            className="absolute -top-8 -left-[60px]"
          />
          <img
            src="/info-block1.svg"
            alt=""
            className="absolute right-[20px] top-[52px]"
          />
          <img
            src="/info-block2.svg"
            alt=""
            className="absolute bottom-8 left-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
