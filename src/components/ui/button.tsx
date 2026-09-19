import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
};

const variants = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-fg)] hover:opacity-90 shadow-[var(--shadow)]",
  secondary:
    "bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface-2)] shadow-[var(--shadow)]",
  ghost: "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  disabled,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-[opacity,transform,background-color,color] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
