import { z } from "zod";

export const ContactFormSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
