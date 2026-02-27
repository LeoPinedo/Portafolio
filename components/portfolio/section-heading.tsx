export function SectionHeading({
  number,
  title,
}: {
  number: string
  title: string
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <h2 className="flex items-center gap-2 text-2xl font-semibold text-foreground">
        <span className="font-mono text-lg text-primary">{number}.</span>
        {title}
      </h2>
      <div className="hidden h-px flex-1 bg-border sm:block" />
    </div>
  )
}
