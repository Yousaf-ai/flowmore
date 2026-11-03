"use client";

import { platformsByEcosystem } from "@/content/platforms";
import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  label?: string;
  value: string;
  onChange: (id: string) => void;
  includeAny?: boolean;
  className?: string;
};

export function PlatformSelect({
  id = "platform-select",
  label = "Platform",
  value,
  onChange,
  includeAny,
  className,
}: Props) {
  const { western, chinese } = platformsByEcosystem();

  return (
    <label className={cn("flex flex-col gap-1.5 text-sm", className)}>
      <span className="font-medium text-[var(--text-secondary)]">{label}</span>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="fm-select h-11 w-full max-w-md rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 text-[var(--text)] shadow-[var(--shadow)]"
      >
        {includeAny && <option value="any">Any platform</option>}
        <optgroup label="Western">
          {western.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
              {p.vendor ? ` · ${p.vendor}` : ""}
            </option>
          ))}
        </optgroup>
        <optgroup label="Chinese">
          {chinese.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
              {p.vendor ? ` · ${p.vendor}` : ""}
            </option>
          ))}
        </optgroup>
      </select>
    </label>
  );
}

export function PlatformChipPicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (id: string) => void;
}) {
  const { western, chinese } = platformsByEcosystem();

  return (
    <div className="space-y-4">
      {(
        [
          ["Western", western],
          ["Chinese", chinese],
        ] as const
      ).map(([label, list]) => (
        <div key={label}>
          <p className="section-label">{label}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {list.map((p) => {
              const active = p.id === value;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onChange(p.id)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors duration-200",
                    active
                      ? "border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--accent)]"
                      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40 hover:text-[var(--text)]",
                  )}
                >
                  {p.name}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
