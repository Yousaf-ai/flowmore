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
    <div className="home">
      <div className={cn("biz-inner", className)}>
        {narrow ? <div className="mx-auto w-full max-w-3xl">{children}</div> : children}
      </div>
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="biz-kicker">{children}</p>;
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
    <header className={cn("home-hero", className)}>
      {eyebrow && <p className="biz-kicker">{eyebrow}</p>}
      <h1 className="home-title" style={{ maxWidth: "20ch" }}>
        {title}
      </h1>
      {description && <p className="biz-lead">{description}</p>}
      {actions && <div className="home-actions">{actions}</div>}
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
    <section id={id} className={cn("home-block scroll-mt-24", className)}>
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
      <Tag className={Tag === "h2" ? "home-heading" : "biz-title"}>{title}</Tag>
      {description && (
        <p className="biz-lead" style={{ fontSize: "0.95rem", marginTop: "0.6rem" }}>
          {description}
        </p>
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
    <section className="fm-panel home-block px-6 py-10 text-center sm:px-10">
      <div
        aria-hidden
        className="pointer-events-none mx-auto mb-2 h-px w-24 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60"
      />
      <h2 className="biz-title" style={{ fontSize: "1.5rem" }}>
        {title}
      </h2>
      {description && (
        <p className="biz-lead mx-auto" style={{ marginTop: "0.6rem", maxWidth: "32ch" }}>
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
    <nav aria-label={label} className="home-chips home-block">
      {items.map((item) => (
        <a key={item.href} href={item.href} className="home-chip">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
