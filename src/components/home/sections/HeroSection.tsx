"use client";

import Button from "@/components/Button";
import { Header1, Paragraph2, Paragraph3 } from "@/components/Text";
import React from "react";
import ElevatingBrands from "./others/ElevatingBrands";
import AOS from "aos";

function HeroSection() {
  React.useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  return (
    <div className="  ">
      <div className="sm:py-[90px] py-[40px] bg-p_black pb-[150px]">
        <div className=" container1 grid grid-cols-1 sm:grid-cols-2 gap-2 items-center ">
          {" "}
          <div
            className="col-span-1 order-2 sm:order-1"
            data-aos="fade-up-right"
          >
            <Header1 className="text-white mt-4 sm:mt-0  ">
              Empowering <span className="text-primary"> Brands</span> with
              Creatives Strategies that drives Results
            </Header1>
            <Paragraph3 className="mt-[16px] mb-[48px] text-white">
              I help businesses grow with tailored branding and marketing
              solutions that connect, inspire, and deliver.{" "}
            </Paragraph3>
            <div className="flex sm:flex-row flex-col items-center gap-[24px] sm:gap-[32px]">
              <Button
                text="Let’s work together"
                //   onClick={handleClick} // onClick is passed from a client component
                additionalClasses="border-primary sm:w-fit w-full "
              />
              <Button
                text="Book a section"
                href="https://google.com"
                isLink={true}
                color="text-white"
                backgroundColor=" bg-p_black"
                border="border-2 border-white "
                additionalClasses=" sm:w-fit w-full "
              />
            </div>
          </div>
          <div className="col-span-1 order-1 sm:order-2">
            <img
              data-aos="fade-left"
              src="/images/hero_photo.svg"
              alt=""
              className="w-full "
            />
          </div>
        </div>
      </div>
      <div className=" -mt-[42px] ">
        <ElevatingBrands />
      </div>
    </div>
  );
}

export default HeroSection;
