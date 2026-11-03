import { cn } from "@/lib/cn";

export function PageShell({
  children,
  className,
  narrow,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto px-4 py-12 sm:px-6 sm:py-16",
        narrow ? "max-w-3xl" : "max-w-6xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium tracking-wide text-[var(--accent)]">{children}</p>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className={cn("text-display text-[var(--text)]", eyebrow && "mt-2")}>{title}</h1>
      {description && <div className="text-body-lg mt-4">{description}</div>}
      {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
    </header>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("mt-16 scroll-mt-24 sm:mt-20", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  title,
  description,
  as: Tag = "h2",
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  as?: "h2" | "h3";
}) {
  return (
    <div className="max-w-2xl">
      <Tag
        className={
          Tag === "h2"
            ? "text-title text-[var(--text)]"
            : "text-lg font-semibold tracking-[-0.02em] text-[var(--text)]"
        }
      >
        {title}
      </Tag>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
      )}
    </div>
  );
}

export function CtaBand({
  title,
  description,
  actions,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <section className="mt-20 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-6 py-10 text-center shadow-[var(--shadow)] sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none mx-auto mb-2 h-px w-24 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60"
      />
      <h2 className="text-title text-[var(--text)]">{title}</h2>
      {description && (
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[var(--text-secondary)]">
          {description}
        </p>
      )}
      {actions && <div className="mt-6 flex flex-wrap justify-center gap-3">{actions}</div>}
    </section>
  );
}

export function ChipNav({
  items,
  label = "Sections",
}: {
  items: { href: string; label: string }[];
  label?: string;
}) {
  return (
    <nav
      aria-label={label}
      className="mt-10 flex flex-wrap gap-2 border-y border-[var(--border)] py-4"
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3.5 py-1.5 text-xs font-medium text-[var(--text-secondary)] no-underline transition-colors hover:border-[var(--accent)]/40 hover:text-[var(--text)]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
