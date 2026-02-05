import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL, TEL_NUMBER } from "@/consts";

interface Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
  className?: string;
}

export default function Contact({
  title = "Contact Us",
  text = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  web = {
    label: "shadcnblocks.com",
    url: "https://shadcnblocks.com",
  },
}: Props){
  return (
    <section className="py-16 px-3 md:px-8 md:py-16 lg:py-32 bg-background">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left flex-col gap-4 flex">
              <h2 className="mb-2 text-5xl font-semibold lg:mb-1 ">
                {title}
              </h2>
              <p className="text-muted-foreground">{text}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Our Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Phone: </span>
                  {TEL_NUMBER}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${EMAIL}`} className="underline">
                    {EMAIL}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-3xl flex-col h-fit gap-6 rounded-lg border border-border bg-white p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
