"use client";

import Button from "@/components/Button";
import {
  Header3,
  Header4,
  Paragraph1,
  ParagraphLink1,
} from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";

function Section2() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });


  return (
    <div>
      <div className=" container1 pt-[24px] xl:pt-[100px]  text-p_black">
        {" "}
        <div
          className=" flex flex-col gap-[8px] xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>
            Are you <span className=" text-primary">missing</span> the mark?
          </Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Your marketing is good but isn{"'"}t producing results? I help
            businesses gain back their focus and realign their strategies to
            achieve impactful, measurable results. It{"'"}s time to #GetFocused!
          </Paragraph1>
        </div>
        <div className=" grid grid-cols-1 xl:grid-cols-5  sm:grid-cols-1 gap-[24px] xl:gap-[30px]">
          <div className="  xl:col-span-3">
            <div className=" bg-bg_gray rounded-[24px] " data-aos="fade-right">
              <img
                src="/images/section2_img1.svg"
                alt="branding"
                className="w-full"
              />{" "}
              <div className=" space-y-[24px] xl:space-y-[32px] p-[24px] xl:p-[32px] flex flex-col w-full">
                <Header4>Let{"'"}s Work Together</Header4>{" "}
                <Paragraph1>
                  I collaborate with businesses like yours to refine their
                  vision, amplify their message, and position their brand for
                  success. Whether you need a brand overhaul, a fresh marketing
                  strategy, or a campaign that cuts through the noise, I{"'"}m
                  here to help to you bring it to life.{" "}
                </Paragraph1>
                <Button
                  text="Book A Session"
                  href="/apply"
                  isLink={true}
                  additionalClasses="border-0 xl:w-fit w-full "
                />
              </div>
            </div>
          </div>
          <div className=" xl:col-span-2 space-y-[24px] xl:space-y-[30px]">
            <div
              className=" bg-bg_gray rounded-[24px] "
              data-aos="fade-down-left"
            >
              <div className="space-y-[24px] xl:space-y-[32px] p-[24px] xl:p-[32px]">
                <Header4>My Goal</Header4>{" "}
                <Paragraph1>
                  With years of experience in the branding and marketing space,
                  I partner with businesses to build identities that resonate
                  and strategies that drive results. Whether you{"'"}re a xlall
                  business or an established brand, my goal is to help you stand
                  out and be heard.
                </Paragraph1>
                <img src="/images/people.svg" alt="branding" className="w-" />{" "}
              </div>
            </div>
            <div
              className=" bg-primary text-white rounded-[24px] "
              data-aos="fade-up-left"
            >
              <div className="xl:space-y-[6px] 2xl:space-y-[32px] space-y-[24px] p-[24px] xl:p-[32px]">
                <div className=" flex w-full justify-end  ">
                  <img src="/images/3_circles.svg" alt="" />
                </div>
                <Header4>Transform Your Brand</Header4>{" "}
                <Paragraph1>
                  Through tailored strategies and a creative approach, I{"'"}ll
                  work with you to translate your marketing efforts into
                  powerful results.
                </Paragraph1>
                <div>
                  <Link
                    href="/apply"
                    className=" text-[20px] font-bold text-white underline"
                  >
                    <ParagraphLink1> Let{"'"}s talk</ParagraphLink1>
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

export default Section2;
