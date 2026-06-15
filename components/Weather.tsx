"use client";

import { useEffect, useState } from "react";

export default function Weather() {
  const [shortForecast, setShortForecast] = useState("");
  const [isDaytime, setIsDaytime] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.weather.gov/gridpoints/VEF/123,97/forecast/hourly"
      );
      const data = await response.json();

      setShortForecast(data?.properties?.periods?.[0]?.shortForecast);
      setIsDaytime(data?.properties?.periods?.[0]?.isDaytime);
    })();
  }, []);

  return (
    <>
      <div className={"fixed top-0 left-0 w-full z-10"}>
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
