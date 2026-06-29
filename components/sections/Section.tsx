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
        <section id={id} className={"max-w-7xl px-4 my-24 mx-auto"}>
          {children}
        </section>
      </div>
    </>
  );
}
