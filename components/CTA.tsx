import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { formatTitle } from "@/lib/helpers";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <div className={"bg-muted"}>
      <div
        className={
          "flex fle-col items-center min-h-dvh max-w-7xl mx-auto py-16 sm:py-32 px-4"
        }
      >
        <div>
          <div className={"text-primary text-6xl leading-[1.2] mb-4"}>
            Start with a Free Discovery Session
          </div>
          <p className={"text-muted-foreground mb-4"}>
            Every project begins with a conversation—no pressure, no commitment.
            At Bessa Apps, I offer a free Discovery phase designed to uncover
            your goals, explore your vision, and pitch tailored solutions that
            fit. As a react native app developer, I believe the best
            partnerships start with listening, not selling. Whether you&apos;re
            dreaming up a sleek iOS and Android app or planning a custom web
            development project, this first step helps us identify the
            opportunities that matter most to your business and your customers.
          </p>
          <p className={"text-muted-foreground mb-4"}>
            Think of Discovery as your launchpad. It&apos;s where strategy meets
            possibility, giving you clarity and direction before any code is
            written. From refining your concept to mapping out features like
            in-app purchases, direct messaging, or authentication, I&apos;ll
            guide you through the options with transparency and expertise. The
            result will be a clear path forward, backed by app development
            services that balance innovation with practicality, so you can move
            toward launch with confidence.
          </p>
          <div className={"flex flex-col sm:flex-row gap-4 sm:gap-8 py-4"}>
            <Link
              href={"https://calendar.app.google/fCR1Xnhv9FUfXznPA"}
              target={"_blank"}
            >
              <Button size={"lg"}>Let&apos;s Talk!</Button>
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
  );
}
