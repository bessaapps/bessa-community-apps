import Play from "@/assets/images/play.png";
import AppStore from "@/assets/images/app-store.png";
import Android from "@/assets/images/android.png";
import Apple from "@/assets/images/ios.png";
import Image from "next/image";

export default function HeroSection({
  animationDelay
}: {
  animationDelay: string;
}) {
  return (
    <>
      <div
        className={`max-w-7xl grid grid-cols-1 grid-rows-1 opacity-0 animate-blur-in-fade-in  mx-auto px-4 sm:px-0`}
        style={{ animationDelay }}
      >
        <div className={"flex col-start-1 row-start-1"}>
          <div className={"basis-5/8"}>
            <Image
              src={AppStore}
              alt={"Apple App Store Logo"}
              sizes={"(max-width: 640px) 100vw, 800px"}
              fetchPriority={"high"}
              priority
            />
          </div>
        </div>
        <div
          className={"flex justify-end col-start-1 row-start-1 pt-20 sm:pt-65"}
        >
          <div className={"basis-1/2"}>
            <Image
              src={Play}
              alt={"Google Play Logo"}
              sizes={"(max-width: 640px) 100vw, 640px"}
            />
          </div>
        </div>
        <div
          className={
            "right-20 flex justify-end col-start-1 row-start-1 pt-5 pr-5 sm:pt-25 sm:pr-10"
          }
        >
          <div className={"basis-1/4"}>
            <Image
              src={Android}
              alt={"Android Logo"}
              sizes={"(max-width: 640px) 100vw, 310px"}
            />
          </div>
        </div>
        <div
          className={
            "left-20 flex col-start-1 row-start-1 pt-40 pl-10 sm:pt-115 sm:pl-15"
          }
        >
          <div className={"basis-1/4"}>
            <Image
              src={Apple}
              alt={"iOS Logo"}
              sizes={"(max-width: 640px) 100vw, 305px"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
