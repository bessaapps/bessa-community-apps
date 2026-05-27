"use client";

import {
  EmailShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton
} from "next-share";
import { BsLinkedin, BsReddit, BsSend, BsTwitterX } from "react-icons/bs";
import { Button } from "@/components/ui/button";

export default function ShareButtons({
  url,
  title
}: {
  url: string;
  title: string;
}) {
  return (
    <div className={"flex gap-2"}>
      <RedditShareButton url={url} title={title}>
        <Button size={"sm"} className={"cursor-pointer"}>
          <BsReddit />
        </Button>
      </RedditShareButton>
      <TwitterShareButton url={url} title={title}>
        <Button size={"sm"} className={"cursor-pointer"}>
          <BsTwitterX />
        </Button>
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <Button size={"sm"} className={"cursor-pointer"}>
          <BsLinkedin />
        </Button>
      </LinkedinShareButton>
      <EmailShareButton url={url} subject={title}>
        <Button size={"sm"} className={"cursor-pointer"}>
          <BsSend />
        </Button>
      </EmailShareButton>
    </div>
  );
}
