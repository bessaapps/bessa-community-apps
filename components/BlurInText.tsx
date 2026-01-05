export default function BlurInText({
  offset = 0,
  multiplier = 100,
  children
}: {
  offset?: number;
  multiplier?: number;
  children: string;
}) {
  return children.split(" ").map((word: string, index: number) => (
    <span
      key={index}
      className={`opacity-0 animate-blur-in-fade-in`}
      style={{
        animationDelay: `${offset + index * multiplier}ms`
      }}
    >
      {word}{" "}
    </span>
  ));
}
