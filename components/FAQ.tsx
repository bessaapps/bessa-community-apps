import { faqs } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { FAQPage, WithContext } from "schema-dts";

export default function FAQ() {
  const jsonLd: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Object.entries(faqs).map(([key, value]: [string, string]) => ({
      "@type": "Question",
      name: key,
      acceptedAnswer: { "@type": "Answer", text: value }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <div className={"py-32"}>
        <div className={"mx-4"}>
          <Accordion type={"multiple"}>
            {Object.entries(faqs).map(
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
    </>
  );
}
