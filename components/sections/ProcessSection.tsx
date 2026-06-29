"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Section from "@/components/sections/Section";

export default function ProcessSection() {
  const PROCESSES = [
    {
      heading: "Discovery",
      text: "The first step provides us with a roadmap to success. We’ll clarify your goals, research the market, and define the scope of work. With vision and the latest tools, we’ll see your app get successfully published to the Apple App Store and Google Play."
    },
    {
      heading: "Design",
      text: "We all love a stunning visual layout and experience that just makes sense. I'll build you a style guide, mockups, and user flows to make your app a dream to use, accessible, and geared towards meeting your goals. Users will be encouraged to sign up immediately."
    },
    {
      heading: "Build",
      text: "Roll out the red carpet; this is your big idea! I’ll incorporate the core functionality you originally envisioned for the app. I’ll help you build your app that solves your customers’ real-world problems."
    },
    {
      heading: "Quality Assurance",
      text: "An app that delivers on its promise will sell more. We’ll make sure the user experience is as it should be and that the functionality you advertise works flawlessly. This will help your app get good reviews and rank on the charts after you launch."
    },
    {
      heading: "Distribution",
      text: "This is what we’ve been waiting for! We’ll gather the materials needed to submit your app to the app stores. I’ll then make any edits needed to pass the review processes before submitting to both the Apple App Store and Google Play. Now you can circulate your revolutionary new app and earn proceeds through both stores."
    },
    {
      heading: "Marketing",
      text: "Let’s make sure your launch party is a success! I’ll help curate your app store listing and marketing materials to drive the most traffic to your listing and put your app in the hands of the people who need it most."
    },
    {
      heading: "Maintenance",
      text: "We can’t stop there! Now we’ll analyze feedback from reviews and user analytics metrics. I’ll also provide the latest updates, improvements, and bug fixes based on what your users want and are experiencing."
    }
  ];

  const [api, setApi] = useState<CarouselApi>();

  return null;

  return (
    <Section>
      <div className={"flex flex-col gap-8"}>
        <h2 className={"text-4xl font-bold mx-4"}>Process</h2>
        <Carousel setApi={setApi}>
          <CarouselContent className={"w-full max-w-svw sm:px-4"}>
            {PROCESSES.map(({ heading, text }, index) => (
              <CarouselItem key={index} className={"flex"}>
                <div className={"shrink"}>
                  <h3 className={"text-xl font-bold mb-4"}>{heading}</h3>
                  <p>{text}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className={"flex items-center justify-between mx-4"}>
          <div className={"flex gap-2"}>
            <Button
              size={"sm"}
              onClick={() => api?.scrollPrev()}
              className={"cursor-pointer"}
            >
              <AiOutlineArrowLeft />
            </Button>
            <Button
              size={"sm"}
              onClick={() => api?.scrollNext()}
              className={"cursor-pointer"}
            >
              <AiOutlineArrowRight />
            </Button>
          </div>
          <div className={"flex gap-2"}>
            {PROCESSES.map((_, index) => (
              <div
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={"bg-primary h-2 w-2 rounded-full cursor-pointer"}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
