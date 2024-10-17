"use client";

import React from "react";
import { Header1Plus, Paragraph1, Paragraph3, ParagraphLink1 } from "../Text";
import Section6 from "../home/sections/Section6";
import AOS from "aos";

function Overview() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  
  return (
    <div className=" pt-[10px] bg-bg_gray">
      <div data-aos="flip-right" className=" container1  ">
        <div className=" relative overflow-hidden ">
          <div className=" flex flex-col bg-primary sm:gap-[20px] px-4 sm:p-[65px] py-12 sm:py-0- rounded-t-[24px] w-full sm:text-center text-white ">
            {" "}
            <Header1Plus>Privacy Policy</Header1Plus>
            <Paragraph3>
              At Chrissy’s Branding & Marketing Consulting, we are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy outlines how we collect, use, and
              safeguard your data when you visit our website or engage with our
              services.
            </Paragraph3>
          </div>
          <div className=" absolute sm:-bottom-[200px] -bottom-[60px] overflow-hidden  flex w-full  ">
            <img
              className=" min-w-full"
              src="/images/white_bgR.svg"
              alt="privacy"
            />
          </div>
        </div>

        <div className=" py-4 sm:py-[50px] rounded-b-[24px]  text-p_black z-[10] bg-white px-4 sm:px-[65px] space-y-[18px] sm:space-y-[32px]">
          <div>
            <ParagraphLink1 className=" font-bold text-primary">
              Information We Collect{" "}
            </ParagraphLink1>
            <Paragraph1>
              We may collect the following types of personal information from
              users:
              <br />
              Personal Information: Name, email address, phone number, and other
              contact details provided through forms or consultations.
              <br />
              Usage Data: Information about how you interact with our website,
              including IP address, browser type, and pages visited.
              <br />
              Cookies: We use cookies to enhance your browsing experience and
              track website analytics. You can control cookie settings through
              your browser.
            </Paragraph1>
          </div>
          <div>
            <ParagraphLink1 className=" font-bold text-primary">
              How We Use Your Information
            </ParagraphLink1>
            <Paragraph1>
              The information we collect is used for:
              <br />
              Providing Services: To respond to inquiries, provide
              consultations, and deliver the services you request.
              <br />
              Improving User Experience: To enhance our website and services
              based on user behavior and feedback.
              <br />
              Marketing Communication: With your consent, we may send you
              promotional emails about our services, news, and updates.
            </Paragraph1>
          </div>

          <div>
            <ParagraphLink1 className=" font-bold text-primary">
              How We Protect Your Information{" "}
            </ParagraphLink1>
            <Paragraph1>
              We take appropriate security measures to protect your personal
              data from unauthorized access, disclosure, or loss. While we
              strive to use commercially acceptable means to safeguard your
              information, no method of transmission over the Internet is 100%
              secure.
            </Paragraph1>{" "}
          </div>
          <div>
            <ParagraphLink1 className=" font-bold text-primary">
              Sharing Your Information{" "}
            </ParagraphLink1>
            <Paragraph1>
              We do not sell or share your personal information with third
              parties, except in the following cases:
              <br />
              Service Providers: We may share information with trusted
              third-party vendors who assist us in operating our website or
              delivering our services.
              <br />
              Legal Requirements: We may disclose your information if required
              by law or to protect our legal rights.
            </Paragraph1>{" "}
          </div>
          <div>
            <ParagraphLink1 className=" font-bold text-primary">
              Your Rights{" "}
            </ParagraphLink1>
            <Paragraph1>
              You have the right to:
              <br />
              Access, update, or delete the personal information we hold about
              you.
              <br />
              Opt-out of marketing communications at any time by following the
              unsubscribe link in our emails or contacting us directly.
              <br />
              Disable cookies through your browser settings.
            </Paragraph1>{" "}
          </div>
          <div>
            <ParagraphLink1 className=" font-bold text-primary">
              Third-Party Links{" "}
            </ParagraphLink1>
            <Paragraph1>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites and
              encourage you to review their privacy policies.
            </Paragraph1>{" "}
          </div>
          <div>
            <ParagraphLink1 className=" font-bold text-primary">
              Changes to This Privacy Policy{" "}
            </ParagraphLink1>
            <Paragraph1>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with the updated effective date. We
              encourage you to review this page periodically.
            </Paragraph1>
          </div>
        </div>
        <Section6 />
      </div>
    </div>
  );
}

export default Overview;
