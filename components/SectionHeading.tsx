import { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <>
      <h2 className={"text-accent-foreground font-bold mb-4"}>{children}</h2>
      <div className={"divider"}></div>
    </>
  );
}
