"use client";

import { useState } from "react";
import dayjs from "dayjs";

export default function Clock() {
  const [string, setString] = useState("");

  setInterval(() => {
    setString(dayjs().format("hh:mm:ss A"));
  }, 1000);

  return (
    <div className={"h-screen fixed top-0 right-0 [writing-mode:vertical-rl]"}>
      <p className={"text-xs text-center"}>
        Made with love.&nbsp;&nbsp;|&nbsp;&nbsp;36.155279 N. 115.113745
        W.&nbsp;&nbsp;|&nbsp;&nbsp;{string}
      </p>
    </div>
  );
}
