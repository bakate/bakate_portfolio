"use client";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";

import animationData from "@/data/confetti.json";
import { useTheme } from "next-themes";
import Image from "next/image";
import MagicButton from "../magic-button";
import { BackgroundGradientAnimation } from "./gradient-background";
import GridGlobe from "./grid-globe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
}) => {
  const { theme } = useTheme();
  const stackList = [
    "Angular",
    "Typescript",
    "NodeJS",
    "Next.js",
    "SQL",
    "MongoDB",
    "Cypress",
    "Playwright",
    "Prisma",
    "Tailwindcss",
    "jest",
    "Hono",
    "React-Query",
    "Testing-Library",
    "Drizzle ORM",
  ];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "bakateba@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-lg border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        id === 1 || id === 4 ? "md:col-span-2" : ""
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background:
          theme === "dark" ? "rgb(4,7,29)" : "rgba(255, 255, 255, 0.125)",
        backgroundColor:
          theme === "dark"
            ? "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
            : "linear-gradient(90deg, rgba(255, 255, 255, 0.125) 0%, rgba(255, 255, 255, 0.125) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 4 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center inset-0")}
              fill
              sizes="300"
            />
          )}
        </div>

        {id === 4 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-5 space-y-2",
            titleClassName
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight line-clamp-1 text-lg dark:text-[#C1C2D3] z-10">
            {description}
          </div>

          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="grid grid-cols-3 gap-1 lg:gap-3 w-fit pb-4">
              {/* tech stack lists */}

              {stackList.map((item, i) => (
                <span
                  key={i}
                  className="p-2 text-xs lg:text-base opacity-50 flex items-center
                    lg:opacity-100 rounded-lg justify-center dark:bg-[#10132E] bg-[#F5F5F5]"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
          {id === 4 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="dark:!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
