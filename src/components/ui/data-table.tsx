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
    <div className="compare-table home-block">
      <table style={{ minWidth }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={h} scope="col" className={cn(stickyFirst && i === 0 && "is-sticky")}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
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
    <ul className="home-block grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.metric} className="biz-glass !p-5">
          <p className="biz-kicker">{item.metric}</p>
          <p className="biz-title mt-2" style={{ fontSize: "1.05rem" }}>
            {item.figure}
          </p>
        </li>
      ))}
    </ul>
  );
}
