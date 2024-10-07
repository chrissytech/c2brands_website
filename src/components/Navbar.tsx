import Link from "next/link";
import React from "react";
import Button from "./Button";
import { Paragraph2, ParagraphLink1, ParagraphLink2 } from "./Text";

function Navbar() {
  return (
    <div className=" bg-white py-[25px]">
      <div className=" container1 flex justify-between items-center">
        <img src="/images/logodemo.svg" alt="" />
        <div className=" flex gap-[48px] items-center">
          <Link href="/">
            <ParagraphLink1 className="font-bold text-primary">Home</ParagraphLink1>
          </Link>
          <Link href="/">
            {" "}
            <ParagraphLink2 className="">Story</ParagraphLink2>
          </Link>
        </div>
        <Button
          text="Apply"
          //   onClick={handleClick} // onClick is passed from a client component
          additionalClasses=" border-white  min-w-[152px]"
        />{" "}
      </div>
    </div>
  );
}

export default Navbar;
