type PagePlaceholderProps = {
  title: string;
  description?: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h1>
      {description ? (
        <p className="mt-4 text-lg text-foreground/85">{description}</p>
      ) : null}
      <p className="mt-6 text-sm text-foreground/70">
        Page content is coming soon. Use the navigation above to explore other sections.
      </p>
    </div>
  );
}
