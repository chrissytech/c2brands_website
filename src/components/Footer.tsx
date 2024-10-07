import React from "react";
import { Paragraph1, ParagraphLink1, ParagraphLink2 } from "./Text";
import Button from "./Button";
import Link from "next/link";

function Footer() {
  return (
    <div className="py-[100px]">
      <div className=" container1   bg-p_black rounded-[24px] ">
        <div className="  px-[70px] py-[80px] ">
          <div className="flex justify-between mb-[110px]">
            <img src="/images/logodemo.svg" alt="chrissy" />
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

          <div className=" border-t pt-[32px] flex justify-between">
            <ParagraphLink2 className=" text-[#ECECEC] ">
              © 2024 Csquared Brands. All rights reserved.
            </ParagraphLink2>
            <div className="flex gap-[24px] items-center">
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
