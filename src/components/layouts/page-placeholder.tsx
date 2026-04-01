type PagePlaceholderProps = {
  title: string;
  description?: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-palms-cream md:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 text-lg text-palms-cream/85">{description}</p>
      ) : null}
      <p className="mt-6 text-sm text-palms-cream/65">
        Page content is coming soon. Use the navigation above to explore other sections.
      </p>
    </div>
  );
}
