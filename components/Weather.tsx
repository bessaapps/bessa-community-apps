"use client";

import { useEffect, useState } from "react";
import axios from "axios";

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
        setShortForecast(response.data?.periods?.[0]?.shortForecast);
        setIsDaytime(response.data?.periods?.[0]?.isDaytime);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className={"fixed top-0 left-0 w-full h-full z-10"}>
        <div className={"max-w-[1300] mx-auto flex justify-end"}>
          <p className={"text-xs hidden sm:block z-20"}>
            Las Vegas&nbsp;&nbsp;|&nbsp;&nbsp;{isDaytime ? "☀︎" : "⏾"}{" "}
            {shortForecast}
          </p>
        </div>
      </div>
    </>
  );
}
