import HeroImage from "@/assets/images/hero.png";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import { bookingLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          <h1 className={"text-5xl font-bold leading-[1.1] max-w-[575]"}>
            From Impactful Concept to App Store Launch
          </h1>
          <p className={"text-xl max-w-[575] mb-8"}>
            Building revolutionary cross-platform apps for innovators,
            organizations, and communities, and publishing them to the Apple App
            Store and Google Play.
          </p>
          <div className={"flex items-center"}>
            <Link href={"#services"} title={"Services"} className={"mr-4"}>
              <Button className={"cursor-pointer hover:scale-110"}>
                Learn More
              </Button>
            </Link>
            <div className={"relative h-10 w-10 mr-2"}>
              <div
                className={
                  "h-10 w-10 relative rounded-full overflow-hidden b-10"
                }
              >
                <Image
                  src={Me}
                  alt={
                    "Headshot of a smiling developer with glasses and a mustache, an expert providing custom mobile app development services."
                  }
                  className={"object-cover"}
                  fill
                />
              </div>
              <div
                className={
                  "bg-green-500 h-3 w-3 absolute bottom-0 right-0 rounded-full"
                }
              />
            </div>
            <p className={"text-primary text-xs max-w-[160]"}>
              Free discovery call to clarify your goals{" "}
              <span className={"font-bold"}>
                <Link
                  href={bookingLink}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  Schedule now
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
