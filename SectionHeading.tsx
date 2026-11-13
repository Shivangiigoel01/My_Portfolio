export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
