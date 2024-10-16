import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

admin.initializeApp();

// Configure Nodemailer (using Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
});

// Cloud Function to send email on form submission
export const sendEmailOnFormSubmit = functions.firestore
  .document("formSubmissions/{docId}")
  .onCreate((snap) => {
    const data = snap.data();
    const mailOptions = {
      from: '"C2 Brands" chrissycarpenterprojects@gmail.com', // Name + Email
      to: "chrissycarpenterprojects@gmail.com",
      subject: `New Form Submission from ${data.firstName} ${data.lastName}`,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #4CAF50; text-align: center;">New Form Submission</h2>
      <p style="font-size: 16px;">A new form submission has been received from <strong>${
        data.firstName
      } ${data.lastName}</strong>.</p>

      <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
        <tr style="background-color: #f0f0f0;">
          <td style="padding: 8px; font-weight: bold;">Name</td>
          <td style="padding: 8px;">${data.firstName} ${data.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Email</td>
          <td style="padding: 8px;">${data.email}</td>
        </tr>
        <tr style="background-color: #f0f0f0;">
          <td style="padding: 8px; font-weight: bold;">Phone</td>
          <td style="padding: 8px;">${data.phoneNumber}</td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Business</td>
          <td style="padding: 8px;">${data.businessName}</td>
        </tr>
        <tr style="background-color: #f0f0f0;">
          <td style="padding: 8px; font-weight: bold;">Website</td>
          <td style="padding: 8px;"><a href="${
            data.businessWebsite
          }" target="_blank">${data.businessWebsite}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; font-weight: bold;">Employees</td>
          <td style="padding: 8px;">${data.numberOfEmployees}</td>
        </tr>
        <tr style="background-color: #f0f0f0;">
          <td style="padding: 8px; font-weight: bold;">Revenue</td>
          <td style="padding: 8px;">${data.annualRevenue}</td>
        </tr>
      </table>

      <h3 style="margin-top: 30px;">Summary</h3>
      <p>${data.businessSummary}</p>

      <h3 style="margin-top: 20px;">Marketing Problems</h3>
      <p>${data.marketingProblems}</p>

      <h3 style="margin-top: 20px;">Brand Fix Attempt</h3>
      <p>${data.brandFixAttempt}</p>

      <h3 style="margin-top: 20px;">Brand Difference</h3>
      <p>${data.brandDifference}</p>

      <h3 style="margin-top: 20px;">When to Start</h3>
      <p>${data.whenToStart.join(", ")}</p>

      <h3 style="margin-top: 20px;">Budget</h3>
      <p>${data.budget}</p>

      <p style="text-align: center; margin-top: 30px;">Thank you!</p>
    </div>
  `,
    };

    // Send the email
    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  });
