import Link from "next/link";
import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const classes = cn(
    "rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] transition-[transform,border-color,background-color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
    href && "hover:border-[var(--accent)]/40 hover:-translate-y-0.5 block no-underline text-inherit",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
