export default function GradientHeading({
  children
}: {
  children: React.ReactNode;
}) {
  return <p className={"text-5xl leading-[1.2] mb-4"}>{children}</p>;
}
