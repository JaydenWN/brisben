import {
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL, TEL_NUMBER } from "@/consts";

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  description: string;
  value: string;
  href: string;
  badge?: string;
}

const defaultContactInfo: ContactInfo[] = [
  {
    icon: <Mail className="size-6" />,
    title: "Email",
    description: "Get a response within 24 hours",
    value: "hello@company.com",
    href: "mailto:hello@company.com",
    badge: "Recommended",
  },
  {
    icon: <MessagesSquare className="size-6" />,
    title: "Live Chat",
    description: "Instant support available now",
    value: "Start chatting",
    href: "#",
    badge: "Online",
  },
  {
    icon: <Phone className="size-6" />,
    title: "Phone",
    description: "Mon-Fri, 9AM-6PM EST",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: <MapPin className="size-6" />,
    title: "Office",
    description: "Schedule an in-person meeting",
    value: "123 Innovation St, Tech City",
    href: "#",
  },
];

interface Props {
  contactInfo: ContactInfo[];
  title: string;
  text: string;
}

export default function ContactMainForm({ contactInfo = defaultContactInfo, title, text }: Props){
  return (
    <section className="py-24"  id="contact-form">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {text}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return(
                  <Card key={index} className="border-0 bg-background/60 shadow-none">
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                          <Icon/>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-1 flex items-center gap-2">
                            <h3 className="font-semibold">{info.title}</h3>
                          </div>
                          <p className="mb-2 text-sm text-muted-foreground">
                            {info.description}
                          </p>
                          <a
                            href={info.href}
                            className="text-sm font-medium transition-colors hover:underline"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )})}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border bg-card border-border shadow-none h-fit">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name 
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium">
                        Last Name 
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address 
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help?"
                      rows={4}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <div className="flex items-center gap-2">Submit</div> 
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Office Hours - Full Width */}
          <div className="mt-12">
            <Separator className="mb-8" />
            <Card className="border bg-card border-border shadow-none">
              <CardContent className="p-6">
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Office Hours</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Sunday</span>
                        <span>9:00 AM - 6:00 PM EST</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">
                      Contact Information
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Email</span>
                        <span>{EMAIL}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Phone</span>
                        <span>{TEL_NUMBER}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};