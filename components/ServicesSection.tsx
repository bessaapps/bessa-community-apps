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
    <div className={"my-32"}>
      <div className={"px-4"}>
        <SectionHeading>{sectionHeading}</SectionHeading>
      </div>
      <Services hiddenId={hiddenId} />
    </div>
  );
}
