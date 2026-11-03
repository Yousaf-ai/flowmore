import Link from "next/link";

const columns = [
  {
    title: "Explore",
    links: [
      { href: "/platforms", label: "Platforms" },
      { href: "/compare", label: "Compare" },
      { href: "/businesses", label: "Businesses report" },
      { href: "/scenarios", label: "Scenarios" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/practice", label: "Prompt Quality Score" },
      { href: "/discover", label: "Feature discovery" },
      { href: "/picker", label: "Platform picker" },
      { href: "/workflows", label: "Workflows" },
      { href: "/power-user", label: "Power user" },
    ],
  },
  {
    title: "Practice",
    links: [
      { href: "/sandbox", label: "Sandbox" },
      { href: "/tools", label: "All tools" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--surface)]/60 py-12 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold tracking-[-0.02em] text-[var(--text)]">flowmore</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              Take any AI platform further—capability maps, comparisons, and prompt practice across
              Western and Chinese stacks.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="section-label">{col.title}</p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--text-secondary)] no-underline transition-colors hover:text-[var(--text)]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} flowmore
        </p>
      </div>
    </footer>
  );
}
