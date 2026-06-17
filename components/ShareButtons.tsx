import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsLinkedin, BsReddit, BsSend, BsTwitterX } from "react-icons/bs";

export default function ShareButtons({
  url,
  title
}: {
  url: string;
  title: string;
}) {
  return (
    <div className={"flex gap-2"}>
      <Link
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURI(url)}`}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <Button className={"cursor-pointer"}>
          <BsLinkedin />
        </Button>
      </Link>
      <Link
        href={`https://x.com/intent/post?url=${encodeURI(url)}&text=${encodeURI(title)}`}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <Button className={"cursor-pointer"}>
          <BsTwitterX />
        </Button>
      </Link>
      <Link
        href={`https://www.reddit.com/submit?url=${encodeURI(url)}&title=${encodeURI(title)}`}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <Button className={"cursor-pointer"}>
          <BsReddit />
        </Button>
      </Link>
      <Link
        href={`mailto:?subject=${encodeURI(title)}&body=${encodeURI(url)}`}
        target={"_blank"}
        rel={"noopener noreferrer"}
      >
        <Button className={"cursor-pointer"}>
          <BsSend />
        </Button>
      </Link>
    </div>
  );
}
