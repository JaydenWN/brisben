import { cn } from "@/lib/utils";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "./ui/button";
import { ArrowRight, MessageCircleMore, StarIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface Props {
  className?: string;
  badgeText?: string;
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
}

export default function LandingHero({ badgeText, title, text, imageSrc, imageAlt}: Props){
  return (
    <section
      className={"relative border-b border-muted bg-background overflow-hidden"}
    >
      <div className="container z-1">
        <div className="grid grid-cols-1 items-center gap-2 md:gap-4 lg:grid-cols-2">
          <div className=" flex w-full max-w-[31.25rem] flex-col gap-9 lg:max-w-[37.5rem] lg:py-[9%] xl:py-[10%]  ml-3 md:ml-6 lg:ml-8 pt-3">
            {badgeText && 
            <Badge variant="outline" className="text-[clamp(0.875rem,0.875vw,1rem)] text-muted-foreground gap-3 border-border bg-white">
              <span className="flex">
              {Array.from({length: 5}).map((_, i)=>(<StarIcon className="size-4 " key={i}/>))}
              </span>
              {badgeText}
            </Badge>}
            <h1 className="text-[clamp(1.5rem,calc(2.5vw+2.3rem),5.5rem)] leading-[0.85] tracking-[-0.03em] text-foreground">
              {title}
            </h1>
            <p className="text-[clamp(1.125rem,1.125vw,1.4rem)] leading-normal text-muted-foreground">
              {text}
            </p>
            <div className="flex gap-3">
                <Button variant="outline" asChild>
                  <a href="/">View Our Services <ArrowRight/></a>
                  
                </Button>
                <Button asChild>
                  <a href="/">
                  <MessageCircleMore/>Contact Us</a>
                </Button>
            </div>
          </div>
          <div>
            <div className="relative ml-8 aspect-square w-full max-w-[56.25rem] overflow-hidden lg:absolute z-1 lg:right-0 lg:bottom-0 lg:w-1/2">
              <div className="absolute right-0 bottom-0 w-[85%] h-[80%] overflow-hidden rounded-lg bg-accent"/>
              <div className="absolute right-0 bottom-0 w-[93%] overflow-hidden rounded-tl-lg shadow-md">
                <AspectRatio ratio={1.381308411 / 1}>
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="block size-full object-cover object-center"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};