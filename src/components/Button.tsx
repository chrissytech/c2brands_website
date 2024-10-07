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
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  href,
  color = "text-white",
  border = "border",
  backgroundColor = "bg-primary",
  isLink = false,
  additionalClasses = "",
}) => {
  const commonClasses = `${backgroundColor} ${color} ${border} ${body_Font.className} px-[24px] py-[16px] font-medium text-[18px] rounded-full w-fit cursor-pointer ${additionalClasses}`;

  if (isLink && href) {
    return (
      <Link  href={href} passHref>
        <p className={commonClasses}>{text}</p>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={commonClasses}>
      {text}
    </button>
  );
};

export default Button;
