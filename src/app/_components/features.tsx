import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

type Props = {};
const inter = Inter({ subsets: ["latin"] });

const Features = (props: Props) => {
  return (
    <div className="w-full relative   px-[74px] py-[100px] flex flex-col space-y-[60px]">
      <img
        src="/Isolation_Mode.svg"
        className="absolute top-[300px] -z-10 -right-[315px]"
        alt=""
      />
      <div className="flex justify-center items-center flex-col">
        <div className="flex relative space-x-4 items-baseline">
          <h1 className={cn("text-[40px] font-bold", inter.className)}>
            Improve your skills by
          </h1>

          <img
            src="/curvyline.svg"
            alt=""
            className="absolute top-14 -left-3"
          />
        </div>
        <div className="flex relative space-x-4 items-baseline">
          <h1 className={cn("text-[40px] font-bold", inter.className)}>
            Participating in our plateform
          </h1>
          <img src="/textStar.svg" alt="" className="w-[28px] h-[24px] " />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[46px]">
        <div className="px-6 py-8 flex flex-col items-center space-y-4 bg-white bg-opacity-10 rounded-xl">
          <div className="h-20 w-20 relative">
            <Image
              src={"/bulbBubble.svg"}
              className="h-full w-full object-cover"
              alt=""
              fill
            />
            <div className="absolute  w-full h-full flex items-center justify-center">
              <Image
                alt=""
                width={22}
                height={32}
                src={"/bulb.svg"}
                className=" object-cover"
              />
            </div>
          </div>
          <h1 className="text-2xl">Problem-solving</h1>
          <h2 className="text-base text-center text-[#898CA9]">
            Participants refine their ability to innovate under pressure,
            creatively addressing real-world challenges.
          </h2>
        </div>
        <div className="px-6 py-8 flex flex-col items-center space-y-4 bg-white bg-opacity-10 rounded-xl">
          <div className="h-20 w-20 relative">
            <Image
              src={"/bulbBubble.svg"}
              className="h-full w-full object-cover"
              alt=""
              fill
            />
            <div className="absolute  w-full h-full flex items-center justify-center">
              <Image
                alt=""
                width={40}
                height={32}
                src={"/persons.svg"}
                className=" object-cover"
              />
            </div>
          </div>
          <h1 className="text-2xl">Collaboration and teamworl</h1>
          <h2 className="text-base text-center text-[#898CA9]">
            Team projects boost collaboration, communication, and diverse skill
            utilization, vital for success in any field.
          </h2>
        </div>
        <div className="px-6 py-8 flex flex-col items-center space-y-4 bg-white bg-opacity-10 rounded-xl">
          <div className="h-20 w-20 relative">
            <Image
              src={"/bulbBubble.svg"}
              className="h-full w-full object-cover"
              alt=""
              fill
            />
            <div className="absolute  w-full h-full flex items-center justify-center">
              <Image
                alt=""
                width={40}
                height={32}
                src={"/pc.svg"}
                className=" object-cover"
              />
            </div>
          </div>
          <h1 className="text-2xl">Technical Proficiency</h1>
          <h2 className="text-base text-center text-[#898CA9]">
            Enhance technical skills through coding and hardware tasks,
            broadening expertise for future pursuits.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Features;
