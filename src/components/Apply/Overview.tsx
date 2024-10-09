"use client";

import Button from "@/components/Button";
import { Header1Plus, Header3, Header4, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React from "react";
import FormComponent from "./FormSection";
import AOS from "aos";

function Overview() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <div className=" bg-bg_gray py-[24px] sm:py-[100px]">
      <div
        className=" container1 -  bg-white text-p_black"
        data-aos="flip-right"
      >
        {" "}
        <div className=" p-[24px] sm:p-[100px] flex flex-col  sm:gap-[24px] items-center w-full mb-[24px] sm:mb-[64px]">
          <Header1Plus className="text-center">
            Let{"'"}s <span className=" text-primary">Build </span> Something
            Great Together
          </Header1Plus>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Contact Chrissy to collaborate and drive your business forward. Let
            {"'"}s talk!
          </Paragraph1>

          <div className=" mt-[24px] sm:mt-[36px] space-y-[24px] mb-[24px]">
            <Paragraph1 className="  text-center ">
              To ensure our best work, I only accept ONE new Strategic Business
              Brand Transformation client each month. 
            </Paragraph1>
            <Paragraph1 className=" text-center ">
              If you {"'"}re ready to #GetFocused and would like to see if your
              business is a good fit for our services, please fill out the form
              below and I {"'"}ll be in touch!
            </Paragraph1>
            <FormComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
