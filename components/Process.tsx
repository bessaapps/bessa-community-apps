import GradientHeading from "@/components/GradientHeading";
import { Fragment } from "react";

export default function Process() {
  const processes = [
    {
      heading: "Discovery",
      text: "This is where every great app begins. This stage includes open discussion to understand your goals, in-depth research to identify opportunities, and clear scope definition to set the foundation for success. By aligning vision and strategy from the start, this phase ensures that development moves forward with focus, efficiency, and confidence.",
      steps: ["Discuss", "Research", "Define Scope"]
    },
    {
      heading: "Design",
      text: "This will bring your app to life visually with a clear style guide and prototypes. This stage defines the look, feel, and flow of your product, ensuring consistency across every screen and a seamless user experience. By combining creativity with usability, this phase lays the groundwork for an app that is both visually stunning and intuitive to navigate.",
      steps: ["Create a Style Guide", "Prototype Designs"]
    },
    {
      heading: "Build",
      text: "Here Ideas will take shape and come to life. During this stage, layouts are crafted for clarity and usability, functionality is built to deliver seamless performance, and content is integrated to create a polished, engaging experience. Every detail is handled with precision to ensure the final product reflects your vision and meets the highest standards of quality.",
      steps: [
        "Layout Components",
        "Install Functionality",
        "Incorporate Content"
      ]
    },
    {
      heading: "Distribution",
      text: "The final state ensures your app reaches the world with impact. This stage includes preparing your app for launch and managing submission to app stores, handling requirements and guidelines with expertise. By streamlining the process, the distribution phase makes your app accessible to users quickly and positions it for maximum visibility and success.",
      steps: [
        "Gather Requirements",
        "Submit for Review",
        "Publish to App Stores"
      ]
    }
  ];

  return (
    <div className={"max-w-[1200] px-4 py-32 mx-auto"}>
      <div className={"max-w-full sm:max-w-[66%]"}>
        <GradientHeading>A Collaborative, End-to-End Process</GradientHeading>
        <p className={"mb-8"}>
          At Bessa Apps, I partner with purpose-driven teams to transform big
          ideas into powerful, intuitive products. As a react native app
          developer, my focus is on building apps that are scalable,
          human-centered, and designed to reduce risk while maximizing value.
          From mobile app development and web development to SEO and ASO
          strategies and smooth app store distribution, every project is crafted
          to connect businesses with their audiences in meaningful ways. The
          process is simple, collaborative, and always tailored to your unique
          goals.
        </p>
        <p className={"mb-8"}>
          With over a decade of experience, I bring not only technical expertise
          but also strategic insight to every stage of development. That means
          you get more than code; you get a clear roadmap for growth, a trusted
          partner in cross-platform app development, and a product that feels as
          natural for your users as it is powerful for your business. The result
          is a custom app solution that isn&apos;t just functional, but deeply
          aligned with your customers, your values, and your long-term success.
        </p>
      </div>
      <div className={"grid sm:grid-cols-4 gap-4"}>
        {processes?.map((process, index) => (
          <Fragment key={index}>
            <div />
            <h2 className={"text-muted-foreground font-bold text-xl pt-1"}>
              {process.heading}
            </h2>
            <div className={"sm:col-span-2"}>
              <p className={"mb-4"}>{process.text}</p>
              <ul className={"flex flex-col gap-2"}>
                {process.steps.map((step) => (
                  <li key={step} className={"flex items-center gap-2"}>
                    <span className={"text-lg font-semibold"}>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
