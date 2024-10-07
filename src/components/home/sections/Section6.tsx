import Button from "@/components/Button";
import { Header1Plus, Header3, Header4, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React from "react";

function section6() {
  return (
    <div>
      <div className=" container1 pt-[100px] text-p_black">
        {" "}
        <div className=" flex flex-col gap-[24px] items-center w-full mb-[64px]">
          <Header1Plus>
            Let{"'"}s <span className=" text-primary">Build </span> Something
            Great Together
          </Header1Plus>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Contact Chrissy to collaborate and drive your business forward.
          </Paragraph1>
          <Button
            text="Book A Session"
            //   onClick={handleClick} // onClick is passed from a client component
            additionalClasses="border-primary mt-[48px] w-[385px]  "
          />
        </div>
      </div>
    </div>
  );
}

export default section6;
