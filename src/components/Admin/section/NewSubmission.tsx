"use client";

import {
  Header1,
  Header3,
  Header4,
  Header5,
  Paragraph1,
  Paragraph2,
  ParagraphLink1,
} from "@/components/Text";
import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase"; // Firestore setup
import { collection, getDocs, updateDoc, doc } from "firebase/firestore"; // Firestore functions
import AOS from "aos";


type Submission = {
  id: string;
  initials: string;
  name: string;
  firstName: string;
  secondName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  businessWebsite: string;
  numberOfEmployees: string;
  annualRevenue: string;
  businessSummary: string;
  marketingProblems: string;
  brandFixAttempt: string;
  brandDifference: string;
  whenToStart: string[];
  budget: string;
  qualities: string[];
  viewed: boolean;
  timestamp: string;
};

function NewSubmission() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "formSubmissions"));
        const submissionData: Submission[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          initials: doc.data().firstName[0] + doc.data().lastName[0], // Assuming you have firstName and lastName in your form
          name: `${doc.data().firstName} ${doc.data().lastName}`,
          firstName: doc.data().firstName,
          secondName: doc.data().lastName,
          email: doc.data().email,
          phoneNumber: doc.data().phoneNumber,
          businessName: doc.data().businessName,
          businessWebsite: doc.data().businessWebsite,
          numberOfEmployees: doc.data().numberOfEmployees,
          annualRevenue: doc.data().annualRevenue,
          businessSummary: doc.data().businessSummary,
          marketingProblems: doc.data().marketingProblems,
          brandFixAttempt: doc.data().brandFixAttempt,
          brandDifference: doc.data().brandDifference,
          whenToStart: doc.data().whenToStart,
          budget: doc.data().budget,
          qualities: doc.data().qualities,
          viewed: doc.data().viewed || false, // Retrieve 'viewed' field, defaulting to false
          timestamp: doc.data().timestamp
            ? doc.data().timestamp.toDate().toLocaleString()
            : "N/A", // Assuming timestamp is stored as Firestore timestamp
        }));
        setSubmissions(submissionData);
      } catch (error) {
        console.error("Error fetching submissions: ", error);
      } finally {
        setLoading(false); // Stop loading when data is fetched
      }
    };

    fetchSubmissions();
  }, []);

  const handleClick = async (submission: Submission) => {
    // Update the viewed status in Firestore
    const submissionDocRef = doc(
      db,
      "formSubmissions",
      submission.id.toString()
    ); // Assuming id is the Firestore document ID

    try {
      await updateDoc(submissionDocRef, { viewed: true }); // Update the viewed field
      console.log("Document updated successfully");
    } catch (error) {
      console.error("Error updating document: ", error);
    }

    // Set the submission as viewed
    const updatedSubmissions = submissions.map((sub) =>
      sub.id === submission.id ? { ...sub, viewed: true } : sub
    );
    setSubmissions(updatedSubmissions); // Update state with viewed submission
    setSelectedSubmission(submission);
  };

  const handleBack = () => {
    setSelectedSubmission(null);
  };

  // Predefined list of colors to cycle through
  const bgColors = ["bg-red-500", "bg-green-500", "bg-blue-600"];


    React.useEffect(() => {
      AOS.init({
        duration: 1000,
      });
    });

  return (
    <div className=" bg-bg_gray min-h-screen pb-[100px] text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[19px] 2xl:text-[20px]">
      <div className="container1 pt-[60px]  xl:pt-[124px] pb-[24px] ">
        <Header1 className="text-black  invisible xl:visible  ">
          Welcome back Chrissy,
        </Header1>{" "}
      </div>
      <div className="mx-4 xl:mx-0">
        <div className=" container1  bg-white py-[35px]  rounded-[15px] shadow-md">
          <div className="px-4- xl:px-[37px]">
            {selectedSubmission ? (
              // Render the detailed view if a submission is selected
              <div data-aos="zoom-in" className="">
                <div className=" flex  border-b pb-2 w-full  gap-4 items-center">
                  <button
                    onClick={handleBack}
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src="/icons/back1.svg"
                      alt=""
                      className=" w-[50px]- h-[25px] sm:h-[50px]"
                    />
                  </button>

                  <div className=" flex w-full-">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-[50px] h-[50px] flex items-center justify-center text-white rounded-full bg-primary -${
                          bgColors[
                            selectedSubmission.id.length % bgColors.length
                          ]
                        }`}
                      >
                        <span className="text-lg font-bold">
                          {selectedSubmission.initials}
                        </span>
                      </div>
                      <div>
                        <Header4 className="text-[23px] ">
                          {selectedSubmission.name}
                        </Header4>
                        <Paragraph2 className="text-sm -mt-3 font-semibold-">
                          {selectedSubmission.email}
                        </Paragraph2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" mt-[40px] space-y-[40px]">
                  {" "}
                  <div className=" px-[30px] py-[39px] bg-bg_gray rounded-[15px] space-y-[40px]">
                    <div className=" grid grid-cols-1 xl:grid-cols-2 items-center gap-[40px] ">
                      <div>
                        <ParagraphLink1 className="  text-cente font-bold ">
                          First Name
                        </ParagraphLink1>
                        <div className=" p-6 bg-white rounded-[12px]">
                          <p className=" ">{selectedSubmission.firstName}</p>
                        </div>
                      </div>
                      <div>
                        <ParagraphLink1 className="  text-cente font-bold ">
                          Last Name
                        </ParagraphLink1>
                        <div className=" p-6 bg-white rounded-[12px]">
                          <p className=" ">{selectedSubmission.secondName}</p>
                        </div>
                      </div>
                      <div>
                        <ParagraphLink1 className="  text-cente font-bold ">
                          E-mail address{" "}
                        </ParagraphLink1>
                        <div className=" p-6 bg-white rounded-[12px]">
                          <p className=" ">{selectedSubmission.email}</p>
                        </div>
                      </div>
                      <div>
                        <ParagraphLink1 className="  text-cente font-bold ">
                          Phone Number{" "}
                        </ParagraphLink1>
                        <div className=" p-6 bg-white rounded-[12px]">
                          <p className=" ">{selectedSubmission.phoneNumber}</p>
                        </div>
                      </div>
                      <div>
                        <ParagraphLink1 className="  text-cente font-bold ">
                          Business Name{" "}
                        </ParagraphLink1>
                        <div className=" p-6 bg-white rounded-[12px]">
                          <p className=" ">{selectedSubmission.businessName}</p>
                        </div>
                      </div>
                      <div>
                        <ParagraphLink1 className="  text-cente font-bold ">
                          Business Website{" "}
                        </ParagraphLink1>
                        <div className=" p-6 bg-white rounded-[12px]">
                          <p className=" ">
                            {selectedSubmission.businessWebsite}
                          </p>
                        </div>
                      </div>
                      <div>
                        <ParagraphLink1 className="  text-cente font-bold ">
                          Number of Employees{" "}
                        </ParagraphLink1>
                        <div className=" p-6 bg-white rounded-[12px]">
                          <p className=" ">
                            {selectedSubmission.numberOfEmployees}
                          </p>
                        </div>
                      </div>
                      <div>
                        <ParagraphLink1 className="  text-cente font-bold ">
                          Annual Revenue{" "}
                        </ParagraphLink1>
                        <div className=" p-6 bg-white rounded-[12px]">
                          <p className=" ">
                            {selectedSubmission.annualRevenue}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" flex w-full flex-col">
                      {" "}
                      <ParagraphLink1 className="  text-cente font-bold ">
                        We’ve found our best partners exhibit the following
                        qualities.Please check all that apply.{" "}
                      </ParagraphLink1>
                      <div className="flex w-full flex-col">
                        <div className="mt-[12px] flex flex-col gap-[16px]">
                          {selectedSubmission?.qualities.map(
                            (quality, index) => {
                              // Render specific text based on the value of `quality`
                              let displayText = "";

                              switch (quality) {
                                case "successful_business":
                                  displayText =
                                    "You have a successful business";
                                  break;
                                case "unfocused_marketing":
                                  displayText =
                                    "Your marketing message is unfocused";
                                  break;
                                case "ready_to_invest":
                                  displayText =
                                    "You're ready to invest in your business and take it to the next level";
                                  break;
                                case "open_to_ideas":
                                  displayText = "You're open to new ideas";
                                  break;
                                default:
                                  displayText = "Unknown quality"; // Fallback text if needed
                              }

                              return (
                                <div
                                  key={index}
                                  className="flex items-center gap-[13px]"
                                >
                                  <img src="/icons/marker.svg" alt="" />
                                  <ParagraphLink1 className="text-center font-bold-">
                                    {displayText}
                                  </ParagraphLink1>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className=" px-[30px] py-[39px] bg-bg_gray rounded-[15px] space-y-[40px]">
                    <div>
                      <ParagraphLink1 className="  text-cente font-bold ">
                        Summarize your business{" "}
                      </ParagraphLink1>
                      <div className=" p-6 bg-white rounded-[12px]">
                        <p className=" ">
                          {selectedSubmission.businessSummary}
                        </p>
                      </div>
                    </div>
                    <div>
                      <ParagraphLink1 className="  text-cente font-bold ">
                        What problems are you currently facing with your
                        marketing and branding?{" "}
                      </ParagraphLink1>
                      <div className=" p-6 bg-white rounded-[12px]">
                        <p className=" ">
                          {selectedSubmission.marketingProblems}
                        </p>
                      </div>
                    </div>
                    <div>
                      <ParagraphLink1 className="  text-cente font-bold ">
                        Have you tried to fix your brand before? If so,why
                        didn’t it work?{" "}
                      </ParagraphLink1>
                      <div className=" p-6 bg-white rounded-[12px]">
                        <p className=" ">
                          {selectedSubmission.brandFixAttempt}
                        </p>
                      </div>
                    </div>
                    <div>
                      <ParagraphLink1 className="  text-cente font-bold ">
                        What makes your business and brand different from others
                        and why should...{" "}
                      </ParagraphLink1>
                      <div className=" p-6 bg-white rounded-[12px]">
                        <p className=" ">
                          {selectedSubmission.brandDifference}
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full flex-col">
                      <ParagraphLink1 className="text-center- font-bold">
                        If accepted, how quickly do you want to get started?
                      </ParagraphLink1>

                      <div className="mt-[12px] flex flex-col gap-[16px]">
                        {selectedSubmission?.whenToStart.map(
                          (timeframe, index) => {
                            // Map the values to corresponding display texts
                            let displayText = "";

                            switch (timeframe) {
                              case "immediately":
                                displayText = "Immediately";
                                break;
                              case "couple_of_days":
                                displayText = "In a couple of days";
                                break;
                              case "this_week":
                                displayText = "This week";
                                break;
                              case "this_month":
                                displayText = "This month";
                                break;
                              case "this_year":
                                displayText = "This year";
                                break;
                              case "not_sure":
                                displayText = "Not sure";
                                break;
                              default:
                                displayText = "Unknown timeframe";
                            }

                            return (
                              <div
                                key={index}
                                className="flex items-center gap-[13px]"
                              >
                                <img src="/icons/marker.svg" alt="" />
                                <ParagraphLink1 className="text-center font-bold">
                                  {displayText}
                                </ParagraphLink1>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>

                    <div>
                      <ParagraphLink1 className="  text-cente font-bold ">
                        Estimated investment to fix your entire marketing and
                        branding strategy?{" "}
                      </ParagraphLink1>
                      <div className=" p-6 bg-white rounded-[12px]">
                        <p className=" ">{selectedSubmission.budget}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : (
              // Render the list of submissions if none is selected
              <div className="space-y-2 scrollable-div- overflow-y-auto- max-h-screen- ">
                <Header4>New Submissions</Header4>
                {submissions.map((submission, index) => (
                  <div
                    key={submission.id}
                    className={`flex items-start space-x-4 py-4 bg-white rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 ${
                      submission.viewed ? "text-gray-400" : "" // Change text color for viewed submissions
                    }`}
                    onClick={() => handleClick(submission)}
                  >
                    <div
                      className={`min-w-12 min-h-12 flex items-center justify-center text-white rounded-full ${
                        bgColors[index % bgColors.length]
                      }`}
                    >
                      <span className="text-lg font-bold">
                        {submission.initials}
                      </span>
                    </div>
                    <div className="flex-1 w-full overflow-hidden border-b pb-4">
                      <Paragraph1 className="text-lg font-semibold">
                        {submission.name}
                      </Paragraph1>

                      <Paragraph2 className=" text-sm truncate overflow-hidden whitespace-nowrap lg: max-w-[90%] -max-w-[300px]">
                        {submission.businessSummary}
                      </Paragraph2>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewSubmission;
