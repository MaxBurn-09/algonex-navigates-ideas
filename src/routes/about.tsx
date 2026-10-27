import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { EVENT, TRACKS, MILESTONES, PARTNERS } from "@/lib/event-config";
import { SectionHead, RegisterLink } from "@/components/algonex/ui";

const TITLE = "About AlgoNex 1.0 Hackathon | Maya Devi University, Dehradun";
const DESC = `About AlgoNex 1.0 — a national-level ${EVENT.durationHours}-hour coding hackathon hosted by Maya Devi University, Dehradun and organised by the Searching Eye Club. Tracks, timeline, partners and ${EVENT.prizePoolLabel} prize pool.`;
const URL = "https://hackathon.mdu.edu.in/about";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Emblem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto grid size-36 shrink-0 place-items-center md:mx-0 md:size-44">
      <span aria-hidden className="absolute inset-[-12px] animate-[spin_14s_linear_infinite] rounded-full border-2 border-dashed border-primary/50" />
      <img src={src} alt={alt} loading="lazy" className="club-badge relative size-36 object-contain md:size-44" />
    </div>
  );
}

function Block({ label, title, img, alt, children, pills }: { label: string; title: string; img: string; alt: string; children: React.ReactNode; pills: string[] }) {
  return (
    <motion.article {...fade} className="flex flex-col gap-8 border border-border bg-card p-6 transition-colors hover:border-primary md:flex-row md:items-center md:p-10">
      <Emblem src={img} alt={alt} />
      <div className="min-w-0">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">◆ {label}</p>
        <h2 className="mt-2 font-display text-3xl uppercase md:text-5xl">{title}</h2>
        <div className="mt-4 space-y-3 text-muted-foreground">{children}</div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {pills.map((p) => (
            <li key={p} className="border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-wider">{p}</li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function AboutPage() {
  return (
    <main id="main" className="px-4 pb-24 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-6xl space-y-10">
        <SectionHead no="00" label="ABOUT" title={<>About <span className="text-primary">AlgoNex 1.0</span></>} sub={`${EVENT.tagline}. A national-level ${EVENT.durationHours}-hour marathon coding competition at ${EVENT.university}, ${EVENT.datesLabel}.`} />

        <Block label="The Hackathon" title="AlgoNex 1.0" img={EVENT.algonexEmblem} alt="AlgoNex 1.0 emblem"
          pills={[`${EVENT.durationHours} hours`, `${TRACKS.length} tracks`, `${EVENT.prizePoolLabel} prize pool`, `${EVENT.fee} per member`, "Team 3–5"]}>
          <p>AlgoNex 1.0 brings student builders together for {EVENT.durationHours} hours of non-stop problem solving. Teams of 3 to 5 pick a track, build a working prototype, and pitch it to judges on {EVENT.datesLabel}.</p>
          <p>Registration happens on Unstop, followed by an online shortlisting round before the on-campus finals in Dehradun.</p>
        </Block>

        <Block label="Host Institution" title={EVENT.university} img={EVENT.logo} alt="Maya Devi University crest"
          pills={["Dehradun · Uttarakhand", "On campus", EVENT.datesLabel]}>
          <p>The finals are hosted on the campus of {EVENT.university}, Dehradun, Uttarakhand. Learn more about the university, its programmes and campus on the official website.</p>
          <p>
            <a href={EVENT.universityUrl} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center gap-2 font-mono text-sm uppercase tracking-wider text-primary underline underline-offset-4">
              Visit maya.edu.in — official MDU website ↗
            </a>
          </p>
        </Block>

        <Block label="Organised by" title="Searching Eye Club" img={EVENT.clubLogo} alt="Searching Eye Club emblem"
          pills={["School of Computer Engineering & Applications", "Student-led"]}>
          <p>AlgoNex is organised by the Searching Eye Club of the School of Computer Engineering &amp; Applications, {EVENT.university}.</p>
        </Block>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.section {...fade} className="border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-2xl uppercase">Challenge tracks</h2>
            <ul className="mt-4 space-y-3">
              {TRACKS.map((t) => (
                <li key={t.no} className="flex gap-3"><span className="font-mono text-primary">{t.no}</span><span><b>{t.title}</b> — <span className="text-muted-foreground">{t.desc}</span></span></li>
              ))}
            </ul>
          </motion.section>
          <motion.section {...fade} className="border border-border bg-card p-6 md:p-8">
            <h2 className="font-display text-2xl uppercase">Key dates</h2>
            <ul className="mt-4 divide-y divide-border">
              {MILESTONES.map((m) => (
                <li key={m.label} className="flex justify-between gap-4 py-3"><span>{m.label}</span><span className="font-mono text-primary">{m.date}</span></li>
              ))}
            </ul>
            <h2 className="mt-8 font-display text-2xl uppercase">Technology partners</h2>
            <p className="mt-2 text-muted-foreground">{PARTNERS.map((p) => p.name).join(" · ")}</p>
          </motion.section>
        </div>

        <motion.div {...fade} className="flex flex-wrap gap-4">
          <RegisterLink />
          <Link to="/rules" className="btn-ghost inline-flex min-h-11 items-center border border-border px-5">Read the rules</Link>
          <Link to="/prizes" className="btn-ghost inline-flex min-h-11 items-center border border-border px-5">See prizes</Link>
        </motion.div>
      </div>
    </main>
  );
}
