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
      <LinkedinShareButton url={url}>
        <Button className={"cursor-pointer"}>
          <BsLinkedin />
        </Button>
      </LinkedinShareButton>
      <TwitterShareButton url={url} title={title}>
        <Button className={"cursor-pointer"}>
          <BsTwitterX />
        </Button>
      </TwitterShareButton>
      <RedditShareButton url={url} title={title}>
        <Button className={"cursor-pointer"}>
          <BsReddit />
        </Button>
      </RedditShareButton>
      <EmailShareButton url={url} subject={title}>
        <Button className={"cursor-pointer"}>
          <BsSend />
        </Button>
      </EmailShareButton>
    </div>
  );
}
