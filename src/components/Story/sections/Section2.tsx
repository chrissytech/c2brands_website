"use client";

import { Header4, Paragraph1 } from "@/components/Text";
import React from "react";
import AOS from "aos";

function Section2() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className=" relative bg-bg_gray" data-aos="flip-up">
      <div className=" container1 py-[24px] sm:py-[100px]">
        {" "}
        <div className="  grid grid-cols-1 md:grid-cols-1 xl:grid-cols-6 gap-[30px]-">
          <div className=" sm:col-span-4 space-y-[30px]">
            <div className="  ">
              <div className="space-y-[24px] sm:space-y-[32px] p-[32px]- text-justify ">
                <Header4>
                  This was a great start, but I knew bigger things lay ahead.
                </Header4>{" "}
                <Paragraph1>
                  Following the principles outlined in my book, I developed my
                  Strategic Business Brand Transformation, designed to
                  #ElevateYourBrand. Through this transformation, I immerse
                  myself in your business to understand your successes,
                  failures, and, most importantly, your goals. From concept to
                  completion, we{"'"}ll analyze your business, #GetFocused,
                  design, and execute proven marketing strategies that work.
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
          <div className=" sm:col-span-1 hidden xl:flex">
            <div className=" bg-bg_gray rounded-[24px]  p-[31px] ">
              <img
                src="/images/chrissy_shot.svg"
                alt="branding"
                className="w- absolute bottom-0 right-[40px]"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
