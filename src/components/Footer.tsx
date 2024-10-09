import React from "react";
import { Paragraph1, ParagraphLink1, ParagraphLink2 } from "./Text";
import Button from "./Button";
import Link from "next/link";

function Footer() {
  return (
    <div className="  sm:py-[100px]">
      <div className=" sm:container1   bg-p_black sm:rounded-[24px] ">
        <div className=" px-[24px] sm:px-[70px] py-[32px] sm:py-[80px] ">
          {/* desktop */}
          <div className="sm:flex hidden justify-between mb-[110px]">
            <div className="">
              {" "}
              <img src="/images/logodemo.svg" alt="chrissy" />
            </div>
            <div className=" flex ">
              {" "}
              <Link href="/">
                {" "}
                <ParagraphLink1 className=" text-[#ECECEC]  ">
                  Home{" "}
                </ParagraphLink1>
              </Link>
              <Link href="/">
                {" "}
                <ParagraphLink2 className=" text-[#ECECEC]  ">
                  Story{" "}
                </ParagraphLink2>
              </Link>
            </div>
          </div>

          {/* mobile  */}
          <div className=" mb-[24px] sm:mb-[110px]">
            <div className=" space-y-[24px] mb-[24px] ">
              {" "}
              <Link href="/">
                {" "}
                <ParagraphLink1 className=" text-[#ECECEC]  ">
                  Home{" "}
                </ParagraphLink1>
              </Link>
              <Link href="/">
                {" "}
                <ParagraphLink2 className=" text-[#ECECEC]  ">
                  Story{" "}
                </ParagraphLink2>
              </Link>
            </div>

            <div className="col-span-1 order-2 sm:order-1">
              {" "}
              <img src="/images/logodemo.svg" alt="chrissy" />
            </div>
          </div>

          <div className=" border-t pt-[24px] sm:pt-[32px] flex flex-wrap justify-between">
            <ParagraphLink2 className=" text-[#ECECEC] ">
              © 2024 Csquared Brands. All rights reserved.
            </ParagraphLink2>
            <div className="flex flex-wrap gap-[24px] items-center">
              <Link href="/">
                {" "}
                <ParagraphLink2 className=" text-[#ECECEC] underline ">
                  Privacy Policy
                </ParagraphLink2>
              </Link>

              <Link href="/">
                <ParagraphLink2 className=" text-[#ECECEC] underline">
                  Terms of Service{" "}
                </ParagraphLink2>
              </Link>

              <Link href="/">
                {" "}
                <ParagraphLink2 className=" text-[#ECECEC] underline">
                  Cookies Settings{" "}
                </ParagraphLink2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
