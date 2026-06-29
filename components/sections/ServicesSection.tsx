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
        <h2 className={"text-3xl font-bold mb-4"}>{sectionHeading}</h2>
      </div>
      <Services hiddenId={hiddenId} />
    </div>
  );
}
