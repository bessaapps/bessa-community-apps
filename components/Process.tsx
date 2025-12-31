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

  return processes?.map((process, index) => (
    <div key={index} className={"max-w-[1000] px-4 py-8 mx-auto"}>
      <div className={"grid sm:grid-cols-2 gap-4 mx-4 mb-8"}>
        <div>
          <div className={"flex items-center gap-4"}>
            <span
              className={"text-4xl"}
              style={{ color: `var(--chart-${index + 1})` }}
            >
              &middot;
            </span>
            <h2
              className={
                "text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-primary-foreground"
              }
            >
              {process.heading}
            </h2>
          </div>
        </div>
        <div className={"flex flex-col gap-6"}>
          <p>{process.text}</p>
          <p className={"text-center"}>&darr;</p>
          <div className={"flex flex-col gap-2"}>
            {process.steps.map((step) => (
              <p key={step} className={"text-lg font-semibold text-center"}>
                {step}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  ));
}
