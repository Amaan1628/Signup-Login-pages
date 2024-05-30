"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import React from "react";
import { TracingBeam } from "./beam";
import Link from "next/link";

type Props = {};

const inter = Inter({ subsets: ["latin"] });

const OngoingChallenge = (props: Props) => {
  return (
    // <TracingBeam className="h-full">
    <div className="relative">
      <div className="absolute left-[650px] top-[250px] scale-[300%]">
        <img src="/spiralGallaxy.svg" alt="" />
      </div>
      <img
        src="/Isolation_Mode.svg"
        className="absolute bottom-[300px] -z-10 -left-[315px]"
        alt=""
      />
      <div className="w-full  overflow-hidden px-[74px] py-[100px] justify-between flex">
        <div className="flex flex-col space-y-4">
          <div className="flex relative space-x-4 items-baseline">
            <h1 className={cn("text-[40px] font-bold", inter.className)}>
              Ongoing Challenge
            </h1>
            <img src="/textStar.svg" alt="" className="w-[28px] h-[24px] " />
            <img
              src="/curvyline.svg"
              alt=""
              className="absolute top-14 -left-3"
            />
          </div>
          <h1 className="text-[#D5B352] text-[24px]">
            Registration ends on April 20, 2024
          </h1>
          <div>
            <h2 className="text-[20px]">
              Embark on coding hackathons to refine your skills, showcase
              talent,
            </h2>
            <h2 className="text-[20px]">
              and vie for rewards. Explore our challenges and present your
            </h2>
            <h2 className="text-[20px]">innovative solution!</h2>
          </div>
          <div className="flex items-baseline space-x-2">
            <img src="/people.svg" alt="" className="w-[30px]" />
            <h1 className="text-[32px] font-bold">2345</h1>
            <h2>Registered</h2>
          </div>
        </div>
        <div className="px-[24px] py-[32px] flex flex-col space-y-4 rounded-xl bg-[#fff] bg-opacity-10 w-[528px]">
          <div className="flex space-x-4">
            <img
              src="/img.svg"
              className="w-[140px] h-[140px] rounded-lg"
              alt=""
            />
            <div className="flex flex-col space-y-3">
              <h1 className="text-2xl font-semibold">
                Codecraft code Challenge
              </h1>
              <div className="flex space-x-2">
                <h2 className="px-3 py-[6px] text-[12px] bg-[#f6f5ff] bg-opacity-20 rounded-lg">
                  Marketing
                </h2>
                <h2 className="px-3 py-[6px] text-[12px] bg-[#f6f5ff] bg-opacity-20 rounded-lg">
                  Presentation
                </h2>
                <h2 className="px-3 py-[6px] text-[12px] bg-[#f6f5ff] bg-opacity-20 rounded-lg">
                  Coding
                </h2>
              </div>
              <h1 className="text-[14px]">2345 Registration</h1>
              <h1 className="text-[14px]">1 - 4 Team Size</h1>
            </div>
          </div>
          <h1 className="text-[16px] text-[#898ca9] text-center">
            Enhance technical skills through coding and hardware tasks,
            broadening expertise for future pursuits.
          </h1>
          <div className="flex justify-center">
          <Link href="/codechallenge">
            <Button className="px-[18px] py-[12px] bg-[#6843CD] text-white"> 
              View More
            </Button>
          </Link>
          </div>
        </div>
      </div>

      <div className="pw-full flex flex-col space-y-12 px-[74px] py-[100px]">
        <div className="flex space-x-14">
          <img
            src="/img.svg"
            className="w-[247px] h-[260px] rounded-2xl object-cover"
            alt=""
          />

          <div className="flex space-x-14">
            <img
              src="/img.svg"
              className="w-[288px] h-[346px] rounded-2xl object-cover"
              alt=""
            />
            <div className="flex flex-col space-y-8 justify-star py-8 ">
              <div className="flex relative space-x-4 items-baseline">
                <h1 className={cn("text-[40px] font-bold", inter.className)}>
                  About Us
                </h1>
                <img
                  src="/textStar.svg"
                  alt=""
                  className="w-[28px] h-[24px] "
                />
                <img
                  src="/curvyline.svg"
                  alt=""
                  className="absolute top-14 -left-3"
                />
              </div>

              <h1 className="text-[20px]">
                Mocsha, your premier platform dedicated to computer science
                hackathons, fosters innovation and collaboration. Our platform
                offers a dynamic environment where you can showcase your skills,
                collaborate with peers, and tackle real-world problems head-on.
                Join Mocshas dynamic community today.
              </h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-12">
          <img
            src="/img5.png"
            className="h-[346px] rounded-2xl w-full object-cover col-span-3"
            alt=""
          />
          <img
            src="/img6.png"
            className="h-[346px] rounded-2xl w-full object-cover col-span-2"
            alt=""
          />
        </div>
      </div>
    </div>
    // </TracingBeam>
  );
};

export default OngoingChallenge;
