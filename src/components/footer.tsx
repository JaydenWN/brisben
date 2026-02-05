import { ArrowUpRight, CircleCheck, Ghost, LifeBuoy, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE_TAGLINE, SITE_TITLE } from "@/consts";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Tasks", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Conferencing", href: "#" },
      { name: "Invoicing", href: "#" },
      { name: "Security", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Roadmap", href: "#" },
      { name: "Changelog", href: "#" },
      { name: "Resources", href: "#" },
    ],
  },
  {
    title: "Case Studies",
    links: [
      { name: "Shadcn", href: "#" },
      { name: "React", href: "#" },
      { name: "Tailwind", href: "#" },
    ],
  },
  {
    title: "Integrations",
    links: [
      { name: "Hubspot", href: "#" },
      { name: "Slack", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About ", href: "#" },
      { name: "Company", href: "#" },
      { name: "Support", href: "#" },
      { name: "Book a demo", href: "#" },
    ],
  },
];

interface Link{
  text: string;
  href: string;
}

interface LinkSection{
  title: string;
  links: Link[]
}

interface Props {
  linkSections: LinkSection[];
  buttonLink: string;
  className?: string;
}

export default function Footer({buttonLink = "/contact", linkSections}: Props){
  return (
    <section className="bg-sidebar-foreground pt-16 pb-6 px-3 md:px-8 md:pt-16 lg:pt-32 lg:pb-12">
      <div className="container mx-auto">
        <footer>
          <div className="mb-14 flex flex-col justify-between gap-11 md:items-start xl:flex-row xl:items-center xl:gap-6">
            <div>
              <h2 className="mb-4 text-4xl font-semibold !text-white">{SITE_TITLE}</h2>
              <p className="mb-8 text-xl text-white/70">
                {SITE_TAGLINE}
              </p>
              <div className="flex items-center gap-3">
                <Button asChild>
                  <a href={buttonLink}>
                    Contact Us <ArrowUpRight/>
                  </a></Button>
              </div>
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-8 border-t border-border/40 pt-20 lg:grid-cols-5">
            {linkSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold !text-white">{section.title}</h3>
                <ul className="space-y-4 text-muted">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <motion.a 
                        whileHover={{
                          paddingLeft: 2
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        href={link.href}>{link.text}</motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-20  border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center">
                <p className="text-gray-400">
                  <a href="https://www.beachsidewebdesigns.com" rel="sponsored">
                  © 2025 Beachside Web Designs. All rights reserved.
                  </a>
                </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

