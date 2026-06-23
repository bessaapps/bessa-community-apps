import Discovery from "@/assets/images/process/discovery.png";
import Design from "@/assets/images/process/design.png";
import Build from "@/assets/images/process/build.png";
import QualityAssurance from "@/assets/images/process/quality-assurance.png";
import Distribution from "@/assets/images/process/distribution.png";
import Marketing from "@/assets/images/process/marketing.png";
import Maintenance from "@/assets/images/process/maintenance.png";
import Image from "next/image";

export default function ProcessSection() {
  const processes = [
    {
      heading: "Discovery",
      text: "This is where every great app begins. This stage includes open discussion to understand your goals, in-depth research to identify opportunities, and clear scope definition to set the foundation for success. By aligning vision and strategy from the start, this phase ensures that development moves forward with focus, efficiency, and confidence.",
      image: Discovery
    },
    {
      heading: "Design",
      text: "This will bring your app to life visually with a clear style guide and prototypes. This stage defines the look, feel, and flow of your product, ensuring consistency across every screen and a seamless user experience. By combining creativity with usability, this phase lays the groundwork for an app that is both visually stunning and intuitive to navigate.",
      image: Design
    },
    {
      heading: "Build",
      text: "Here Ideas will take shape and come to life. During this stage, layouts are crafted for clarity and usability, functionality is built to deliver seamless performance, and content is integrated to create a polished, engaging experience. Every detail is handled with precision to ensure the final product reflects your vision and meets the highest standards of quality.",
      image: Build
    },
    {
      heading: "Quality Assurance",
      text: "Here Ideas will take shape and come to life. During this stage, layouts are crafted for clarity and usability, functionality is built to deliver seamless performance, and content is integrated to create a polished, engaging experience. Every detail is handled with precision to ensure the final product reflects your vision and meets the highest standards of quality.",
      image: QualityAssurance
    },
    {
      heading: "Distribution",
      text: "The final state ensures your app reaches the world with impact. This stage includes preparing your app for launch and managing submission to app stores, handling requirements and guidelines with expertise. By streamlining the process, the distribution phase makes your app accessible to users quickly and positions it for maximum visibility and success.",
      image: Distribution
    },
    {
      heading: "Marketing",
      text: "The final state ensures your app reaches the world with impact. This stage includes preparing your app for launch and managing submission to app stores, handling requirements and guidelines with expertise. By streamlining the process, the distribution phase makes your app accessible to users quickly and positions it for maximum visibility and success.",
      image: Marketing
    },
    {
      heading: "Maintenance",
      text: "The final state ensures your app reaches the world with impact. This stage includes preparing your app for launch and managing submission to app stores, handling requirements and guidelines with expertise. By streamlining the process, the distribution phase makes your app accessible to users quickly and positions it for maximum visibility and success.",
      image: Maintenance
    }
  ];

  return null;

  return processes?.map((process, index) => (
    <div key={index} className={"py-8"}>
      <div className={"grid grid-cols-4 gap-4"}>
        <div
          className={
            "w-full max-w-full h-full max-h-full aspect-square flex items-center justify-center"
          }
        >
          <Image
            src={process.image}
            alt={process.heading}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
          />
        </div>
        <div className={"col-span-3 flex items-center"}>
          <div className={"p-4"}>
            <h3 className={"text-xl font-bold mb-4"}>{process.heading}</h3>
            <p>{process.text}</p>
          </div>
        </div>
      </div>
    </div>
  ));
}
