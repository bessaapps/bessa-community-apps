"use client";

import { useState } from "react";
import dayjs from "dayjs";

export default function Clock() {
  const [string, setString] = useState("");

  const updateClock = () => {
    setString(dayjs().format("hh:mm:ss A"));
  };

  setInterval(updateClock, 1000);

  return (
    <div className={"h-screen fixed top-0 right-0 [writing-mode:vertical-rl]"}>
      <p className={"text-xs text-center"}>{string}</p>
    </div>
  );
}
