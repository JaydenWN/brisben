import { ArrowUpRight, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const servicesList = [
  {
    title: "Web Design",
    text: "Design",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/tirza-van-dijk-o1SKqmgSDbg-unsplash.jpg",
  },
  {
    title: "Digital Marketing",
    category: "Marketing",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/adem-ay-Tk9m_HP4rgQ-unsplash.jpg",
  },
  {
    title: "App Development",
    text: "Development",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
  },
  {
    title: "Content Creation",
    text: "Content",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/christin-hume-Hcfwew744z4-unsplash.jpg",
  },
];


interface Service{
  title: string;
  text: string;
  imageSrc: string;
}
interface Props {
  title: string;
  text: string;
  services: Service[];
  benefits: string[];
}

export default function LandingServices({title, text, benefits, services = servicesList} : Props){
  return (
    <section className={"py-16 px-3 md:px-8 md:py-16 lg:py-32"}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="size-3 rounded-sm bg-primary" />
            <p className="tracking-tight">Our Services</p>
          </div>
          <p className="text-sm">
            <span className="font-mono">+10</span> years of experience
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-20 lg:grid-cols-3">
          <div className="flex flex-col gap-7">
            <h2 className="text-5xl font-semibold">{title}</h2>
            <p className="text-lg text-muted-foreground">
              {text}
            </p>
            <Separator />
            <div className="flex flex-col gap-5 tracking-tight">
              {benefits?.map((benefit, idx)=>(
                <div className="flex items-center gap-2.5" key={idx}>
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-muted">
                    <Plus className="size-3.5" />
                  </span>
                  <p className="font-medium">{benefit}</p>
                </div>
              ))}
            </div>
            <Button className="w-fit" size="lg" asChild>
              <a href="/contact">
                Contact Us <ArrowUpRight />
              </a>
            </Button>
          </div>
          <div className="col-span-2 space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md border border-border bg-muted py-2 pr-6 pl-2 dark:bg-card"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={service.imageSrc}
                    alt={service.title}
                    className="h-20 min-w-32 rounded-sm object-cover"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-medium tracking-tight">
                      {service.title}
                    </h2>
                    <p className="tracking-tight text-muted-foreground">
                      {service.text}
                    </p>
                  </div>
                </div>
                <div className="hidden items-center gap-1.5 sm:flex">
                  {Array.from({ length: services.length }).map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "size-2.5 rounded-full",
                        i <= index ? "bg-primary" : "bg-muted-foreground/20",
                      )}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
