"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Weather() {
  const [shortForecast, setShortForecast] = useState("");
  const [isDaytime, setIsDaytime] = useState("");

  useEffect(() => {
    axios
      .get("https://api.weather.gov/gridpoints/VEF/123,97/forecast/hourly")
      .then((response) => {
        console.log(response.data);
        setShortForecast(
          response.data?.properties?.periods?.[0]?.shortForecast
        );
        setIsDaytime(response.data?.properties?.periods?.[0]?.isDaytime);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <p className={"text-xs text-center fixed top-0 left-[50%]"}>
      Las Vegas, NV&nbsp;&nbsp;|&nbsp;&nbsp;36.155279 N. 115.113745 W.
      <br />
      {shortForecast}
    </p>
  );
}
