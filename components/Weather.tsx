"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Weather() {
  const [shortForecast, setShortForecast] = useState("");
  const [isDaytime, setIsDaytime] = useState("");

  useEffect(() => {
    axios
      .get("https://api.weather.gov/gridpoints/VEF/123,97/forecast/hourly", {
        headers: {
          "User-Agent": "BessaCommunityApps (topher@bessaapps.com)",
          Accept: "application/ld+json"
        }
      })
      .then((response) => {
        console.log(response.data);
        setShortForecast(response.data?.periods?.[0]?.shortForecast);
        setIsDaytime(response.data?.periods?.[0]?.isDaytime);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <p className={"text-xs fixed top-0 left-[50%] hidden sm:block"}>
        Las Vegas, NV&nbsp;&nbsp;|&nbsp;&nbsp;36.155279 N. 115.113745 W.
        <br />
        {isDaytime ? "☀︎" : "⏾"} {shortForecast}
      </p>
      <div className={"fixed top-0 left-[75%]"}>
        <Link
          href={"https://calendar.app.google/fCR1Xnhv9FUfXznPA"}
          target={"_blank"}
        >
          <p className={"font-bold"}>Let&apos;s Talk!</p>
        </Link>
      </div>
    </>
  );
}
