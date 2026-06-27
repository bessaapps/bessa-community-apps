import Discovery from "@/assets/images/process/discovery.png";
import Design from "@/assets/images/process/design.png";
import Build from "@/assets/images/process/build.png";
import QualityAssurance from "@/assets/images/process/quality-assurance.png";
import Distribution from "@/assets/images/process/distribution.png";
import Marketing from "@/assets/images/process/marketing.png";
import Maintenance from "@/assets/images/process/maintenance.png";
import Image from "next/image";

export default function ProcessSection() {
  const PROCESSES = [
    {
      heading: "Discovery",
      text: "The first step provides us with a roadmap to success. We’ll clarify your goals, research the market, and define the scope of work. With vision and the latest tools, we’ll see your app get successfully published to the Apple App Store and Google Play.",
      image: Discovery
    },
    {
      heading: "Design",
      text: "We all love a stunning visual layout and experience that just makes sense. I'll build you a style guide, mockups, and user flows to make your app a dream to use, accessible, and geared towards meeting your goals. Users will be encouraged to sign up immediately.",
      image: Design
    },
    {
      heading: "Build",
      text: "Roll out the red carpet; this is your big idea! I’ll incorporate the core functionality you originally envisioned for the app. I’ll help you build your app that solves your customers’ real-world problems.",
      image: Build
    },
    {
      heading: "Quality Assurance",
      text: "An app that delivers on its promise will sell more. We’ll make sure the user experience is as it should be and that the functionality you advertise works flawlessly. This will help your app get good reviews and rank on the charts after you launch.",
      image: QualityAssurance
    },
    {
      heading: "Distribution",
      text: "This is what we’ve been waiting for! We’ll gather the materials needed to submit your app to the app stores. I’ll then make any edits needed to pass the review processes before submitting to both the Apple App Store and Google Play. Now you can circulate your revolutionary new app and earn proceeds through both stores.",
      image: Distribution
    },
    {
      heading: "Marketing",
      text: "Let’s make sure your launch party is a success! I’ll help curate your app store listing and marketing materials to drive the most traffic to your listing and put your app in the hands of the people who need it most.",
      image: Marketing
    },
    {
      heading: "Maintenance",
      text: "We can’t stop there! Now we’ll analyze feedback from reviews and user analytics metrics. I’ll also provide the latest updates, improvements, and bug fixes based on what your users want and are experiencing.",
      image: Maintenance
    }
  ];

  return (
    <>
      <div className={"py-32"}>
        <div className={"grid sm:grid-cols-2 gap-4 mx-4 mb-8"}>
          <h2 className={"text-4xl font-bold"}>Process</h2>
          {/*<p>*/}
          {/*  Get your quality app that works beautifully on iOS, Android, and*/}
          {/*  web. I&apos;ll help you all the way from validating your idea to*/}
          {/*  publishing it to the app stores, help you with everything in*/}
          {/*  between, test your app, keep your app secure, snappy, and*/}
          {/*  up-to-date, and solve any technical issues that may come up.{" "}*/}
          {/*  <Link*/}
          {/*    href={bookingLink}*/}
          {/*    target={"_blank"}*/}
          {/*    rel={"noopener noreferrer"}*/}
          {/*    className={"text-primary font-semibold"}*/}
          {/*  >*/}
          {/*    Start Here &rarr;*/}
          {/*  </Link>*/}
          {/*</p>*/}
        </div>
        <div className={"mx-4 sm:mx-0"}>
          {PROCESSES?.map((process, index) => (
            <div key={index} className={"py-8"}>
              <div className={"grid grid-cols-4 gap-4"}>
                <div
                  className={
                    "max-w-full h-full aspect-square flex items-center justify-center sm:p-8"
                  }
                >
                  <Image
                    src={process.image}
                    alt={process.heading}
                    className={"h-full w-full object-contain"}
                    sizes={"(max-width: 640px) 74px, 241px"}
                  />
                </div>
                <div className={"col-span-3 flex items-center"}>
                  <div className={"sm:px-4"}>
                    <h3 className={"text-xl font-bold mb-4"}>
                      {process.heading}
                    </h3>
                    <p>{process.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
