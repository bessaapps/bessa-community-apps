import { ReactNode } from "react";

export default function Section({
  id,
  containerClassName,
  children
}: {
  id?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <>
      <div className={containerClassName}>
        {/* Must use vertical padding instead of margin for anchor links to work properly. */}
        <section id={id} className={"max-w-7xl px-4 py-24 mx-auto"}>
          {children}
        </section>
      </div>
    </>
  );
}
