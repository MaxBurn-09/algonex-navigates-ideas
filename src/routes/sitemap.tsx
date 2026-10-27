import { createFileRoute, Link } from "@tanstack/react-router";
import { EVENT, TRACKS } from "@/lib/event-config";

const URL = "https://hackathon.mdu.edu.in/sitemap";
const TITLE = "Sitemap | AlgoNex 1.0 Hackathon 2026 — MDU Dehradun";
const DESC = "All pages of AlgoNex 1.0, the 30-hour student hackathon at Maya Devi University, Dehradun: tracks, timeline, prizes, rules, FAQ and registration.";

type Item = { label: string; href: string; hash?: boolean; desc: string };

const GROUPS: { title: string; items: Item[] }[] = [
  {
    title: "Main pages",
    items: [
      { label: "AlgoNex 1.0 Hackathon — Home", href: "/", desc: "30-hour student hackathon in Dehradun, Uttarakhand." },
      { label: "About AlgoNex & MDU", href: "/about", desc: "Detailed overview of the hackathon, organisers, host university, tracks and timeline." },
      { label: "Hackathon Prizes", href: "/prizes", desc: `${EVENT.prizePoolLabel} prize pool, podium and special awards.` },
      { label: "Hackathon Rules & Eligibility", href: "/rules", desc: "Team size, eligibility, submission and judging rules." },
      { label: "Hackathon FAQ", href: "/faq", desc: "Fees, registration, mentors and submission questions." },
    ],
  },
  {
    title: "Home page sections",
    items: [
      { label: "About the hackathon", href: "/#about", hash: true, desc: "From idea to impact in 30 hours." },
      { label: "Challenge tracks", href: "/#tracks", hash: true, desc: `${TRACKS.length} open-innovation problem tracks.` },
      { label: "30-hour timeline", href: "/#timeline", hash: true, desc: "Hour-by-hour roadmap for both days." },
      { label: "Register", href: "/#register", hash: true, desc: "Register on Unstop — ₹500 per member." },
      { label: "Contact", href: "/#contact", hash: true, desc: "Phone numbers and email for the organisers." },
    ],
  },
];

export const Route = createFileRoute("/sitemap")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: SitemapPage,
});

function SitemapPage() {
  return (
    <main id="main" className="wrap py-28">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">Site index</p>
      <h1 className="mt-3 font-display text-5xl md:text-7xl">Sitemap</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{DESC}</p>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {GROUPS.map((g) => (
          <section key={g.title}>
            <h2 className="border-b border-border pb-3 font-display text-2xl">{g.title}</h2>
            <ul className="mt-4 space-y-4">
              {g.items.map((i) => (
                <li key={i.href} className="border-l-2 border-primary pl-4">
                  {i.hash
                    ? <a href={i.href} className="font-semibold hover:text-primary">{i.label}</a>
                    : <Link to={i.href} className="font-semibold hover:text-primary">{i.label}</Link>}
                  <p className="text-sm text-muted-foreground">{i.desc}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
