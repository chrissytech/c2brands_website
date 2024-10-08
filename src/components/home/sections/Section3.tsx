"use client";

import {
  Header3,
  Header4,
  Paragraph1,
  ParagraphLink1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";


function Section3() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });


  return (
    <div>
      {" "}
      <div className=" container1 py-[100px] text-p_black">
        {" "}
        <div
          className=" flex sm:gap-[24px] flex-col items-center w-full mb-[24px] sm:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>Meet Chrissy </Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Your partner in strategic brand transformation
          </Paragraph1>
        </div>
        <div className=" grid col-span-1 sm:grid-cols-6 gap-[18px] sm:gap-[30px]">
          <div className=" sm:col-span-3">
            <div
              className=" bg-bg_gray rounded-[24px] p-[31px] "
              data-aos="fade-left"
            >
              <img
                src="/images/chissy_carpenter.svg"
                alt="branding"
                className="w-full"
              />{" "}
            </div>
          </div>
          <div className=" sm:col-span-3  sm:space-y-[30px]">
            <div className="  " data-aos="fade-right">
              <div className="space-y-[12px] sm:space-y-[32px] sm:p-[32px]">
                <Header4>Transform Your Brand</Header4>{" "}
                <Paragraph1>
                  I{"'"} m Chrissy Carpenter, founder of the C-Sqaured Brands,
                  and my goal is to help empower businesses to achieve their
                  maximum potential by strategically refocusing their brand and
                  messaging from the inside out. i do this by building a strong
                  foundation based on your core values and developing long-term
                  solutions that will #ElevateYourBrand. By diving into your
                  business, your brand and your head, I will transform your
                  current strategy to one that will work. It{"'"}s time to let a
                  professional help you achieve the success you DESERVE.
                </Paragraph1>
                <div>
                  <Link
                    href="/"
                    className=" text-[20px] text-primary font-bold underline "
                  >
                    <ParagraphLink1> Read More</ParagraphLink1>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
