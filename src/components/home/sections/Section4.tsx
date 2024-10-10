"use client";


import Button from "@/components/Button";
import { Header3, Header4, Paragraph1, Paragraph2, ParagraphLink1 } from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";

function Section4() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className=" bg-bg_gray">
      <div className=" container1 py-[24px] xl:py-[100px]  text-p_black">
        {" "}
        <div
          className=" flex flex-col xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>
            My <span className=" text-primary">Simple 3-Steps</span> Approach
          </Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            With over a decade of experience under my belt, I have a proven
            approach that always works.
          </Paragraph1>
        </div>
        <div className=" grid grid-cols-1 xl:grid-cols-6 gap-[24px] xl:gap-[30px]">
          <div className=" xl:col-span-2">
            <div
              className=" bg-[#FFDCCE] py-[24px] xl:py-[53px] p-[32px] rounded-[24px] "
              data-aos="fade-right"
            >
              <div className="space-y-[24px] xl:space-y-[32px]    ">
                <div className=" flex w-full justify-end-  ">
                  <img src="/images/ideas.svg" alt="chrissy" />
                </div>
                <Header4>Discover</Header4>{" "}
                <Paragraph2>
                  I begin by diving deep into your brand, business, and
                  audience. Through thoughtful research and analysis, I uncover
                  the core of what makes your brand unique and identifies the
                  key challenges and opportunities for growth.
                </Paragraph2>
                <div>
                  <Link
                    href="/apply"
                    className=" text-[20px] font-bold  underline"
                  >
                    <ParagraphLink1> Apply Now</ParagraphLink1>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" xl:col-span-2 ">
            <div className=" bg-[#BECBB9]  rounded-[24px] " data-aos="fade-up">
              <div className="space-y-[24px] xl:space-y-[32px] p-[32px] py-[24px]  xl:py-[53px]">
                <div className=" flex w-full justify-end-  ">
                  <img src="/images/gears.svg" alt="branding" />
                </div>
                <Header4>Develop</Header4>{" "}
                <Paragraph2>
                  Using the insights gained, I go ahead to craft a tailored
                  strategy that includes both creative and practical solutions.
                  From brand identity to every element developed to ensure it
                  aligns with your business goals and resonates with your
                  audience.
                </Paragraph2>
                <div>
                  <Link
                    href="/apply"
                    className=" text-[20px] font-bold  underline"
                  >
                    <ParagraphLink1> Contact Chrissy </ParagraphLink1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className=" xl:col-span-2 ">
            <div
              className=" bg-[#FF9F78]  rounded-[24px] "
              data-aos="fade-left"
            >
              <div className="space-y-[24px] xl:space-y-[32px] p-[32px] py-[24px]  xl:py-[53px]">
                <div className=" flex w-full justify-end-  ">
                  <img src="/images/box1.svg" alt="business" />
                </div>
                <Header4>Deliver</Header4>
                <Paragraph2>
                  With the strategy in place, I help you implement and execute
                  the plan. Whether it{"'"}s launching a campaign or refining
                  your brand{"'"}s messaging, the focus is on delivering
                  measurable results and creating lasting success.
                </Paragraph2>
                <div>
                  <Link
                    href="/apply"
                    className=" text-[20px] font-bold  underline"
                  >
                    <ParagraphLink1>I{"'"}m Ready </ParagraphLink1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
