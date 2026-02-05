import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const defaultFaqs = [
  {
    question: "What is a FAQ and why is it important?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic.",
  },
  {
    question: "Why should I use a FAQ on my website or app?",
    answer:
      "Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions. ",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
  },
  {
    question: "What are the benefits of having a well-maintained FAQ section?",
    answer:
      "There are numerous advantages to maintaining a robust FAQ section. Firstly, it provides immediate answers to common queries, which improves the user experience.",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
  },
];

interface Faq{
  question: string;
  answer: string;
}

interface Props {
  className?: string;
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  faqs: Faq[]
}

export default function LandingFAQ({ title, text, buttonText, buttonLink, faqs = defaultFaqs }: Props){
  return (
    <section className="py-16 px-3 md:px-8 md:py-16 lg:py-32">
      <div className="container mx-auto">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-semibold">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              {text}
            </p>
            <Button size="lg" variant="default" className="w-fit" asChild>
              <a href={`${buttonLink}`}>
                {buttonText}                
              </a>
            </Button>
          </div>
          <Accordion type="multiple">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
