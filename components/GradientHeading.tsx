export default function GradientHeading({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <p
      className={
        "text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-foreground text-6xl leading-[1.2] mb-4"
      }
    >
      {children}
    </p>
  );
}
