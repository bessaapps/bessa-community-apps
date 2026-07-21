import HeroImage from "@/assets/images/hero.png";
import Image from "next/image";
import CTA from "@/components/CTA";

export default function HeroSection() {
  return (
    <div className={"relative h-screen px-4"}>
      <Image
        src={HeroImage}
        alt={"Apple App Store, Google Play, iOS, and Android Logos"}
        className={"object-contain"}
        fetchPriority={"high"}
        priority
        fill
      />
      <div
        className={
          "absolute inset-0 bg-linear-to-b from-background/50 to-background"
        }
      />
      <div
        className={
          "h-screen max-w-7xl absolute top-0 right-0 left-0 flex items-center px-8 mx-auto"
        }
      >
        <div className={"flex flex-col gap-4"}>
          <h1
            className={
              "text-4xl sm:text-5xl font-bold leading-[1.1] max-w-[600]"
            }
          >
            From Impactful Concept to App Store Launch
          </h1>
          <p className={"text-xl max-w-[575] mb-8"}>
            Building revolutionary cross-platform apps for innovators,
            organizations, and communities, and publishing them to the Apple App
            Store and Google Play.
          </p>
          <CTA href={"#services"} title={"Services"} anchor={"Learn More"} />
        </div>
      </div>
    </div>
  );
}
