"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { href: "/practice", label: "Practise" },
  { href: "/sandbox", label: "Sandbox" },
];

export function SiteFooter() {
  const pathname = usePathname();
  // Every page now uses the neumorphic "stage" canvas.
  const onStage = true;

  return (
    <footer className={cn("site-footer", onStage && "is-home")}>
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link href="/" className="site-footer-name">
            flowmore
          </Link>
          <p className="site-footer-copy">© {new Date().getFullYear()}</p>
        </div>
        <nav className="site-footer-nav" aria-label="Footer">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn("site-footer-link", active && "is-on")}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
