import Play from "@/assets/images/play.png";
import AppStore from "@/assets/images/app-store.png";
import Android from "@/assets/images/android.png";
import Apple from "@/assets/images/ios.png";
import Image from "next/image";
import { bookingLink } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className={"relative h-screen px-4"}>
      <div
        className={
          "max-w-1/2 sm:max-w-1/2 absolute bottom-52 sm:top-1/16 right-4 sm:right-16"
        }
      >
        <Image
          src={Play}
          alt={"Google Play Logo"}
          sizes={"(max-width: 640px) 100vw, 1504px"}
          fetchPriority={"high"}
          priority
        />
      </div>
      <div
        className={
          "max-w-3/4 sm:max-w-5/8 absolute bottom-8 sm:bottom-0 left-1/8"
        }
      >
        <Image
          src={AppStore}
          alt={"Apple App Store Logo"}
          sizes={"(max-width: 640px) 100vw, 1880px"}
          fetchPriority={"high"}
          priority
        />
      </div>
      <div
        className={"max-w-1/4 hidden sm:block absolute right-1/16 bottom-1/32"}
      >
        <Image
          src={Apple}
          alt={"iOS Logo"}
          sizes={"(max-width: 640px) 100vw, 752px"}
          fetchPriority={"high"}
          priority
        />
      </div>
      <div className={"max-w-3/16 hidden sm:block absolute top-1/8 left-1/8"}>
        <Image
          src={Android}
          alt={"Android Logo"}
          sizes={"(max-width: 640px) 100vw, 378px"}
          fetchPriority={"high"}
          priority
        />
      </div>
      <div
        className={
          "absolute inset-0 bg-linear-to-b from-transparent to-background"
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
          <p className={"text-primary text-xl max-w-[575] mb-8"}>
            Building revolutionary cross-platform apps for innovators,
            organizations, and communities, and publishing them to the Apple App
            Store and Google Play.
          </p>
          <div>
            <Link
              href={bookingLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <Button size={"lg"} className={"cursor-pointer hover:scale-110"}>
                Start my Project!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
