import { FAQS } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import Section from "@/components/sections/Section";

export default function FAQSection() {
  return (
    <Section>
      <h2 className={"text-4xl font-bold mx-4 mb-8"}>
        Frequently Asked Questions
      </h2>
      <div className={"mx-4"}>
        <Accordion type={"multiple"}>
          {Object.entries(FAQS).map(
            ([key, value]: [string, string], index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <h3 className={"text-base font-semibold"}>{key}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p className={"text-base"}>{value}</p>
                </AccordionContent>
              </AccordionItem>
            )
          )}
        </Accordion>
      </div>
    </Section>
  );
}
