import { ReactNode } from "react";

export default function Section({
  id,
  children
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={"max-w-7xl px-4 py-24 mx-auto"}>
      {children}
    </section>
  );
}
