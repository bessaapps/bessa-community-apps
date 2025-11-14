export default function GradientHeading({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <p
      className={
        "animate-text text-transparent bg-clip-text bg-gradient-to-tr from-muted-foreground via-primary to-foreground text-5xl leading-[1.2] mb-4"
      }
    >
      {children}
    </p>
  );
}
