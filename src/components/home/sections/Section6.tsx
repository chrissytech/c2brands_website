"use client";

import Button from "@/components/Button";
import { Header1Plus, Header3, Header4, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React from "react";
import AOS from "aos";


function section6() {

   React.useEffect(() => {
     AOS.init({
       duration: 1000,
     });
   });
  
  return (
    <div>
      <div
        className=" container1 pt-[24px] xl:pt-[100px] text-p_black"
        data-aos="fade-up"
      >
        {" "}
        <div className=" flex flex-col xl:gap-[24px] items-center w-full text-center pb-[64px]">
          <Header1Plus>
            Let{"'"}s <span className=" text-primary ">Build </span> Something
            Great Together
          </Header1Plus>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Contact Chrissy to collaborate and drive your business forward.
          </Paragraph1>
          <Button
            text="Book A Session"
            href="/apply"
            isLink={true}
            additionalClasses="border-white mt-[24px] xl:mt-[48px] w-full xl:w-[385px]  "
          />
        </div>
      </div>
    </div>
  );
}

export default section6;
