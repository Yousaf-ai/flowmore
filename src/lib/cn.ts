type ClassValue =
  | string
  | false
  | null
  | undefined
  | ClassValue[]
  | Record<string, boolean | undefined | null>;

/** Merge class names without an extra dependency. */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];

  const walk = (v: ClassValue) => {
    if (!v) return;
    if (typeof v === "string") {
      out.push(v);
      return;
    }
    if (Array.isArray(v)) {
      v.forEach(walk);
      return;
    }
    if (typeof v === "object") {
      for (const [key, ok] of Object.entries(v)) {
        if (ok) out.push(key);
      }
    }
  };

  inputs.forEach(walk);
  return out.join(" ");
}
