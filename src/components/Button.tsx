"use client";

import React from "react";
import Link from "next/link";
import localFont from "next/font/local";

const body_Font = localFont({
  src: "../app/fonts/ClashDisplay/fonts/ClashDisplay-Regular.woff",
});

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  color?: string;
  border?: string;
  backgroundColor?: string;
  isLink?: boolean;
  additionalClasses?: string;
  type?: any;
  disabled?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type,
  disabled,
  href,
  color = "text-white",
  border = "border",
  backgroundColor = "bg-primary",
  isLink = false,
  additionalClasses = "",
}) => {
  const commonClasses = `relative overflow-hidden group ${backgroundColor} ${color} ${border} ${body_Font.className} px-[24px] py-[16px] font-medium  text-[12px] sm:text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[18px] rounded-full cursor-pointer text-center ${additionalClasses}`;

  const hoverEffectClasses =
    "absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out";

  if (isLink && href) {
    return (
      <Link href={href} passHref className={commonClasses} onClick={onClick}>
        <p>
          <span className={hoverEffectClasses} aria-hidden="true"></span>
          <span className="relative z-10">{text}</span>
        </p>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={commonClasses}
      disabled={disabled}
    >
      <span className={hoverEffectClasses} aria-hidden="true"></span>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;
