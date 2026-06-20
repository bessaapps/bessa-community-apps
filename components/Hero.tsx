"use client";

import Play from "@/assets/images/play.png";
import AppStore from "@/assets/images/app-store.png";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className={"max-w-7xl flex items-center mx-auto"}>
        <div>
          <Image src={AppStore} alt={"Apple App Store Logo"} />
        </div>
        <div>
          <Image src={Play} alt={"Google Play Logo"} />
        </div>
      </div>
    </>
  );
}
