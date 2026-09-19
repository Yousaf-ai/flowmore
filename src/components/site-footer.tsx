import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} flowmore — take any AI platform further.
        </p>
        <div className="flex gap-4 text-sm">
          <Link href="/platforms" className="text-[var(--text-secondary)] no-underline hover:text-[var(--text)]">
            Platforms
          </Link>
          <Link href="/sandbox" className="text-[var(--text-secondary)] no-underline hover:text-[var(--text)]">
            Sandbox
          </Link>
          <Link href="/scenarios" className="text-[var(--text-secondary)] no-underline hover:text-[var(--text)]">
            Scenarios
          </Link>
        </div>
      </div>
    </footer>
  );
}
