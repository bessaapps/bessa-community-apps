import Link from "next/link";
import { formatTitle } from "@/lib/helpers";
import { Button } from "@/components/ui/button";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { bookingLink } from "@/lib/constants";

export default function CTA() {
  return (
    <div className={"h-full p-4"} id={"contact"}>
      <div
        className={"flex flex-col justify-center h-full bg-muted rounded-2xl"}
      >
        <div className={"max-w-[1200] mx-auto py-16 sm:py-32 px-4"}>
          <div>
            <div className={"text-primary text-6xl leading-[1.2] mb-4"}>
              Tell me about your Idea__
            </div>
            <p className={"text-muted-foreground sm:text-xl"}>
              Reach out to share what you&apos;re building, and I&apos;ll help
              you simplify the process and move from concept to launch with
              confidence.
            </p>
            <div className={"flex flex-col sm:flex-row gap-4 sm:gap-8 py-4"}>
              <Link href={bookingLink} target={"_blank"}>
                <Button size={"lg"}>Get Started Now!</Button>
              </Link>
              <div className={"flex items-center sm:gap-1"}>
                <p className={"font-bold text-muted-foreground sm:text-2xl"}>
                  topher
                </p>
                <p className={"font-bold text-primary sm:text-3xl "}>@</p>
                <p className={"font-bold text-muted-foreground sm:text-2xl"}>
                  bessaapps.com
                </p>
              </div>
            </div>
            <div className={"flex justify-end gap-4 mb-4"}>
              <Link href={"https://x.com/bessaapps"}>
                <BsTwitterX className={"text-2xl text-muted-foreground"} />
              </Link>
              <Link href={"https://www.linkedin.com/in/topherjamesknoll"}>
                <BsLinkedin className={"text-2xl text-muted-foreground"} />
              </Link>
              <Link href={"https://github.com/bessaapps"}>
                <BsGithub className={"text-2xl text-muted-foreground"} />
              </Link>
            </div>
            <p className={"text-right text-muted-foreground"}>
              &copy; Copyright{" "}
              <Link href={"/"} title={formatTitle("")}>
                Bessa Community Apps, LLC
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
