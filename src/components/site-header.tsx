"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const links = [
  { href: "/platforms", label: "Platforms" },
  { href: "/compare", label: "Compare" },
  { href: "/businesses", label: "Businesses" },
  { href: "/workflows", label: "Workflows" },
  { href: "/discover", label: "Discover" },
  { href: "/picker", label: "Picker" },
  { href: "/scenarios", label: "Scenarios" },
  { href: "/power-user", label: "Power-user" },
  { href: "/sandbox", label: "Sandbox" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Every page now uses the neumorphic "stage" canvas, so the header
  // always uses the borderless home-bar variant for consistency.
  const onStage = true;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 backdrop-blur-xl",
        onStage ? "home-bar" : "border-b border-[var(--border)] bg-[var(--bg)]/85",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="text-[1.05rem] font-semibold tracking-[-0.03em] text-[var(--text)] no-underline"
        >
          flowmore
        </Link>

        <nav
          className="flex items-center gap-0.5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-[42rem] md:flex"
          aria-label="Primary"
        >
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] no-underline",
                  active
                    ? "bg-[var(--accent-muted)] text-[var(--accent)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/practice"
            variant="secondary"
            className="hidden !px-4 !py-2 text-xs sm:inline-flex"
          >
            Practise
          </Button>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--border)] bg-[var(--bg)] px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {[...links, { href: "/practice", label: "Practise" }].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[var(--radius-sm)] px-3 py-3 text-sm font-medium text-[var(--text)] no-underline hover:bg-[var(--surface-2)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
