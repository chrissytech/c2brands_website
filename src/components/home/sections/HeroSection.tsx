import Button from '@/components/Button';
import { Header1, Paragraph2, Paragraph3 } from '@/components/Text';
import React from 'react'
import ElevatingBrands from './others/ElevatingBrands';

function HeroSection() {
  return (
    <div className="  ">
      <div className="py-[90px] bg-p_black pb-[150px]">
        <div className=" container1 grid grid-cols-2 gap-2 items-center ">
          {" "}
          <div>
            <Header1 className="text-white col-span-1 ">
              Empowering <span className="text-primary"> Brands</span> with
              Creatives Strategies that drives Results
            </Header1>
            <Paragraph3 className="mt-[16px] mb-[48px] text-white">
              I help businesses grow with tailored branding and marketing
              solutions that connect, inspire, and deliver.{" "}
            </Paragraph3>
            <div className="flex items-center gap-[32px]">
              <Button
                text="Let’s work together"
                //   onClick={handleClick} // onClick is passed from a client component
                additionalClasses="border-primary "
              />
              <Button
                text="Book a section"
                href="https://google.com"
                isLink={true}
                color="text-white"
                backgroundColor=" bg-p_black"
                border="border-2 border-white"
              />
            </div>
          </div>
          <img src="/images/hero_photo.svg" alt="" className="w-full " />
        </div>
      </div>
      <div className=" -mt-[42px] ">
        <ElevatingBrands />
      </div>
    </div>
  );
}

export default HeroSection