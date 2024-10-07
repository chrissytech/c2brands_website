"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import {  ParagraphLink1} from "../Text";
import Button from "../Button";

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
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] mb-6">
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
            className="w-full border rounded-lg p-2 text-[20px] "
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
            className="w-full border rounded-lg text-[20px] p-2"
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
            className="w-full border rounded-lg p-2 text-[20px] "
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
            country={"ng"}
            value={phone}
            onChange={(phone) => {
              setPhone(phone);
              formik.setFieldValue("phoneNumber", phone);
            }}
            inputStyle={{
              width: "100%",
              //   padding: "20px",
              height: "50px",
              //   borderRadius: "8px",
              //   borderColor: "#E5E7EB",
              fontSize: "20px", // Increase font size for larger text
            }}
            buttonStyle={{
              width: "50px", // Increase the width of the flag area
              fontSize: "20px", // Increase the size of the flag
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
            className="w-full border rounded-lg p-2 text-[20px]"
            placeholder="Enter your business name"
          />
          {formik.touched.businessName && formik.errors.businessName ? (
            <div className="text-red-500 ">{formik.errors.businessName}</div>
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
            className="w-full border rounded-lg p-2 text-[20px]"
            placeholder="Enter your business website"
          />
          {formik.touched.businessWebsite && formik.errors.businessWebsite ? (
            <div className="text-red-500 ">{formik.errors.businessWebsite}</div>
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
            className="w-full border rounded-lg p-2 text-[20px]"
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
            className="w-full border rounded-lg p-2 text-[20px] "
          >
            <option value="" label="Select annual revenue" />
            <option value="0-100K" label="0-100K" />
            <option value="100K-500K" label="100K-500K" />
            <option value="500K-1M" label="500K-1M" />
            <option value="1M+" label="1M+" />
          </select>
          {formik.touched.annualRevenue && formik.errors.annualRevenue ? (
            <div className="text-red-500 ">{formik.errors.annualRevenue}</div>
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
              className="form-checkbox h-5 w-5 text-orange-500"
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
              className="form-checkbox h-5 w-5 text-orange-500"
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
              className="form-checkbox h-5 w-5 text-orange-500"
            />
            <span className="ml-2 text-gray-700">
              <ParagraphLink1 className="  text-cente ">
                You're ready to invest in your business and take it to the next
                level{" "}
              </ParagraphLink1>
            </span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="qualities"
              value="open_to_ideas"
              onChange={formik.handleChange}
              className="form-checkbox h-5 w-5 text-orange-500"
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
      <div className="flex justify-center w-full">
        

        <Button text="Continue" additionalClasses=" w-[385px] border-primary" type="submit" />
      </div>
    </form>
  );
};

export default FormComponent;
