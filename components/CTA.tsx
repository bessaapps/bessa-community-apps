import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { formatTitle } from "@/lib/helpers";
import { Button } from "@/components/ui/button";

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
            <p className={"text-muted-foreground"}>
              If you&apos;re ready to bring your idea to life, I&apos;d love to
              hear what you&apos;re building. I&apos;m here to simplify the
              process, offer clear next steps, and help you move forward with
              confidence. Whether you have a loose concept or a fully formed
              plan, I&apos;ll guide you through the path to launch, one step at
              a time.
            </p>
            <div className={"flex flex-col sm:flex-row gap-4 sm:gap-8 py-4"}>
              <Link
                href={"https://calendar.app.google/fCR1Xnhv9FUfXznPA"}
                target={"_blank"}
              >
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
              <Link href={"https://www.linkedin.com/in/topherjamesknoll"}>
                <Linkedin color={"var(--color-muted-foreground)"} />
              </Link>
              <Link href={"https://github.com/bessaapps"}>
                <Github color={"var(--color-muted-foreground)"} />
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
