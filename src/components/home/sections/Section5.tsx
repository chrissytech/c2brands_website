"use client";

import Button from "@/components/Button";
import { Header3, Header4, Header5, Paragraph1 } from "@/components/Text";
import Link from "next/link";
import React, { useState } from "react";
import AOS from "aos";


function Section5() {
  const [openedQuestionIndex, setOpenedQuestionIndex] = useState(null);

  const toggleParagraphVisibility = (index: any) => {
    setOpenedQuestionIndex(openedQuestionIndex === index ? null : index);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  // Array of FAQ items
  const faqs = [
    {
      id: 1,
      question: "Q. What services do you offer?",
      answer:
        "Chrissy provides a range of services, including brand strategy, marketing consulting, digital marketing strategy, and creative direction. Whether you need help building a brand from scratch or improving your current marketing efforts, Chrissy can tailor a solution to fit your needs.",
    },
    {
      id: 2,
      question: "Q. Who do you typically work with?",
      answer:
        "Chrissy works with small to medium-sized business owners, entrepreneurs, and marketing teams looking for expert guidance in brand development and strategic marketing. Her clients span a variety of industries, all seeking to enhance their brand presence and marketing effectiveness.",
    },
    {
      id: 3,
      question: "Q. How does the consultation process work?",
      answer:
        "The process begins with an initial consultation to understand your business goals, challenges, and needs. From there, Chrissy will provide recommendations and a tailored strategy that aligns with your objectives, offering ongoing support throughout the collaboration.",
    },
    {
      id: 4,
      question: "Q. Do you work with both startups and established businesses?",
      answer:
        "Yes! Chrissy has experience working with startups to build their brand identity from the ground up, as well as with established businesses looking to refine their branding and marketing strategies.",
    },
    {
      id: 5,
      question: "Q. What’s included in a branding strategy?",
      answer:
        "A branding strategy covers everything from defining your brand’s values, mission, and positioning, to visual identity and messaging. Chrissy ensures that every aspect of your brand aligns with your overall business goals and resonates with your target audience.",
    },
    {
      id: 6,
      question: "Q. How do I get started?",
      answer:
        "Simply reach out through the contact form or book a consultation directly. Chrissy will follow up to schedule an initial call where you can discuss your project needs and get started on the right path.",
    },
  ];
  return (
    <div>
      <div className=" container1 pt-[24px] xl:pt-[100px] text-p_black">
        {" "}
        <div
          className=" flex flex-col xl:gap-[24px] items-center w-full mb-[24px] xl:mb-[64px]"
          data-aos="fade-up"
        >
          <Header3>
            Frequently Asked <span className=" text-primary">Questions</span>{" "}
          </Header3>
          <Paragraph1 className=" max-w-[883px] text-center ">
            Everything you need to know about our products and services.
          </Paragraph1>
        </div>
        <div
          className="flex-row items-center justify-center py-4 xl:py-[37px] bg-bg_gray rounded-[24px] "
          data-aos="flip-up"
        >
          {/* Mapping over FAQ items */}
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`w-full px-4 xl:px-[37px] pt-4 xl:py-[21px] ${
                index !== faqs.length - 1
                  ? "border-b-4 border-[#E4E4E7]"
                  : "xl:-mb-6"
              }`}
            >
              <div
                className="flex items-start   justify-between cursor-pointer"
                onClick={() => toggleParagraphVisibility(faq.id)}
              >
                <Header5 className="text-[18px] w-[250px] xl:w-full font-medium text-primary-50">
                  {faq.question}
                </Header5>
                <button
                  className=" flex justify-center items-center h-4 w-4  cursor-pointer"
                  onClick={() => toggleParagraphVisibility(faq.id)}
                >
                  <img
                    src={
                      openedQuestionIndex === faq.id
                        ? "/icons/dash.svg"
                        : "/icons/plus.svg"
                    }
                    alt=""
                    className=""
                    style={{
                      transform:
                        openedQuestionIndex === faq.id
                          ? "rotate(0deg)" // Keep it static or adjust if necessary
                          : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
              </div>
              <p
                className={`text-[12px] xl:text-[14px]- md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[18px]  overflow-hidden  transition-all pb-4 pt-4 max-w-[90%] duration-300 ${
                  openedQuestionIndex === faq.id ? "max-h-[500px]" : "max-h-0"
                }`}
                style={{ opacity: openedQuestionIndex === faq.id ? "1" : "0" }}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section5;
