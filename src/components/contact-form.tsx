"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { contactAction } from "@/actions/contact.actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useDialog } from "@/hooks/use-dialog";
import { cn } from "@/lib/utils";
import { ContactFormSchema, ContactFormValues } from "@/types";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ContactForm = () => {
  const { setOpen } = useDialog();
  const [isPending, startTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      username: "bakate",
      email: "email@email.com",
    },

    mode: "onBlur",
  });

  const handleSubmission = (data: ContactFormValues) => {
    startTransition(async () => {
      const res = await contactAction(data);
      if (res.status === "error") {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      setOpen(false);
    });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmission)}
        className="mx-auto min-w-[320px] max-w-md"
      >
        <fieldset className="space-y-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>username</FormLabel>
                <FormControl>
                  <Input
                    className="lowercase"
                    placeholder={"username"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{"Email"}</FormLabel>
                <FormControl>
                  <Input
                    className="lowercase"
                    placeholder={"email"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        <div className="flex items-center justify-end gap-2 pt-6">
          <Button
            type="button"
            variant={"secondary"}
            disabled={isPending}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isPending}
            className={cn(isPending && "opacity-50 cursor-not-allowed")}
          >
            Submit{isPending ? "ting" : ""}
            {isPending && <Loader2 className="ml-2 size-4" />}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
