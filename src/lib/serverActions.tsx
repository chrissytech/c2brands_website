// src/lib/serverActions.ts

"use server";
import { sendMail, compileWelcomeTemplate } from "@/lib/mail";

export const sendEmail = async () => {
  await sendMail({
    to: "chrissycarpenterprojects@gmail.com",
    name: "Chrissy",
    subject: "New client at CSquared Brands,",
    body: compileWelcomeTemplate(
      "Chrissy",
      "https://c2brands-website.vercel.app/chrissy-only/dashboard"
    ),
  });
};
