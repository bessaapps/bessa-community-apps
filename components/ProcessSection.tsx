"use client";

import Discovery from "@/assets/images/process/discovery.png";
import Design from "@/assets/images/process/design.png";
import Build from "@/assets/images/process/build.png";
import QualityAssurance from "@/assets/images/process/quality-assurance.png";
import Distribution from "@/assets/images/process/distribution.png";
import Marketing from "@/assets/images/process/marketing.png";
import Maintenance from "@/assets/images/process/maintenance.png";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

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

  const [api, setApi] = useState<CarouselApi>();

  return (
    <>
      <div className={"py-32"}>
        <h2 className={"text-4xl font-bold mx-4 mb-8"}>Process</h2>
        <div className={"mx-4 sm:mx-0"}>
          <Carousel setApi={setApi}>
            <CarouselContent>
              {PROCESSES.map(({ heading, text, image }, index) => (
                <CarouselItem key={index} className={"grid grid-cols-4 gap-4"}>
                  <div
                    className={
                      "h-full w-full max-h-full max-w-full aspect-square flex items-center justify-center sm:p-8"
                    }
                  >
                    <Image
                      src={image}
                      alt={heading}
                      className={"h-full w-full object-contain"}
                      sizes={"(max-width: 640px) 100vw, 241px"}
                    />
                  </div>
                  <div className={"col-span-3 flex items-center"}>
                    <div className={"sm:px-4"}>
                      <h3 className={"text-xl font-bold mb-4"}>{heading}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className={"flex justify-between mx-4"}>
            <div className={"flex gap-1"}>
              <Button size={"xs"} onClick={() => api?.scrollNext()}>
                <AiOutlineArrowLeft />
              </Button>
              <Button size={"xs"} onClick={() => api?.scrollNext()}>
                <AiOutlineArrowRight />
              </Button>
            </div>
            <div className={"flex gap-1"}>
              {PROCESSES.map((_, index) => (
                <Button
                  key={index}
                  size={"xs"}
                  onClick={() => api?.scrollTo(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
