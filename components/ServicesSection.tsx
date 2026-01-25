import SectionHeading from "@/components/SectionHeading";
import Services from "@/components/Services";

export default function ServicesSection({
  sectionHeading,
  hiddenId
}: {
  sectionHeading: string;
  hiddenId?: number;
}) {
  return (
    <div className={"max-w-[1000] px-4 py-32 mx-auto"}>
      <SectionHeading>{sectionHeading}</SectionHeading>
      <Services hiddenId={hiddenId} />
    </div>
  );
}
