import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-[#09080E] mt-[200px] z-20 px-[46px] py-[42px] grid grid-cols-4">
      <div className="flex flex-col justify-between space-y-20">
        <div className="flex flex-col space-y-4">
          <h1 className="text-[32px] font-semibold">Mocsha</h1>
          <div className="flex space-x-4 ">
            <img src="/loc.svg" alt="" />
            <div>
              <h1 className="text-[14px]">4th Floor Bizness Square</h1>
              <h1 className="text-[14px]">Hitec City, Hyderabad, 500081</h1>
            </div>
          </div>
          <div className="flex space-x-4 ">
            <img src="/call.svg" alt="" />

            <h1 className="text-[14px]">(684) 555-0102</h1>
          </div>
        </div>
        <h1 className="text-xs">©2024 Mocsha | info@mocsha.com</h1>
      </div>
      <div className="flex flex-col space-y-6">
        <h1 className="font-semibold">Site Map</h1>
        <h1 className="a">Home</h1>
        <h1 className="a">About Us</h1>
        <h1 className="a">Challenges</h1>
        <h1 className="a">Contact Info</h1>
      </div>
      <div className="flex flex-col space-y-6">
        <h1 className="font-semibold">Others</h1>
        <h1 className="a">Privacy Policy</h1>
        <h1 className="a">Terms and Conditions</h1>
        <h1 className="a">Careers</h1>
        <h1 className="a">Media Coverage</h1>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-4">
          <h1>Subscribe to get latest updates</h1>
          <div className="w-full flex">
            <div className="w-full bg-[#f6f5ff] flex items-center bg-opacity-[12%] rounded-l-xl px-4 py-3">
              <input
                type="text"
                className="text-[14px] bg-transparent outline-none w-full"
                placeholder="Your Email address"
              />
            </div>
            <div className="bg-[#6843CD] transition cursor-pointer transform hover:scale-x-105 text-[14px] rounded-r-xl p-4">
              Subscribe
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="font-semibold">Follow us On</h1>
          <div className="flex space-x-4">
            <img src="/fb.svg" alt="" />
            <img src="/insta.svg" alt="" />
            <img src="/twitter.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
