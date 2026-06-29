import Services from "@/components/Services";
import Section from "@/components/sections/Section";

export default function ServicesSection({
  sectionHeading,
  hiddenId
}: {
  sectionHeading: string;
  hiddenId?: number;
}) {
  return (
    <Section>
      <div className={"px-4"}>
        <h2 className={"text-3xl font-bold mb-4"}>{sectionHeading}</h2>
      </div>
      <Services hiddenId={hiddenId} />
    </Section>
  );
}
