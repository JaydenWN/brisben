import { Award, CloudLightning, Compass, Gift, Shield, Star, Zap } from "lucide-react";

interface Feature68Props {
  title: string;
  text: string;
  serviceList: {
    title: string;
    text: string;
    link: string;
  }[]
}

export default function ServicesList({ title, text, serviceList }: Feature68Props){
  const features = [
    {
      icon: <Star />,
      title: "Feature 1",
      description: "Brief description of feature 1",
    },
    {
      icon: <Zap />,
      title: "Feature 2",
      description: "Brief description of feature 2",
    },
    {
      icon: <Shield />,
      title: "Feature 3",
      description: "Brief description of feature 3",
    },
    {
      icon: <Compass />,
      title: "Feature 4",
      description: "Brief description of feature 4",
    },
    {
      icon: <CloudLightning />,
      title: "Feature 5",
      description: "Brief description of feature 5",
    },
    {
      icon: <Gift />,
      title: "Feature 6",
      description: "Brief description of feature 6",
    },
  ];

  return (
    <section className="py-16 px-3 md:px-8 md:py-16 lg:py-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-semibold">
            {title}
          </h2>
          <p className="max-w-prose text-base text-muted-foreground md:text-lg">
            {text}
          </p>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card/50 px-6 py-8 md:px-10 md:py-12">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceList.map((service, index) => {
              return (
                <li key={index} className="flex items-start gap-3">
                  <a href={service.link}>
                    <div className="flex size-10 shrink-0 items-center justify-center bg-primary text-white rounded-sm p-2">
                      <Award/>
                    </div>
                    <div>
                      <p className="font-medium">{service.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {service.text}
                      </p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
