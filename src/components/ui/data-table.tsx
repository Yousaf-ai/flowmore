import { cn } from "@/lib/cn";

export function DataTable({
  headers,
  rows,
  minWidth = "36rem",
  stickyFirst,
}: {
  headers: string[];
  rows: string[][];
  minWidth?: string;
  stickyFirst?: boolean;
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
      <table
        className="w-full border-collapse text-left text-sm"
        style={{ minWidth }}
      >
        <thead>
          <tr className="border-b border-[var(--border)] bg-[var(--surface-2)]">
            {headers.map((h, i) => (
              <th
                key={h}
                className={cn(
                  "px-4 py-3 font-semibold text-[var(--text)]",
                  stickyFirst && i === 0 && "sticky left-0 z-10 bg-[var(--surface-2)]",
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[var(--border)] transition-colors last:border-0 hover:bg-[var(--surface-2)]/50"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    "px-4 py-3 align-top leading-relaxed",
                    j === 0
                      ? "font-medium text-[var(--text)]"
                      : "text-[var(--text-secondary)]",
                    stickyFirst && j === 0 && "sticky left-0 z-10 bg-[var(--surface)]",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StatGrid({
  items,
}: {
  items: { metric: string; figure: string }[];
}) {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.metric}
          className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-secondary)]">
            {item.metric}
          </p>
          <p className="mt-2 text-base font-semibold leading-snug tracking-[-0.02em] text-[var(--text)]">
            {item.figure}
          </p>
        </li>
      ))}
    </ul>
  );
}
