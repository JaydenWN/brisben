import { ArrowDownRight, ArrowRight, MessageCircleMore, Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";

interface Hero3Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
      className?: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  badgeText: string;
  image: {
    src: string;
    alt: string;
  }
}

export default function LandingHero({
  heading = "Blocks built with Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Sign Up",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
  },
  badgeText,
  image
}: Hero3Props){
  return (
    <section className="py-16 px-3 md:pt-32 md:px-8 md:py-18 lg:py-32 bg-background">
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20 mx-auto">
        <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
          <Badge variant="secondary" className="flex w-fit items-center gap-4 ">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                
              </div>
              <p className="text-left font-medium ">
                {badgeText}
              </p>
          </Badge>
          <h1 className="my-6 text-3xl font-bold text-pretty lg:text-5xl xl:text-6xl">
            {heading}
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.secondary && (
              <Button asChild variant="outline">
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            )}
            {buttons.primary && (
              <Button asChild className="w-full sm:w-auto">
                <a href={buttons.primary.url}>{buttons.primary.text}
                  <MessageCircleMore/>
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="flex">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
          />
        </div>
      </div>
    </section>
  );
};
