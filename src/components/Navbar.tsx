"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { Paragraph2, ParagraphLink1, ParagraphLink2 } from "./Text";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={
        pathname === "/apply"
          ? "bg-bg_gray  py-[8px] "
          : " bg-white py-[8px] fixed flex w-full z-20"
      }
    >
      <div className="  w-full">
        <div className=" container1 flex justify-between w-full items-center">
          <img src="/images/logodemo.svg" alt="" />
          <div className="  gap-[48px] items-center hidden lg:flex">
            <Link href="/">
              <ParagraphLink1
                className={pathname === "/" ? "text-primary font-bold " : " "}
              >
                Home
              </ParagraphLink1>
            </Link>
            <Link href="/story">
              {" "}
              <ParagraphLink1
                className={
                  pathname === "/story" ? "text-primary font-bold " : "  "
                }
              >
                Story
              </ParagraphLink1>
            </Link>
          </div>
          <Button
            text="Apply"
            href="/apply"
            isLink={true}
            additionalClasses=" border-0  min-w-[152px] hidden lg:block"
          />{" "}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <Image
                height={2}
                width={25}
                src={menuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
                alt="menu"
                className=""
              />
            </button>
          </div>
        </div>

        {/* mobile dropdown */}
        {menuOpen && (
          <div className="p-[24px] flex flex-col justify-center items-center">
            <div className=" container1 flex flex-col w-full space-y-[24px] justify-between items-center">
              <Link href="/">
                <ParagraphLink1
                  className={pathname === "/" ? "text-primary font-bold " : " "}
                >
                  Home
                </ParagraphLink1>
              </Link>
              <Link href="/story">
                {" "}
                <ParagraphLink1
                  className={
                    pathname === "/story" ? "text-primary font-bold " : "  "
                  }
                >
                  Story
                </ParagraphLink1>
              </Link>
              <Button
                text="Apply"
                href="/apply"
                isLink={true}
                additionalClasses=" border-white  sm:min-w-[152px] min-w-full "
              />{" "}
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
