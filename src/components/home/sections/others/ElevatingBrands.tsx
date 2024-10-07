import { Header2 } from "@/components/Text";
import React from "react";

function ElevatingBrands() {
  const brands = Array(300).fill("Elevating Brands");

  return (
    <div
      className=" py-[20px] bg-bg_gray text-p_black"
      style={{ transform: "rotate(-2deg)" }}
    >
      <div className="slider-container3 overflow-hidden whitespace-nowrap">
        <div className="slider-content3 flex gap-[22px] animate-slider3">
          {brands.map((brand, index) => (
            <React.Fragment key={index}>
              <Header2>{brand}</Header2>
              <img src="/icons/circle_dot.svg" alt="" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ElevatingBrands;
