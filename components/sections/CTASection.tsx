import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { bookingLink, keyword, title } from "@/lib/constants";
import { AiOutlineCalendar } from "react-icons/ai";

export default function CTASection() {
  return (
    <div className={"min-h-[calc(100vh-64px)] flex p-4"} id={"contact"}>
      <div
        className={
          "bg-primary flex grow items-center justify-center rounded-2xl"
        }
      >
        <div className={"max-w-7xl py-16 sm:py-32 px-4 sm:px-8"}>
          <div
            className={
              "text-background text-4xl sm:text-6xl leading-[1.2] mb-4"
            }
          >
            Stop dreaming, start launching.
          </div>
          <p className={"text-secondary sm:text-xl"}>
            Ready to transform your vision into a cross-platform reality? Book a
            call to discuss your project goals, timelines, and how we can bring
            your app to life on iOS, Android, and the web.
          </p>
          <div className={"flex flex-col gap-4 py-8"}>
            <div>
              <Link
                href={bookingLink}
                target={"_blank"}
                rel={"noopener noreferrer"}
              >
                <div
                  className={
                    "w-fit h-fit relative inline-flex rounded-md overflow-hidden"
                  }
                >
                  {/* Animated gradient border */}
                  <span
                    className={
                      "absolute inset-0 rounded-md pointer-events-none overflow-hidden"
                    }
                  >
                    <span
                      className={
                        "absolute -inset-full animate-spin animation-duration-[4s] bg-[conic-gradient(from_0deg,#000000_0deg,#000000_40deg,transparent_60deg)]"
                      }
                    />
                  </span>
                  {/* Button */}
                  <Button
                    variant={"secondary"}
                    size={"lg"}
                    className={
                      "relative z-10 m-0.5 rounded-md bg-background dark:bg-background hover:bg-background dark:hover:bg-background shadow-none cursor-pointer"
                    }
                  >
                    <AiOutlineCalendar className="size-4" />
                    Book a Call
                  </Button>
                </div>
              </Link>
            </div>
            <p className={"text-secondary"}>
              <Link href={"mailto:topher@bessaapps.com"}>
                topher@bessaapps.com
              </Link>
            </p>
          </div>
          <div className={"flex justify-end gap-4 mb-4"}>
            <Link
              href={"https://linkedin.com/company/bessaapps"}
              title={"LinkedIn"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <BsLinkedin className={"text-xl text-muted"} />
            </Link>
            <Link
              href={"https://github.com/bessaapps"}
              title={"GitHub"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <BsGithub className={"text-xl text-muted"} />
            </Link>
            <Link
              href={"https://x.com/bessaapps"}
              title={"X"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <BsTwitterX className={"text-xl text-muted"} />
            </Link>
          </div>
          <p className={"text-sm text-right accent-muted"}>
            &copy; Copyright{" "}
            <Link href={"/public"} title={`${keyword} - ${title}`}>
              Bessa Community Apps, LLC
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
