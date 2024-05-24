"use server";

import { sendEmail } from "@/lib/email";
import { ContactFormSchema, ContactFormValues } from "@/types";

export const contactAction = async (formData: ContactFormValues) => {
  const validation = await ContactFormSchema.safeParse(formData);

  if (!validation.success) {
    return {
      status: "error",
      message: "Please, fix the errors in the form and try again",
    } as const;
  }

  const { email, username } = validation.data;

  const usernameCapitalized =
    username.charAt(0).toUpperCase() + username.slice(1);

  const text = "You have a new contact form submission";
  const html = `
  <div>
  <h1>New Contact Form Submission</h1>
  <p>Name: ${usernameCapitalized}</p>
  <p>Email: ${email}</p>
  </div>
  `;

  const response = await sendEmail({
    to: "bakateba@gmail.com",
    subject: "New Contact Form Submission",
    text,
    html,
  });

  if (response.status === "success") {
    return {
      status: "success",
      message: `${usernameCapitalized}, I've received your message and I'll get back to you as soon as possible!`,
    } as const;
  } else {
    return {
      status: "error",
      error: response.error,
    } as const;
  }
};
