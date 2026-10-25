import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import * as Icons from "lucide-react";
import { AWARDS, CRITERIA, DAY1, DAY2, EVENT, MILESTONES, PRIZES, TRACKS, type ScheduleItem } from "@/lib/event-config";
import { Reveal, SectionHead, Tag } from "./ui";
import { cn } from "@/lib/utils";

export function Ticker() {
  const t = "ENTER THE UPSIDE DOWN ✦ ALGONEX 1.0 ✦ BUILD BEYOND LIMITS ✦ MAYA DEVI UNIVERSITY ✦ ";
  return (
    <div className="ticker relative -rotate-1 border-y border-primary bg-primary py-3 text-primary-foreground" aria-hidden>
      <div className="ticker-track font-display text-2xl tracking-wide md:text-3xl"><span>{t.repeat(4)}</span><span>{t.repeat(4)}</span></div>
    </div>
  );
}

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{prefix}{v.toLocaleString("en-IN")}{suffix}</span>;
}

export function Stats() {
  const items = [
    { v: <Counter to={EVENT.durationHours} />, l: "Hours of building" },
    { v: <Counter to={TRACKS.length} />, l: "Challenge tracks" },
    ...(EVENT.showPrizePool ? [{ v: <>₹<Counter to={1.5 * 10} suffix="" /></>, l: "Lakh+ prize pool (provisional)", raw: true }] : []),
    { v: <>TEAM</>, l: "Based participation" },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {items.map((s, i) => (
          <Reveal key={i} delay={i * 0.08} className="border-border p-8 not-last:border-r max-md:[&:nth-child(2)]:border-r-0 max-md:nth-[n+3]:border-t">
            <div className="font-display text-6xl text-primary md:text-7xl">
              {"raw" in s ? <>₹1.5</> : s.v}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const STEPS = ["Idea", "Build", "Test", "Pitch", "Impact"];
export function About() {
  return (
    <section id="about" className="sec">
      <div className="wrap">
        <SectionHead no="01" label="ABOUT THE EVENT" title={<>Where ideas become <span className="text-primary">impact</span></>}
          sub="AlgoNex 1.0 is the Maya Devi University hackathon that brings students, developers, designers and innovators together to build technology-driven solutions in 30 hours." />
        <ol className="relative grid gap-4 md:grid-cols-5">
          <span aria-hidden className="absolute left-0 right-0 top-8 hidden h-px bg-border md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s} delay={i * 0.12}>
              <li className="relative flex gap-5 md:block">
                <span className="relative z-10 grid size-16 shrink-0 place-items-center border border-primary bg-background font-mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                <div className="md:mt-5">
                  <h3 className="font-display text-3xl uppercase">{s}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{["Spot a real problem worth solving.", "Prototype fast with your team.", "Break it, fix it, harden it.", "Demo it to the judges.", "Ship something that matters."][i]}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const BENEFITS = [
  { i: Icons.Hammer, t: "Build", d: "Turn an idea into a working prototype." },
  { i: Icons.Lightbulb, t: "Innovate", d: "Solve meaningful real-world problems." },
  { i: Icons.Users, t: "Collaborate", d: "Work with teammates from different disciplines." },
  { i: Icons.BookOpen, t: "Learn", d: "Develop technical and presentation skills." },
  { i: Icons.Network, t: "Network", d: "Connect with fellow builders and the innovation community." },
  { i: Icons.Trophy, t: "Compete", d: "Demonstrate your solution and compete for awards." },
];
export function Benefits() {
  return (
    <section id="themes" className="sec bg-card/40">
      <div className="wrap">
        <SectionHead no="02" label="WHY PARTICIPATE" title="Why give up a weekend?" sub="Because 30 hours here can teach you more than a semester of watching tutorials." />
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ i: I, t, d }, k) => (
            <Reveal key={t} delay={k * 0.06} className="group relative bg-background p-8 transition-colors hover:bg-card">
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
              <I className="size-9 text-primary transition-transform group-hover:-translate-y-1" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-3xl uppercase">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Tracks() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="tracks" className="sec">
      <div className="wrap">
        <SectionHead no="03" label="CHALLENGE TRACKS" title={<>What will you <span className="text-primary">build?</span></>} sub="Eight tracks. Pick one that fires you up." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRACKS.map((t, k) => {
            const I = (Icons as unknown as Record<string, Icons.LucideIcon>)[t.icon] ?? Icons.Code;
            const isOpen = open === t.no;
            return (
              <Reveal key={t.no} delay={(k % 4) * 0.07}>
                <button onClick={() => setOpen(isOpen ? null : t.no)} aria-expanded={isOpen} className="track-card group h-full w-full text-left">
                  <div className="flex items-start justify-between">
                    <I className="size-8 text-primary" strokeWidth={1.5} />
                    <span className="font-display text-4xl text-outline">{t.no}</span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl uppercase">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  <motion.p initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} className="overflow-hidden text-sm">
                    <span className="block pt-3 text-foreground/90">{t.detail}</span>
                  </motion.p>
                  <span className="mt-4 inline-block font-mono text-[10px] tracking-widest text-primary">{isOpen ? "− LESS" : "+ DETAILS"}</span>
                </button>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-6 font-mono text-xs text-muted-foreground">Track selection follows the official event rules.</p>
      </div>
    </section>
  );
}

function Day({ title, sub, items }: { title: string; sub: string; items: ScheduleItem[] }) {
  return (
    <div>
      <div className="mb-6 flex items-baseline gap-4"><h3 className="font-display text-4xl text-primary">{title}</h3><span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{sub}</span></div>
      <ol className="relative border-l border-border">
        {items.map((it, i) => (
          <Reveal key={it.time} delay={i * 0.04}>
            <li className="group relative py-3 pl-8">
              <span className="absolute -left-[5px] top-[22px] size-2.5 bg-border transition-colors group-hover:bg-primary" />
              <span className="font-mono text-sm text-primary">{it.time}</span>
              <p className="font-medium">{it.title}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="sec bg-card/40">
      <div className="wrap">
        <SectionHead no="04" label="SCHEDULE" title="30-hour roadmap" sub={<>Provisional schedule — <Tag>Draft</Tag> the final schedule will be confirmed by the organizing team.</>} />
        <div className="grid gap-14 md:grid-cols-2">
          <Day title="DAY 1" sub="Kickoff, Ideation & Build" items={DAY1} />
          <Day title="DAY 2" sub="Build, Test & Grand Finale" items={DAY2} />
        </div>
        <h3 className="mt-20 mb-6 font-display text-4xl uppercase">Important dates</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05} className="border border-border bg-background p-6">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">{m.label}{m.status !== "confirmed" && <Tag>{m.status === "tbc" ? "TBC" : "Proposed"}</Tag>}</div>
              <div className="mt-3 font-display text-3xl">{m.date}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Prizes() {
  return (
    <section id="prizes" className="sec relative overflow-hidden">
      <div aria-hidden className="spotlight pointer-events-none absolute inset-0" />
      <div className="wrap relative">
        <SectionHead center no="05" label="PRIZE POOL" title={<>Win big. <span className="text-primary">Build bigger.</span></>} sub={<>Total pool {EVENT.prizePoolLabel}. <Tag>Provisional</Tag> Amounts and categories await formal approval.</>} />
        <div className="mx-auto grid max-w-4xl grid-cols-3 items-end gap-3 md:gap-6">
          {PRIZES.map((p, i) => {
            const first = p.place === "First";
            return (
              <Reveal key={p.place} delay={i * 0.12}>
                <div className={cn("relative border border-border bg-card p-4 text-center md:p-8", first ? "pb-16 md:pb-24 border-primary shadow-glow" : p.place === "Second" ? "pb-10 md:pb-14" : "pb-6 md:pb-8")}>
                  <div className="font-mono text-[10px] tracking-widest text-muted-foreground">{p.place.toUpperCase()} PLACE</div>
                  <div className={cn("mt-3 font-display", first ? "text-3xl text-primary md:text-6xl" : "text-2xl md:text-5xl")}>
                    ₹<Counter to={p.amount} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {AWARDS.map((a) => <span key={a} className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest">★ {a}</span>)}
        </div>
      </div>
    </section>
  );
}

export function Evaluation() {
  return (
    <section className="sec bg-card/40">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <SectionHead no="06" label="EVALUATION" title="How we judge" sub="Every team is scored on the same five criteria. Final judging follows the official rulebook." />
        <ul className="space-y-7">
          {CRITERIA.map((c, i) => (
            <li key={c.name}>
              <div className="flex justify-between"><span className="font-semibold">{c.name}</span><span className="font-mono text-primary">{c.pct}%</span></div>
              <div role="progressbar" aria-label={c.name} aria-valuenow={c.pct} aria-valuemin={0} aria-valuemax={100} className="mt-2 h-2 bg-border">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${c.pct * 4}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} className="h-full bg-primary" />
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
