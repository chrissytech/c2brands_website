"use client"; // This tells Next.js it's a client-side component

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
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type,
  href,
  color = "text-white",
  border = "border",
  backgroundColor = "bg-primary",
  isLink = false,
  additionalClasses = "",
}) => {
  const commonClasses = `${backgroundColor} ${color} ${border} ${body_Font.className} px-[24px] py-[16px] font-medium text-[18px] rounded-full  cursor-pointer text-center ${additionalClasses}`;

  if (isLink && href) {
    return (
      <Link  href={href} passHref >
        <p className={commonClasses}>{text}</p>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={commonClasses}>
      {text}
    </button>
  );
};

export default Button;
