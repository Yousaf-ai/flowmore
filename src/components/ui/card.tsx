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
    "rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] transition-[transform,border-color,background-color,box-shadow] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:border-[var(--accent)]/30 hover:shadow-[0_8px_28px_rgb(15_23_42/0.08)] sm:p-6",
    href && "block text-inherit no-underline",
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
