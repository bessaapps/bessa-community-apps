import Link from "next/link";
import { Button } from "@/components/ui/button";
import Me from "@/assets/images/me.png";
import Image from "next/image";
import { Zap } from "lucide-react";
import { bookingLink } from "@/lib/constants";

export default function CTA({
  href,
  title,
  anchor
}: {
  href: string;
  title: string;
  anchor: string;
}) {
  return (
    <div className={"flex flex-col sm:flex-row sm:items-center gap-4"}>
      <Link href={href} title={title}>
        <Button className={"cursor-pointer hover:scale-110"}>{anchor}</Button>
      </Link>
      <div className={"flex items-center gap-4"}>
        <div className={"relative h-f aspect-square w-10"}>
          <div
            className={"h-full w-full relative rounded-full overflow-hidden"}
          >
            <Image
              src={Me}
              alt={
                "Headshot of a smiling developer with glasses and a mustache, an expert providing custom mobile app development services."
              }
              className={"object-cover"}
              fill
            />
          </div>
          <div
            className={
              "bg-green-700 h-4 w-4 absolute bottom-0 right-0 flex items-center justify-center rounded-full translate-x-1/4 translate-y-1/4"
            }
          >
            <Zap color={"white"} size={12} />
          </div>
        </div>
        <p className={"text-primary text-xs max-w-[160]"}>
          Free discovery call to clarify your goals{" "}
          <span className={"font-bold"}>
            <Link
              href={bookingLink}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              Schedule now
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}
