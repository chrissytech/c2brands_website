"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { ParagraphLink1 } from "../Text";
import Button from "../Button";
import AOS from "aos";
import React from "react";




const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  businessName: Yup.string().required("Business name is required"),
  businessWebsite: Yup.string().url("Invalid URL"),
  numberOfEmployees: Yup.string().required("Number of employees is required"),
  annualRevenue: Yup.string().required("Annual revenue is required"),
  qualities: Yup.array()
    .of(Yup.string())
    .min(1, "At least one option must be selected"),
});

const FormComponent = () => {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1); // State to track the current tab

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      businessName: "",
      businessWebsite: "",
      numberOfEmployees: "",
      annualRevenue: "",
      qualities: [],
      businessSummary: "",
      marketingProblems: "",
      brandFixAttempt: "",
      brandDifference: "",
      whenToStart: "",
      budget: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data", values);
    },
  });

   React.useEffect(() => {
     AOS.init({
       duration: 1000,
     });
   });

  return (
    <form onSubmit={formik.handleSubmit} className="">
      {step === 1 && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[32px] mb-6 text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]">
            <div>
              <label className="block text-gray-700">
                <ParagraphLink1 className="  text-cente font-bold ">
                  First Name
                </ParagraphLink1>
              </label>
              <input
                type="text"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                className="w-full border rounded-[10px] p-2  "
                placeholder="Enter your first name"
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500 ">{formik.errors.firstName}</div>
              ) : null}
            </div>

            <div>
              <label className="block text-gray-700">
                {" "}
                <ParagraphLink1 className="  text-cente font-bold ">
                  Last Name
                </ParagraphLink1>
              </label>
              <input
                type="text"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                className="w-full border rounded-[10px]  p-2"
                placeholder="Enter your last name"
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500 ">{formik.errors.lastName}</div>
              ) : null}
            </div>

            <div>
              <label className="block text-gray-700">
                {" "}
                <ParagraphLink1 className="  text-cente font-bold ">
                  Email Address
                </ParagraphLink1>
              </label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full border rounded-[10px] p-2  "
                placeholder="Enter your email address"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 ">{formik.errors.email}</div>
              ) : null}
            </div>

            <div>
              <label className="block text-gray-700">
                <ParagraphLink1 className="  text-cente font-bold ">
                  {" "}
                  Phone Number{" "}
                </ParagraphLink1>
              </label>

              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => {
                  setPhone(phone);
                  formik.setFieldValue("phoneNumber", phone);
                }}
                inputStyle={{
                  width: "100%",
                  //   padding: "20px",
                  height: "46px",
                  borderRadius: "10px",
                  // padding: "2px",
                  //   borderColor: "#E5E7EB",
                  // fontSize: "16px", // Increase font size for larger text
                }}
                buttonStyle={{
                  width: "0px", // Increase the width of the flag area
                  borderRadius: "10px",
                  backgroundColor: "white",
                  borderColor: "white",
                  border: "0px",
                  borderWidth: "0px",
                  margin: "4px",
                }}
                containerClass="phone-input-container"
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-500 ">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>

            <div>
              <label className="block text-gray-700">
                <ParagraphLink1 className="  text-cente font-bold ">
                  {" "}
                  Business Name{" "}
                </ParagraphLink1>
              </label>
              <input
                type="text"
                name="businessName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.businessName}
                className="w-full border rounded-[10px] p-2 "
                placeholder="Enter your business name"
              />
              {formik.touched.businessName && formik.errors.businessName ? (
                <div className="text-red-500 ">
                  {formik.errors.businessName}
                </div>
              ) : null}
            </div>

            <div>
              <label className="block text-gray-700">
                <ParagraphLink1 className="  text-cente font-bold ">
                  {" "}
                  Business Website{" "}
                </ParagraphLink1>
              </label>
              <input
                type="url"
                name="businessWebsite"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.businessWebsite}
                className="w-full border rounded-[10px] p-2 "
                placeholder="Enter your business website"
              />
              {formik.touched.businessWebsite &&
              formik.errors.businessWebsite ? (
                <div className="text-red-500 ">
                  {formik.errors.businessWebsite}
                </div>
              ) : null}
            </div>

            <div>
              <label className="block text-gray-700">
                <ParagraphLink1 className="  text-cente font-bold ">
                  {" "}
                  Number of Employees{" "}
                </ParagraphLink1>
              </label>
              <select
                name="numberOfEmployees"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.numberOfEmployees}
                className="w-full border rounded-[10px] p-2  "
              >
                <option value="" label="Select no of employees" />
                <option value="1-10" label="1-10" />
                <option value="11-50" label="11-50" />
                <option value="51-200" label="51-200" />
                <option value="201-500" label="201-500" />
                <option value="500+" label="500+" />
              </select>
              {formik.touched.numberOfEmployees &&
              formik.errors.numberOfEmployees ? (
                <div className="text-red-500 ">
                  {formik.errors.numberOfEmployees}
                </div>
              ) : null}
            </div>

            <div>
              <label className="block text-gray-700">
                <ParagraphLink1 className="  text-cente font-bold ">
                  {" "}
                  Annual Revenue{" "}
                </ParagraphLink1>
              </label>
              <select
                name="annualRevenue"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.annualRevenue}
                className="w-full border rounded-[10px] p-2  "
              >
                <option value="" label="Select annual revenue" />
                <option value="0-100K" label="0-100K" />
                <option value="100K-500K" label="100K-500K" />
                <option value="500K-1M" label="500K-1M" />
                <option value="1M+" label="1M+" />
              </select>
              {formik.touched.annualRevenue && formik.errors.annualRevenue ? (
                <div className="text-red-500 ">
                  {formik.errors.annualRevenue}
                </div>
              ) : null}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-700">
              <ParagraphLink1 className="  text-cente font-bold ">
                {" "}
                We've found our best partners exhibit the following qualities.
                Please check all that apply.*
              </ParagraphLink1>
            </p>
            <div className="flex flex-col space-y-3">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="qualities"
                  value="successful_business"
                  onChange={formik.handleChange}
                  className="form-checkbox min-h-5 min-w-5 text-orange-500 appearance-none checked:bg-primary checked:border-transparent focus:outline-none border border-primary rounded checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center"
                />
                <span className="ml-2 text-gray-700">
                  <ParagraphLink1 className="  text-cente ">
                    {" "}
                    You have a successful business
                  </ParagraphLink1>
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="qualities"
                  value="unfocused_marketing"
                  onChange={formik.handleChange}
                  className="form-checkbox min-h-5 min-w-5 text-orange-500 appearance-none checked:bg-primary checked:border-transparent focus:outline-none border border-primary rounded checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center"
                />
                <span className="ml-2 text-gray-700">
                  <ParagraphLink1 className="  text-cente ">
                    {" "}
                    Your marketing message is unfocused
                  </ParagraphLink1>
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="qualities"
                  value="ready_to_invest"
                  onChange={formik.handleChange}
                  className="form-checkbox min-h-5 min-w-5 text-orange-500 appearance-none checked:bg-primary checked:border-transparent focus:outline-none border border-primary rounded checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center"
                />
                <span className="ml-2 text-gray-700">
                  <ParagraphLink1 className="  text-cente ">
                    You're ready to invest in your business and take it to the
                    next level{" "}
                  </ParagraphLink1>
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="qualities"
                  value="open_to_ideas"
                  onChange={formik.handleChange}
                  className="form-checkbox min-h-5 min-w-5 text-orange-500 appearance-none checked:bg-primary checked:border-transparent focus:outline-none border border-primary rounded checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center"
                />
                <span className="ml-2 text-gray-700">
                  {" "}
                  <ParagraphLink1 className="  text-cente ">
                    {" "}
                    You're open to new ideas
                  </ParagraphLink1>
                </span>
              </label>
            </div>
            {formik.touched.qualities && formik.errors.qualities ? (
              <div className="text-red-500 ">{formik.errors.qualities}</div>
            ) : null}
          </div>

          <div className="flex justify-center w-full sm:mt-[80px]">
            <Button
              text="Continue"
              type="button"
              additionalClasses=" w-full sm:w-[385px] border-primary-"
              onClick={() => setStep(2)} // Move to the next step
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div
          data-aos="flip-up"
          className=" flex flex-col gap-[24px] sm:gap-[32px]"
        >
          <div>
            <label className="block text-gray-700">
              <ParagraphLink1 className="  text-cente font-bold ">
                Summarize your business{" "}
              </ParagraphLink1>
            </label>
            <textarea
              name="businessSummary"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.businessSummary}
              className="w-full border rounded-[10px] p-2 h-[169px] "
            />
            {formik.touched.businessSummary && formik.errors.businessSummary ? (
              <div className="text-red-500 ">
                {formik.errors.businessSummary}
              </div>
            ) : null}
          </div>
          {/* problems in org */}
          <div>
            <label className="block text-gray-700">
              <ParagraphLink1 className="  text-cente font-bold ">
                What problems are you currently facing with your marketing and
                branding?{" "}
              </ParagraphLink1>
            </label>
            <textarea
              name="marketingProblems"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.marketingProblems}
              className="w-full border rounded-[10px] p-2 h-[169px] "
            />
            {formik.touched.marketingProblems &&
            formik.errors.businessSummary ? (
              <div className="text-red-500 ">
                {formik.errors.marketingProblems}
              </div>
            ) : null}
          </div>{" "}
          {/* try to fix */}
          <div>
            <label className="block text-gray-700">
              <ParagraphLink1 className="  text-cente font-bold ">
                Have you tried to fix your brand before? If so, why didn't it
                work?{" "}
              </ParagraphLink1>
            </label>
            <textarea
              name="brandFixAttempt"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brandFixAttempt}
              className="w-full border rounded-[10px] p-2 h-[169px] "
            />
            {formik.touched.brandFixAttempt && formik.errors.brandFixAttempt ? (
              <div className="text-red-500 ">
                {formik.errors.brandFixAttempt}
              </div>
            ) : null}
          </div>
          {/* what makes your business and brand diffent from others */}
          <div>
            <label className="block text-gray-700">
              <ParagraphLink1 className="  text-cente font-bold ">
                What makes your business and brand different from others and why
                should ...{" "}
              </ParagraphLink1>
            </label>
            <textarea
              name="brandDifference"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brandDifference}
              className="w-full border rounded-[10px] p-2 h-[169px] "
            />
            {formik.touched.brandDifference && formik.errors.brandDifference ? (
              <div className="text-red-500 ">
                {formik.errors.brandDifference}
              </div>
            ) : null}
          </div>
          {/* if accepted how quickly do you want to get started */}
          <div>
            <div className="">
              <p className="text-gray-700">
                <ParagraphLink1 className="  text-cente font-bold ">
                  {" "}
                  If accepted, how quickly do you want to get started?
                </ParagraphLink1>
              </p>
              <div className="flex flex-col space-y-3">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="qualities"
                    value="immediately"
                    onChange={formik.handleChange}
                    className="form-checkbox min-h-5 min-w-5 text-orange-500 appearance-none checked:bg-primary checked:border-transparent focus:outline-none border border-primary rounded checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center"
                  />
                  <span className="ml-2 text-gray-700">
                    <ParagraphLink1 className="  text-cente ">
                      {" "}
                      Immediately{" "}
                    </ParagraphLink1>
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="qualities"
                    value="couple_of_days"
                    onChange={formik.handleChange}
                    className="form-checkbox min-h-5 min-w-5 text-orange-500 appearance-none checked:bg-primary checked:border-transparent focus:outline-none border border-primary rounded checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center"
                  />
                  <span className="ml-2 text-gray-700">
                    <ParagraphLink1 className="  text-cente ">
                      {" "}
                      In couple of days{" "}
                    </ParagraphLink1>
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="qualities"
                    value="this_week"
                    onChange={formik.handleChange}
                    className="form-checkbox min-h-5 min-w-5 text-orange-500 appearance-none checked:bg-primary checked:border-transparent focus:outline-none border border-primary rounded checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center"
                  />
                  <span className="ml-2 text-gray-700">
                    <ParagraphLink1 className="  text-cente ">
                      This Week{" "}
                    </ParagraphLink1>
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="qualities"
                    value="this_month"
                    onChange={formik.handleChange}
                    className="form-checkbox min-h-5 min-w-5 text-orange-500 appearance-none checked:bg-primary checked:border-transparent focus:outline-none border border-primary rounded checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center"
                  />
                  <span className="ml-2 text-gray-700">
                    {" "}
                    <ParagraphLink1 className="  text-cente ">
                      {" "}
                      This Month{" "}
                    </ParagraphLink1>
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="qualities"
                    value="this_year"
                    onChange={formik.handleChange}
                    className="form-checkbox min-h-5 min-w-5 text-orange-500 appearance-none checked:bg-primary checked:border-transparent focus:outline-none border border-primary rounded checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center"
                  />
                  <span className="ml-2 text-gray-700">
                    {" "}
                    <ParagraphLink1 className="  text-cente ">
                      {" "}
                      This year{" "}
                    </ParagraphLink1>
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="qualities"
                    value="not_sure"
                    onChange={formik.handleChange}
                    className="form-checkbox min-h-5 min-w-5 text-orange-500 appearance-none checked:bg-primary checked:border-transparent focus:outline-none border border-primary rounded checked:after:content-['✓'] checked:after:text-white checked:after:text-xs checked:after:flex checked:after:justify-center"
                  />
                  <span className="ml-2 text-gray-700">
                    {" "}
                    <ParagraphLink1 className="  text-cente ">
                      {" "}
                      Not sure{" "}
                    </ParagraphLink1>
                  </span>
                </label>
              </div>
              {formik.touched.qualities && formik.errors.qualities ? (
                <div className="text-red-500 ">{formik.errors.qualities}</div>
              ) : null}
            </div>{" "}
          </div>
          <div>
            <label className="block text-gray-700">
              <ParagraphLink1 className="  text-cente font-bold ">
                Estimated investment to fix your entire marketing and branding
                strategy?{" "}
              </ParagraphLink1>
            </label>
            <input
              type="text"
              name="budget"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.budget}
              className="w-full border rounded-[10px] p-2  "
            />
            {formik.touched.budget && formik.errors.budget ? (
              <div className="text-red-500 ">{formik.errors.budget}</div>
            ) : null}
          </div>
          <div className="flex justify-center w-full sm:mt-[80px] flex-col  sm:flex-row gap-[24px] sm:gap-[48px]">
            <Button
              text="Back"
              type="button"
              backgroundColor="bg-bg_gray"
              additionalClasses=" w-full sm:w-[385px] border-primary-  text-black hover:text-white "
              onClick={() => setStep(1)} // Move back to the previous step
            />
            <Button
              text="Submit"
              type="submit"
              additionalClasses=" w-full sm:w-[385px] border-primary-"
            />
          </div>
        </div>
      )}
    </form>
  );
};

export default FormComponent;
