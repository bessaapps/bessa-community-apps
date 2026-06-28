import { FAQS } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <div className={"py-32"}>
      <h2 className={"text-4xl font-bold mx-4 mb-8"}>
        Frequently Asked Questions
      </h2>
      <div className={"mx-4"}>
        <Accordion type={"multiple"}>
          {Object.entries(FAQS).map(
            ([key, value]: [string, string], index: number) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{key}</AccordionTrigger>
                <AccordionContent>{value}</AccordionContent>
              </AccordionItem>
            )
          )}
        </Accordion>
      </div>
    </div>
  );
}
