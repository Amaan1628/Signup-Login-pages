"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Salsa } from "next/font/google";
import Image from "next/image";
import React from "react";
import { SparklesCore } from "./sparkles";

type Props = {};

const salsa = Salsa({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-salsa",
  weight: ["400"],
});

const Hero = (props: Props) => {
  const divs = Array.from({ length: 30 }, (_, index) => index + 1);

  const getRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  return (
    <div className="relative w-full   overflow-hidden ">
      <div className="  absolute -z-20 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-full  h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="bg-gradient-to-b from-[#32206A] bg-no-repeat to-[#130736] w-full absolute top-0 h-[200px]"></div>

      {/* {divs.map((id) => (
        <div
          key={id}
          className="absolute w-20 h-20   rounded-full flex items-center justify-center"
          style={getRandomPosition()}
        >
          <img src="/tinyStar.svg" alt="" />
        </div>
      ))} */}

      <div className="absolute top-[100px]  right-[400px]">
        <img src="/star-img1.svg" alt="" />
      </div>
      <div className="absolute bottom-[300px]  left-[400px]">
        <img src="/star-img2.svg" alt="" />
      </div>
      {/* Sphere1 */}
      <div className="absolute z-[120]  top-1/2 left-0">
        <div className="relative">
          <img src="/sphere.svg" alt="" />
          <img
            src="/bgsphere1.svg"
            alt=""
            className="absolute left-[50px] -top-[50px] scale-[400%] "
          />
        </div>
      </div>
      {/* Sphere 2 */}
      <div className="absolute top-[400px] -right-10">
        <div className="relative">
          <img src="/sphere2.svg" alt="" className="" />
          <img
            src="/bgsphere2.svg"
            alt=""
            className="absolute right-[70px] -top-[150px]  scale-[300%] "
          />
        </div>
      </div>

      {/* Logo1 */}
      <div className="animate-pulse  absolute left-[100px] top-[200px]">
        <img src="/Group6.svg" className="w-[120px]" alt="" />
      </div>
      {/* Logo2 */}
      <div className="animate-pulse absolute right-[100px] top-[130px]">
        <img src="/Group1.svg" alt="" />
      </div>
      {/* Logo3 */}
      <div className="animate-pulse absolute right-[200px] bottom-[130px]">
        <img src="/Group4.svg" className="w-[120px]" alt="" />
      </div>
      <div className=" bg-transparent  min-h-[1024px] w-full ">
        <Image
          alt=""
          src={"/spiral.png"}
          className="object-cover animate-[spin_60s_linear_infinite]  w-full h-full"
          fill
        />
      </div>
      <div className="absolute top-[250px] flex w-full justify-center ">
        <div className="relative flex flex-col items-center">
          <h1 className={cn(salsa.className, "text-[72px] text-[#F6D252]")}>
            MOCSHA
          </h1>
          <div className="flex space-x-4 items-baseline text-[38px]">
            <h1>
              <span className="text-[#F6D252] text-[48px] text-bold">M</span>
              other
            </h1>
            <h1>
              <span className="text-[#F6D252] text-[48px] text-bold">O</span>f
            </h1>
            <h1>all</h1>
            <h1>
              <span className="text-[#F6D252] text-[48px] text-bold">C</span>
              omputer
            </h1>
            <h1>
              <span className="text-[#F6D252] text-[48px] text-bold">S</span>
              cience
            </h1>
            <h1>
              <span className="text-[#F6D252] text-[48px] text-bold">HA</span>
              ckathons
            </h1>
          </div>
          <h1 className="text-[24px] pt-4">
            Unleash your coding skills: Collaborate, innovate, and compete to
          </h1>
          <h1 className="text-[24px] pb-12">solve real-world tech problems!</h1>
          <Button className=" text-[24px] font-normal rounded-xl text-white px-8 py-10 bg-gradient-to-tr from-[#6843CD] to-[#9943CD] transform transition duration-200 ease-out hover:scale-105 ">
            Explore Challenges
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
