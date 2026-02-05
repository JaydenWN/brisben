import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface Process{
  title: string;
  text: string;
  image: string;
}

interface Props {
  processes: Process[];
  title: string;
  text: string;
}

export default function LandingProcess({ title, text, processes = process }: Props){
  const process = [
    {
      title: "Choose your plan",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img14.png",
    },
    {
      title: "Submit your Request",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png",
    },
    {
      title: "Get your project done",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img11.png",
    },
  ];

  const [active, setActive] = useState<number | null>(0);



  return (
    <section
      className="py-16 px-3 md:px-8 md:py-16 lg:py-32">
      <div className="container mx-auto overflow-hidden md:overflow-visible">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <h2 className="text-5xl font-semibold tracking-tight ">
              {title}           
            </h2>
            <p className="text-base text-muted-foreground">
              {text}
            </p>
          </div>
          <ul className="relative col-span-4 w-full space-y-10">
            {processes.map((step, index) => (
              <li
                onMouseEnter={() => setActive(index)}
                key={index}
                className={cn(
                  "relative mr-20 ml-auto flex w-full max-w-xl cursor-pointer flex-col justify-between gap-10 rounded-3xl bg-background p-10 md:flex-row lg:items-center",
                  index === active ? "bg-background" : "lg:bg-transparent",
                )}
              >
                <AnimatePresence mode="wait">
                  {index === active && (
                    <motion.img
                      key={step.image}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      src={step.image}
                      alt=""
                      className="absolute top-0 right-0 size-30 translate-x-1/4 -translate-y-1/2 rounded-2xl object-cover lg:size-40 lg:translate-x-1/2"
                    />
                  )}
                </AnimatePresence>
                <div className="">
                  <h2 className="mb-4 font-bold tracking-tight lg:text-3xl">
                    Step {index + 1}
                  </h2>
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-xl">
                    {step.title}
                  </h3>
                  <p className="line-clamp-2 text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

