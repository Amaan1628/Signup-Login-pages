import React from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function codeChallenge() {
    return (
        // Main Screen
        <div className="flex h-screen">
            {/* sidebar */}
            <div className="bg-[#0B0D1B] h-screen w-[15%]">
                <div className="flex flex-col gap-[400px]">
                    <div className="p-6 flex flex-col gap-10">
                        <h1 className="font-roboto font-bold text-[30px]">Mocsha</h1>
                        <div className="flex space-x-2 items-center">
                            <img className="w-[20px] h-[18px]" src="/codechallenge/home-challenge.png" alt="home" />
                            <h2 className="text-[20px] font-roboto">Challenges</h2>
                        </div>
                        <div className="flex space-x-2 items-center font-Roboto">
                            <img src="/codechallenge/flag-challenge.png" alt="flag" />
                            <h2 className="text-[20px] font-roboto">Flagged</h2>
                        </div>
                        <div className="flex space-x-2 items-center font-Roboto">
                            <img src="/codechallenge/teams-challenge.png" alt="teams" />
                            <h2 className="text-[20px] font-roboto">Teams</h2>
                        </div>
                        <div className="flex space-x-2 items-center font-Roboto">
                            <img src="/codechallenge/settings-challenge.png" alt="settings" />
                            <h2 className="text-[20px] font-roboto">Settings</h2>
                        </div>
                        <div className="flex space-x-2 items-center font-Roboto">
                            <img src="/codechallenge/help-challenge.png" alt="help" />
                            <h2 className="text-[20px] font-roboto">Help Center</h2>
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center font-Roboto p-6">
                        <img src="/codechallenge/logout-challenge.png" alt="logout" />
                        <h2 className="text-[20px] font-roboto">Log out</h2>
                    </div>
                </div>
            </div>

            {/* //Grey Main */}
            <div className="bg-[#F1F3F6] h-screen w-[86%] flex flex-col gap-4">
                {/* //header */}
                <div className="flex justify-between items-center h-[75px] px-10 bg-white shadow-md">
                    <Input 
                        className="border-[#DBDBDB] w-[403px] rounded-[10px] font-roboto placeholder:text-[#696F79] text-black"
                        placeholder="Search.."
                        type="text"
                        required
                    />
                    <div className="flex items-center gap-3">
                        <img className="w-[50px] h-[50px]"
                        src="/codechallenge/headerpic-challenge.png" alt="header-pic" />
                        <h2 className="text-[#666666] font-roboto text-semibold">Deepanksha</h2>
                    </div>
                </div>

                {/* //challenge*/}
                <div className="bg-white h-12 w-[98%] ml-[15px] rounded-lg shadow-md flex items-center pl-5">
                    <h2 className="text-[#383333] font-semibold font-Roboto text-2xl">Challenge</h2>
                </div>

                {/* //challenge  header*/}
                <div className="bg-white w-[98%] h-[300px] ml-[15px] rounded-xl shadow-md relative">

                    <img src="/codechallenge/background-challenge.png"
                    className="w-full h-[40%]"
                    alt="amazon"/>

                    <div className="absolute left-4 top-0 h-full flex items-center">
                        <img src="/codechallenge/amazon-challenge.png"
                        alt="amazon icon"/>
                    </div>

                    <div className="flex justify-between pl-[200px]">
                        <div className=" flex flex-col gap-4 pt-2">
                            <h2 className=" text-black text-[2rem] font-semibold font-Roboto">CodeCraft Challenge</h2>

                            <div className="flex gap-3">
                                <div className="bg-[#F6F5FF] text-textColor rounded-[6px] text-[15px] p-1 font-roboto">Marketing</div>
                                <div className="bg-[#F6F5FF] text-textColor rounded-[6px] text-[15px] p-1 font-roboto">Presentation</div>
                                <div className="bg-[#F6F5FF] text-textColor rounded-[6px] text-[15px] p-1 font-roboto">Coding</div>
                            </div>

                            <div className="flex gap-5">
                                <div className="flex flex-col">
                                    <h2 className="text-[1rem] text-textColor font-roboto">Opens At</h2>
                                    <h2 className="text-[1.2rem] text-[#393030] font-roboto">20, Apr 2023 | 10:30 pm</h2>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-[1rem] text-textColor font-roboto">Closes At</h2>
                                    <h2 className="text-[1.2rem] text-[#393030] font-roboto">20, Apr 2023 | 10:30 pm</h2>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-[1rem] text-textColor font-roboto">Duration</h2>
                                    <h2 className="text-[1.2rem] text-[#393030] font-roboto">30 minutes</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-around pt-5 pr-5">
                            <h2 className="text-textColor font-roboto"><span className="text-[#393030] font-roboto">1 - 4</span>{" "}Team size</h2>
                            <h2 className="text-textColor font-roboto"><span className="text-[#393030] font-roboto">426</span>{" "}Registered</h2>
                            <Button
                            className="w-[130px] bg-lightPurple text-white hover:bg-textPurple">Start</Button>
                        </div>
                    </div>
                </div>
                {/* //lowest section */}
                <div className="flex gap-5">
                    {/* //Description */}
                    <div className="bg-white w-[75%] h-[440px] ml-[15px] rounded-xl shadow-md">
                        <div className="p-5 flex flex-col gap-2">
                            <h1 className="text-[#282828] font-roboto font-semibold text-[18px]">Description</h1>
                            <p className="text-[#4D4D4D] font-roboto font-semibold text-[15px]">The GRE and TOEFL hackathon will help empower you in your study abroad journey. We are looking to support you in your journey by providing free prep materials, scholarships and discounts. Register for the challenge and make the most of this opportunity to fulfill your dream of studying at one of the top universities across the world, in the US, Canada, UK and Australia.</p>

                            <h1 className="text-[#282828] font-roboto font-semibold text-[18px]">Eligibility Criteria</h1>
                            <p className="text-[#4D4D4D] font-roboto font-semibold text-[15px]">The GRE and TOEFL hackathon will help empower you in your study abroad journey. We are looking to support you in your journey by providing free prep materials, scholarships and discounts. Register for the challenge and make the most of this opportunity to fulfill your dream of studying at one of the top universities across the world, in the US, Canada, UK and Australia.</p>

                            <h1 className="text-[#282828] font-roboto font-semibold text-[18px]">Instructions</h1>
                            <p className="text-[#4D4D4D] font-roboto font-semibold text-[15px]">1. Environment Setup: Ensure that your development environment is ready with the necessary tools and dependencies. Check the test description for any specific requirements.</p>
                            <p className="text-[#4D4D4D] font-roboto font-semibold text-[15px]">2. Internet Connection: Make sure you have a stable internet connection to access any online resources or documentation you might need during the test.</p>
                            <p className="text-[#4D4D4D] font-roboto font-semibold text-[15px]">3. Read Carefully: Thoroughly read the instructions and problem statement. Understand the requirements and constraints before you start coding.</p>
                            <p className="text-[#4D4D4D] font-roboto font-semibold text-[15px]">4. Test Duration: Be aware of the time constraints. Manage your time wisely and allocate sufficient time for planning, coding, testing, and documentation.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        {/* //Social */}
                        <div className="bg-white h-[50%] w-[382px] rounded-xl shadow-md">
                            <div className="p-6 flex flex-col gap-2">
                                <h2 className="text-black font-roboto font-semibold">Social Share</h2>
                                <h2 className="text-black font-sans font-semibold">Social Share</h2>
                                <div className="flex gap-7">
                                    <img src="/codechallenge/fb-challenge.png" alt="social icons"/>
                                    <img src="/codechallenge/insta-challenge.png" alt="social icons"/>
                                    <img src="/codechallenge/twitter-challenge.png" alt="social icons"/>
                                </div>
                                <h2 className="text-black font-roboto font-semibold">Invite</h2>
                                <Input
                                className="border-[#DBDBDB] rounded-[10px] font-roboto placeholder:text-[#696F79] text-[#BBB5B5] h-[50px]"
                                placeholder="Enter Email"
                                type="text"
                                required />
                                <p className="text-textPurple font-semibold pl-[280px]">Invite</p>
                            </div>
                        </div>

                        {/* //Teammates */}
                        <div className="bg-white h-[50%] w-[382px] rounded-xl shadow-md">
                            <div className="p-6 flex flex-col gap-2">
                                <h2 className="text-black font-semibold">Teammates</h2>
                                <div className="border-2 rounded-lg border-[#BBB5B5] p-2">
                                    <h2 className="text-[#212121] font-semibold">Madhav</h2>
                                    <h3 className="text-[#212121]">Madhav@gmail.com</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}