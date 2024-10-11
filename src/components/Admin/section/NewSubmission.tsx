"use client";

import {
  Header1,
  Header3,
  Header4,
  Paragraph1,
  Paragraph2,
} from "@/components/Text";
import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase"; // Firestore setup
import { collection, getDocs, updateDoc, doc } from "firebase/firestore"; // Firestore functions

type Submission = {
  id: string;
  initials: string;
  name: string;
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

   useEffect(() => {
     const fetchSubmissions = async () => {
       try {
         const querySnapshot = await getDocs(collection(db, "formSubmissions"));
         const submissionData: Submission[] = querySnapshot.docs.map((doc) => ({
           id: doc.id,
           initials: doc.data().firstName[0] + doc.data().lastName[0], // Assuming you have firstName and lastName in your form
           name: `${doc.data().firstName} ${doc.data().lastName}`,
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

  return (
    <div className=" bg-bg_gray pb-[100px]">
      <div className="container1 pt-4 xl:pt-[124px] pb-[24px] ">
        <Header1 className="text-black  ">Welcome back Chrissy,</Header1>{" "}
      </div>
      <div className=" container1 bg-white py-[35px]  rounded-[15px] shadow-md">
        <div className="px-[37px]">
          {selectedSubmission ? (
            // Render the detailed view if a submission is selected
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <button onClick={handleBack} className="mb-4 text-blue-500">
                Back
              </button>
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center text-white rounded-full ${
                    bgColors[parseInt(selectedSubmission.id) % bgColors.length]
                  }`}
                >
                  <span className="text-lg font-bold">
                    {selectedSubmission.initials}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">
                  {selectedSubmission.name}
                </h3>
              </div>
              <p className="text-gray-500">Email: {selectedSubmission.email}</p>
              <p className="text-gray-500">
                Phone: {selectedSubmission.phoneNumber}
              </p>
              <p className="text-gray-500">
                Business Name: {selectedSubmission.businessName}
              </p>
              <p className="text-gray-500">
                Business Website: {selectedSubmission.businessWebsite}
              </p>
              <p className="text-gray-500">
                Number of Employees: {selectedSubmission.numberOfEmployees}
              </p>
              <p className="text-gray-500">
                Annual Revenue: {selectedSubmission.annualRevenue}
              </p>
            </div>
          ) : (
            // Render the list of submissions if none is selected
            <div className="space-y-2 scrollable-div- overflow-y-auto- max-h-screen- ">
              <Header4>New Submissions</Header4>
              {submissions.map((submission, index) => (
                <div
                  key={submission.id}
                  className={`flex items-center space-x-4 py-4 bg-white rounded-lg cursor-pointer ${
                    submission.viewed ? "text-gray-400" : "" // Change text color for viewed submissions
                  }`}
                  onClick={() => handleClick(submission)}
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center text-white rounded-full ${
                      bgColors[index % bgColors.length]
                    }`}
                  >
                    <span className="text-lg font-bold">
                      {submission.initials}
                    </span>
                  </div>
                  <div className="flex-1 border-b pb-4">
                    <Paragraph1 className="text-lg font-semibold">
                      {submission.name}
                    </Paragraph1>

                    <Paragraph2 className=" text-sm">
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
  );
}

export default NewSubmission;
