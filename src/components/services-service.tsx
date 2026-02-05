import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
interface Feature7Props {
  image: {
    src: string;
    alt: string;
  }
  title: string;
  text: string;
  reasons?: string[]
  variant?: "default" | "reverse";
  id: string;
  className? : string;
}

export default function ServicesService({ image, title, text, reasons, id, className, variant = "default" }: Feature7Props){
  return (
    <section className={cn(`${className} py-16 px-3 md:px-8 md:py-16 lg:py-32`)} id={id}>
      <div className="container mx-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <img
            src={image.src}
            alt={image.alt}
            className={cn(
              "max-h-96 w-full rounded-md object-contain",
              variant === "reverse"
                ? "order-2 lg:order-2"
                : "order-2 lg:order-1"
            )}
          />

          <div
            className={cn(
              "flex flex-col",
              variant === "reverse"
                ? "order-1 lg:order-1 lg:items-start lg:text-left"
                : "order-1 lg:order-2 lg:items-start lg:text-left"
            )}
          >
            <h2 className="my-6 text-5xl font-semibold">
              {title}
            </h2>

            <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              {text}
            </p>

            <ul className="ml-4 space-y-4 text-left">
              {reasons?.map((reason) => (
                <li key={reason} className="flex items-center gap-3">
                  <Check className="size-5" />
                  <p className="text-muted-foreground">{reason}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
