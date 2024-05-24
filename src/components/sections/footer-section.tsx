"use client";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "@/components/magic-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { socialMedia } from "@/data";
import { useDialog } from "@/hooks/use-dialog";
import Image from "next/image";
import ContactForm from "../contact-form";

const FooterSection = () => {
  const { isOpen, setOpen } = useDialog();
  return (
    <footer className="w-full lg:pt-20 pb-5" id="contact">
      {/* background grid */}

      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              Contact Me
              <FaLocationArrow className="ml-2 size-4" />
            </DialogTitle>
            <DialogDescription>
              I am always open to new opportunities and would love to hear from
              you!
            </DialogDescription>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          height={0}
          width={0}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <MagicButton
          title="Let's get in touch"
          icon={<FaLocationArrow />}
          position="right"
          handleClick={() => setOpen(true)}
        />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-y-3">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Bakate BA
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              onClick={() => window.open(info.link, "_blank")}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={info.img}
                alt="icons"
                width={0}
                height={0}
                className="w-5 h-5"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
