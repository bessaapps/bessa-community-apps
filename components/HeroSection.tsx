import Play from "@/assets/images/play.png";
import AppStore from "@/assets/images/app-store.png";
import Android from "@/assets/images/android.png";
import Apple from "@/assets/images/ios.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className={"h-screen px-4"}>
      <div className={"max-w-5/8 absolute bottom-0 left-1/8"}>
        <Image
          src={AppStore}
          alt={"Apple App Store Logo"}
          sizes={"(max-width: 640px) 100vw, 945px"}
          fetchPriority={"high"}
          priority
        />
      </div>
      <div className={"max-w-1/2 absolute top-1/16 right-0"}>
        <Image
          src={Play}
          alt={"Google Play Logo"}
          sizes={"(max-width: 640px) 100vw, 756px"}
          fetchPriority={"high"}
          priority
        />
      </div>
      <div className={"max-w-1/4 absolute right-1/16 bottom-1/32"}>
        <Image
          src={Android}
          alt={"Android Logo"}
          sizes={"(max-width: 640px) 100vw, 378px"}
          fetchPriority={"high"}
          priority
        />
      </div>
      <div className={"max-w-1/4 absolute top-1/8 left-1/16"}>
        <Image
          src={Apple}
          alt={"iOS Logo"}
          sizes={"(max-width: 640px) 100vw, 378px"}
          fetchPriority={"high"}
          priority
        />
      </div>
    </div>
  );
}
