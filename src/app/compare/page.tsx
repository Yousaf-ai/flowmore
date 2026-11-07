import type { Metadata } from "next";
import Link from "next/link";
import {
  chineseFeatureComparison,
  chinesePricingComparison,
  featureComparison,
  pricingComparison,
  underusedFeatures,
  westVsChina,
} from "@/content/comparison";

export const metadata: Metadata = {
  title: "Compare platforms",
  description:
    "Side-by-side comparison across Western and Chinese AI platforms—features, pricing, and what most users miss.",
};

const sections = [
  { href: "#features", label: "All features" },
  { href: "#pricing", label: "All pricing" },
  { href: "#chinese-features", label: "Chinese features" },
  { href: "#chinese-pricing", label: "Chinese pricing" },
  { href: "#west-vs-china", label: "West vs China" },
  { href: "#underused", label: "Often missed" },
];

function CompareTable({
  headers,
  rows,
  minWidth = "48rem",
}: {
  headers: string[];
  rows: string[][];
  minWidth?: string;
}) {
  return (
    <div className="compare-table">
      <table style={{ minWidth }}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ComparePage() {
  return (
    <div className="home compare-page">
      <div className="compare-inner">
        <header className="home-hero">
          <h1 className="home-title">Compare</h1>
          <p className="biz-lead">
            Side-by-side strengths, features, and pricing across all Flowmore platforms—Western
            and Chinese—so you pick the right tool, then practise taking it further.
          </p>
          <div className="home-actions">
            <Link href="/platforms" className="home-cta home-cta-flat">
              Browse platforms
            </Link>
            <Link href="/sandbox" className="home-cta home-cta-raised">
              Open sandbox
            </Link>
          </div>
        </header>

        <nav className="home-chips compare-nav" aria-label="Sections">
          {sections.map((section) => (
            <a key={section.href} href={section.href} className="home-chip">
              {section.label}
            </a>
          ))}
        </nav>

        <section id="features" className="compare-section">
          <h2 className="home-heading">All platforms — features</h2>
          <CompareTable
            headers={["Feature", ...featureComparison.columns]}
            rows={featureComparison.rows.map((row) => [row.feature, ...row.values])}
          />
        </section>

        <section id="pricing" className="compare-section">
          <h2 className="home-heading">All platforms — pricing</h2>
          <CompareTable
            headers={["Tier", ...pricingComparison.columns]}
            rows={pricingComparison.rows.map((row) => [row.tier, ...row.values])}
          />
        </section>

        <section id="chinese-features" className="compare-section">
          <h2 className="home-heading">Chinese platforms — features</h2>
          <CompareTable
            minWidth="40rem"
            headers={["Feature", ...chineseFeatureComparison.columns]}
            rows={chineseFeatureComparison.rows.map((row) => [row.feature, ...row.values])}
          />
        </section>

        <section id="chinese-pricing" className="compare-section">
          <h2 className="home-heading">Chinese platforms — pricing</h2>
          <CompareTable
            minWidth="40rem"
            headers={["Tier", ...chinesePricingComparison.columns]}
            rows={chinesePricingComparison.rows.map((row) => [row.tier, ...row.values])}
          />
        </section>

        <section id="west-vs-china" className="compare-section">
          <h2 className="home-heading">Western vs Chinese</h2>
          <CompareTable
            minWidth="40rem"
            headers={["Dimension", "Western leaders", "Chinese leaders", "Key difference"]}
            rows={westVsChina.map((row) => [
              row.dimension,
              row.western,
              row.chinese,
              row.difference,
            ])}
          />
        </section>

        <section id="underused" className="compare-section">
          <h2 className="home-heading">What most users miss</h2>
          <div className="compare-table">
            <table style={{ minWidth: "36rem" }}>
              <thead>
                <tr>
                  <th scope="col">Platform</th>
                  <th scope="col">Often missed</th>
                </tr>
              </thead>
              <tbody>
                {underusedFeatures.map((item) => (
                  <tr key={item.href}>
                    <td>
                      <Link href={item.href}>{item.platform}</Link>
                    </td>
                    <td>{item.items}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
