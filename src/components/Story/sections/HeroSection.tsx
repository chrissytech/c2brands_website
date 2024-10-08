"use client";

import Button from "@/components/Button";
import { Header1, Header1Plus, Header3, Paragraph3 } from "@/components/Text";
import React from "react";
import AOS from "aos";

function HeroSection() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div>
      <div className=" container1 relative h-[460px rounded-[24px] overflow-hidden w-full bg-black">
        <div
          className="relative z-10 p-[100px] py-[150px]-"
          data-aos="fade-right"
        >
          <div className=" flex flex-col w-[60%] space-y-[24px] ">
            <Header3 className="text-white col-span-1 ">
              Crafting Brands That Inspire, Connect, and{" "}
              <span className="text-primary"> Drive Success</span>
            </Header3>
            <Paragraph3 className="mt-[16px] mb-[48px] text-white">
              My name is Chrissy, and I help businesses grow with tailored
              branding and marketing solutions that connect, inspire, and
              deliver.
            </Paragraph3>
            <Button
              text="Let’s work together"
              //   onClick={handleClick} // onClick is passed from a client component
              additionalClasses="border-primary w-fit  "
            />
          </div>
        </div>

        {/* Background image overlay */}
        <div
          className="absolute inset-0 bg-cover -top-[100px]  bg-center- z-0"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/denm0obl2/image/upload/v1728294814/213be27f90b4ade712a119a87bb3fd30fjkl_rqprnx.jpg')",
          }}
        ></div>
        {/* Dark overlay for the background image */}
        <div className="absolute inset-0  bg-black opacity-20 z-0"></div>
      </div>
    </div>
  );
}

export default HeroSection;
