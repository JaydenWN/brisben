import { Code, Cog, PenTool, Shrub, type LucideIcon } from "lucide-react";

interface Service{
  icon: LucideIcon;
  title: string;
  text: string;
}

interface Props {
  title: string;
  text: string;
  services: Service[]
}
const defaultServices = [
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Product Strategy",
      text:
        "From market research to user personas, we help you build products that matter.",
     
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Design",
      text:
        "Beautiful, functional designs that create memorable user experiences.",
      
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      text:
        "Robust, scalable applications built with modern technologies and frameworks.",
      
    },
    {
      icon: <Shrub className="h-8 w-8" />,
      title: "Marketing",
      text:
        "Strategic growth initiatives to scale your product and maximize impact.",
      
    },
  ];
export default function LandingWhy({title, text, services = defaultServices}: Props){


  return (
    <section className="py-16 px-3 md:px-8 md:py-16 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-5xl font-semibold tracking-tight">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg tracking-tight text-muted-foreground md:text-xl">
              {text}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return(
              <div key={index} className="group space-y-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white bg-primary transition-colors group-hover:bg-foreground group-hover:text-background">
                  <Icon/>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </div>
                
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
};

