import {motion} from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

interface Props {
  title: string;
  text: string;
  buttonLink: string;
  image: string;
}

export default function SubpageHero({title, text, buttonLink, image }: Props){
  return (
    <section className="mb-32 pt-8">
      <div className="bg-background pt-16 lg:pt-24 px-3 md:px-8">
        <div className="container flex mx-auto flex-col items-center lg:flex-row lg:items-start">
          <div className="relative flex flex-col items-start gap-8 pb-20 lg:w-1/2">
            <h2 className="text-3xl leading-tight font-bold tracking-tighter text-foreground lg:text-5xl">
              {title}
            </h2>
            <p className="text-lg text-foreground">
             {text}
            </p>
            <Button asChild>
              <a href={buttonLink}>
                Contact Us
                <ArrowDownIcon/>
              </a>
            </Button>
          </div>
          <div className="relative flex w-full justify-center lg:w-1/2">
            <div className="relative z-10 -mb-16 h-auto w-[80%] max-w-[355px] lg:w-[520px]">
              <AspectRatio ratio={355 / 520} className="border-border border rounded">
                <img
                  src={image}
                  alt="contact us"
                  className="size-full object-cover rounded"
                />
              </AspectRatio>
            </div>
            <div className="absolute bottom-0 w-full overflow-hidden">
              <AspectRatio ratio={2} className="relative">
                <motion.div
                className="absolute w-full aspect-square rounded-full bg-accent border-18 border-white/60 border"
                animate={{ scale: [1, .98, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
