import Link from "next/link";
import { formatTitle } from "@/lib/helpers";
import { Button } from "@/components/ui/button";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { bookingLink } from "@/lib/constants";

export default function CTA() {
  return (
    <div className={"min-h-[calc(100vh-64px)] flex p-4"} id={"contact"}>
      <div
        className={
          "bg-primary flex grow items-center justify-center rounded-2xl"
        }
      >
        <div className={"max-w-[1300] py-16 sm:py-32 px-4"}>
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
            <Link
              href={bookingLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <Button
                variant={"secondary"}
                size={"lg"}
                className={"cursor-pointer hover:scale-110"}
              >
                Book a Call
              </Button>
            </Link>
            <p className={"text-secondary"}>topher@bessaapps.com</p>
          </div>
          <div className={"flex justify-end gap-4 mb-4"}>
            <Link
              href={"https://linkedin.com/company/bessaapps"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <BsLinkedin className={"text-xl text-muted"} />
            </Link>
            <Link
              href={"https://github.com/bessaapps"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <BsGithub className={"text-xl text-muted"} />
            </Link>
            <Link
              href={"https://x.com/bessaapps"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <BsTwitterX className={"text-xl text-muted"} />
            </Link>
          </div>
          <p className={"text-sm text-right accent-muted"}>
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
