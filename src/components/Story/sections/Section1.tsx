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

function Section1() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });


  return (
    <div>
      {" "}
      <div className=" container1 py-[24px] sm:py-[100px] text-p_black">
        {" "}
        <div
          className=" flex sm:gap-[24px] flex-col items-center w-full mb-[24px] sm:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>My Story</Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Where Strategy Meets Creativity.{" "}
          </Paragraph1>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-6 gap-[24px] sm:gap-[30px] items-center">
          <div className=" sm:col-span-3">
            <div
              className=" bg-bg_gray rounded-[24px] p-[31px] "
              data-aos="fade-right"
            >
              <img
                src="/images/chissy_carpenter.svg"
                alt="branding"
                className="w-full"
              />{" "}
            </div>
          </div>
          <div className=" sm:col-span-3 space-y-[24px] sm:space-y-[30px]">
            <div className="  " data-aos="fade-left">
              <div className="sm:space-y-[32px] space-y-[24px] text-justify ">
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
                {/* <div>
                  <Link
                    href="/"
                    className=" text-[20px] text-primary font-bold underline "
                  >
                    <ParagraphLink1> Read More</ParagraphLink1>
                  </Link>{" "}
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="mt-[24px] sm:mt-[64px] space-y-[24px] sm:space-y-[64px] text-justify "
          data-aos="zoom-in"
        >
          <Paragraph1>
            While plugging away in the corporate world, I gained incredible
            experience working with many different brands. From the H&R Block
            Internal Communications Department to the Block Real Estate
            Marketing Department and the Lockton Affinity Marketing Department,
            I worked with hundreds of other well-known brands, businesses, and
            business owners. Our most challenging projects were also my most
            rewarding projects. They allowed me to explore the mind of the
            target audiences. Who are they? What do they want? Why do they care
            about this product?
          </Paragraph1>
          <Paragraph1>
            In 2016, the obvious occurred: so many small businesses were
            struggling because they didn{"'"}t have a solid foundation. They
            didn{"'"}t know the science behind some marketing basics like
            choosing a name, the importance of defining a mission, the value of
            developing a target market avatar. They didn{"'"}t know they needed
            to do these things…and they didn{"'"}t know how.
          </Paragraph1>
          <Paragraph1>
            To help small business owners, my team and I published a 67-page
            book to get startups on track. Business Branding for the
            Non-Designer breaks branding down into easy-to-understand,
            easy-to-execute steps, giving non-designers everything they need to
            create winning brands and successful business marketing.
          </Paragraph1>
        </div>
      </div>
    </div>
  );
}

export default Section1;
