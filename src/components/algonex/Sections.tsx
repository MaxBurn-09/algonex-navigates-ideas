import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { Link } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { Crown, Star } from "lucide-react";
import { AWARDS, CRITERIA, DAY1, DAY2, EVENT, MILESTONES, PRIZES, TRACKS, type ScheduleItem } from "@/lib/event-config";
import { RegisterLink, Reveal, SectionHead, Tag } from "./ui";
import { cn } from "@/lib/utils";

export function Ticker() {
  const t = "ALGONEX 1.0 ✦ 30 HOURS ✦ 8 TRACKS ✦ BUILD BEYOND LIMITS ✦ MAYA DEVI UNIVERSITY ✦ ";
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
        <div className="mb-16 grid gap-4 md:grid-cols-3">
          {[["What is it?", "A 30-hour, team-based build sprint at MDU, Dehradun, where students turn real problems into working prototypes."], ["Why join?", "Mentorship, hands-on learning, a ₹1.5 Lakh+ provisional prize pool and a demo in front of judges."], ["What's different?", "Open-source projects, 8 focused tracks and a fully on-campus experience run by students, for students."]].map(([q, a], i) => (
            <Reveal key={q} delay={i * 0.08} className="border-l-2 border-primary bg-card p-6">
              <h3 className="font-display text-2xl uppercase">{q}</h3>
              <p className="mt-2 text-muted-foreground">{a}</p>
            </Reveal>
          ))}
        </div>
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
  const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-1", "rotate-1"];
  return (
    <section id="themes" className="sec relative overflow-hidden">
      <div aria-hidden className="spotlight pointer-events-none absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute -left-10 top-6 select-none font-display text-[26vw] leading-none text-outline opacity-30">WHY</div>
      <div className="wrap relative">
        <SectionHead center no="02" label="WHY PARTICIPATE" title={<>Why give up a <span className="text-primary">weekend?</span></>} sub="Because 30 hours here can teach you more than a semester of watching tutorials." />
        <div className="board mx-auto max-w-6xl p-6 md:p-12">
          <div className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map(({ i: I, t, d }, k) => {
              const hot = t === "Compete";
              return (
                <motion.div key={t}
                  initial={{ opacity: 0, scale: 0.6, rotate: k % 2 ? 14 : -14 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: k * 0.09 }}
                  className={cn(k % 3 === 1 && "lg:mt-10", k % 3 === 2 && "lg:mt-20")}
                >
                  <div className={cn("pinned group", tilts[k], hot && "pinned-first")}>
                    <span className="pin" aria-hidden />
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">REASON {String(k + 1).padStart(2, "0")}</span>
                      {hot && <span className="bg-primary px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-widest text-primary-foreground">BIG ONE</span>}
                    </div>
                    <I className="mt-4 size-10 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" strokeWidth={1.5} />
                    <h3 className={cn("mt-3 font-display uppercase", hot ? "text-4xl text-primary" : "text-3xl")}>{t}</h3>
                    <p className="mt-3 border-t border-dashed border-border pt-3 text-sm text-muted-foreground">{d}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <Reveal className="mx-auto mt-12 max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Six reasons. One weekend. <span className="text-primary">Zero regrets.</span></p>
        </Reveal>
      </div>
    </section>
  );
}

export function Tracks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive((prev) => {
      const i = Math.min(TRACKS.length - 1, Math.max(0, Math.floor(v * TRACKS.length)));
      return i === prev ? prev : i;
    });
  });
  const jump = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const h = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + (h * (i + 0.5)) / TRACKS.length, behavior: "smooth" });
  };
  // one swipe / one wheel tick = one track
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let acc = 0;
    let cool = false;
    let touchY: number | null = null;
    const step = (dir: number) => {
      if (cool) return;
      const nextI = active + dir;
      if (nextI < 0 || nextI > TRACKS.length - 1) return; // let the page scroll on
      cool = true;
      setTimeout(() => (cool = false), 650);
      jump(nextI);
    };
    const onWheel = (e: WheelEvent) => {
      const atStart = active === 0 && e.deltaY < 0;
      const atEnd = active === TRACKS.length - 1 && e.deltaY > 0;
      if (atStart || atEnd) return; // release to normal page scroll
      e.preventDefault();
      acc += e.deltaY;
      if (Math.abs(acc) > 40) {
        step(acc > 0 ? 1 : -1);
        acc = 0;
      }
    };
    const onTouchStart = (e: TouchEvent) => { touchY = e.touches[0]?.clientY ?? null; };
    const onTouchMove = (e: TouchEvent) => {
      if (touchY === null) return;
      const dy = touchY - (e.touches[0]?.clientY ?? touchY);
      const atStart = active === 0 && dy < 0;
      const atEnd = active === TRACKS.length - 1 && dy > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      if (Math.abs(dy) > 60) {
        step(dy > 0 ? 1 : -1);
        touchY = e.touches[0]?.clientY ?? null;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [active]);
  const t = TRACKS[active]!;
  const next = TRACKS[(active + 1) % TRACKS.length]!;
  const I = (Icons as unknown as Record<string, Icons.LucideIcon>)[t.icon] ?? Icons.Code;
  const ease = [0.2, 0.8, 0.2, 1] as const;
  return (
    <section id="tracks" ref={ref} className="relative bg-card/40" style={{ height: `${(TRACKS.length + 1) * 70}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div aria-hidden className="spotlight pointer-events-none absolute inset-0" />
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06] [background:repeating-linear-gradient(0deg,transparent_0_3px,var(--foreground)_3px_4px)]" />
        {/* giant track number, crossfading (no blank gap) */}
        <AnimatePresence mode="popLayout">
          <motion.div key={t.no} aria-hidden
            initial={{ opacity: 0, scale: 1.5, filter: "blur(12px)" }}
            animate={{ opacity: 0.25, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.6, filter: "blur(8px)" }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none font-display text-[38vw] leading-none text-outline md:text-[26rem]">
            {t.no}
          </motion.div>
        </AnimatePresence>
        {/* next track ghost title at bottom edge */}
        <AnimatePresence mode="popLayout">
          <motion.div key={next.no} aria-hidden
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 0.12, y: 0 }} exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease }}
            className="pointer-events-none absolute -bottom-2 left-0 right-0 select-none overflow-hidden text-center font-display text-[11vw] uppercase leading-[0.8] text-outline md:text-[8rem]">
            {next.title}
          </motion.div>
        </AnimatePresence>
        <div className="wrap relative w-full">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-primary">03</span>
            <span className="h-px w-10 bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Challenge Tracks</span>
            <span className="ml-auto font-mono text-xs tracking-[0.3em] text-muted-foreground">SCROLL <span className="text-primary">↓</span></span>
          </div>
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
            <AnimatePresence mode="popLayout">
              <motion.div key={t.no}
                initial={{ opacity: 0, x: -110, rotate: -10, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, x: 110, rotate: 10, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="grid size-28 place-items-center border-2 border-primary bg-primary/10 shadow-glow md:size-36">
                <I className="size-12 text-primary md:size-16" strokeWidth={1.5} />
              </motion.div>
            </AnimatePresence>
            <div className="min-h-[16rem] md:min-h-[18rem]">
              <AnimatePresence mode="popLayout">
                <motion.div key={t.no}
                  initial={{ opacity: 0, y: 70, scale: 0.96, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -70, scale: 1.04, filter: "blur(6px)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 28 }}>
                  <div className="font-mono text-[11px] tracking-[0.3em] text-primary">TRACK {t.no} / 08</div>
                  <h3 className="mt-2 font-display text-5xl uppercase leading-[0.95] md:text-8xl">{t.title}</h3>
                  <p className="mt-4 max-w-xl text-lg text-muted-foreground md:text-xl">{t.desc}</p>
                  <p className="mt-3 max-w-xl border-l-2 border-primary pl-4 text-sm text-foreground/90 md:text-base">{t.detail}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            {TRACKS.map((tr, i) => (
              <button key={tr.no} onClick={() => jump(i)} aria-label={`Go to track ${tr.no} ${tr.title}`} title={tr.title}
                className={cn("h-2 transition-all duration-300", i === active ? "w-14 bg-primary shadow-glow" : "w-7 bg-border hover:w-10 hover:bg-primary/60")} />
            ))}
            <span className="ml-4 hidden font-mono text-[10px] tracking-[0.25em] text-muted-foreground md:inline">TRACK SELECTION FOLLOWS THE OFFICIAL EVENT RULES</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function hourMark(time: string, day2: boolean) {
  const m = time.match(/(\d+):(\d+) (AM|PM)/);
  if (!m) return "";
  let h = (Number(m[1]) % 12) + (m[3] === "PM" ? 12 : 0) + Number(m[2]) / 60;
  if (day2) h += 24;
  const t = h - 10;
  return t < 0 ? "PRE" : t > 30 ? "POST" : `HR ${String(Math.floor(t)).padStart(2, "0")}`;
}
const KEY = /begins|Submission|Closing|Opening/i;
function Day({ title, sub, items, startHour }: { title: string; sub: string; items: ScheduleItem[]; startHour: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  return (
    <div ref={ref} className="relative">
      <Reveal className="relative mb-10 flex items-end gap-5">
        <span className="font-display text-[22vw] leading-[0.8] text-outline md:text-[9rem]">{title.slice(-1).padStart(2, "0")}</span>
        <div className="pb-2">
          <span className="inline-block bg-primary px-2 py-0.5 font-mono text-[10px] font-bold tracking-[0.3em] text-primary-foreground">{title}</span>
          <h3 className="mt-2 font-display text-3xl uppercase md:text-5xl">{sub}</h3>
        </div>
      </Reveal>
      <div className="relative">
        <div className="absolute bottom-0 left-[19px] top-0 w-0.5 bg-border md:left-1/2 md:-ml-px" />
        <motion.div style={{ scaleY: fill }} className="absolute bottom-0 left-[19px] top-0 w-0.5 origin-top bg-primary shadow-glow md:left-1/2 md:-ml-px" />
        <ol className="space-y-8 md:space-y-6">
          {items.map((it, i) => {
            const key = KEY.test(it.title);
            const right = i % 2 === 1;
            return (
              <li key={it.time} className={cn("relative grid pl-14 md:grid-cols-2 md:pl-0", right && "md:[&>div]:col-start-2")}>
                <motion.span
                  initial={{ scale: 0, rotate: 0 }} whileInView={{ scale: 1, rotate: 45 }} viewport={{ once: true, margin: "-40% 0px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={cn("absolute left-[12px] top-6 z-10 size-4 border-2 border-primary bg-background md:left-1/2 md:-ml-2", key && "size-5 bg-primary shadow-glow md:-ml-2.5")}
                />
                <motion.div
                  initial={{ opacity: 0, x: right ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  className={cn("group relative", right ? "md:pl-12" : "md:pr-12 md:text-right")}
                >
                  <div className={cn("rm-card", key && "rm-key")}>
                    <div className={cn("flex items-center gap-3", !right && "md:flex-row-reverse")}>
                      <span className="font-display text-3xl text-primary">{it.time}</span>
                      <span className="border border-border px-2 py-0.5 font-mono text-[11px] tracking-widest text-muted-foreground">{hourMark(it.time, startHour > 0)}</span>
                      {key && <span className="bg-primary px-1.5 py-0.5 font-mono text-[9px] font-bold tracking-widest text-primary-foreground">KEY</span>}
                    </div>
                    <p className="mt-3 text-lg font-semibold leading-snug md:text-xl">{it.title}</p>
                  </div>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="timeline" className="sec relative overflow-hidden bg-card/40">
      <div aria-hidden className="pointer-events-none absolute -right-20 top-10 select-none font-display text-[30vw] leading-none text-outline opacity-40">30</div>
      <div className="wrap relative">
        <SectionHead no="04" label="SCHEDULE" title={<>30-hour <span className="text-primary">roadmap</span></>} sub={<>Hour by hour, kickoff to finale. <Tag>Draft</Tag> Final schedule will be confirmed by the organizing team.</>} />
        <Reveal className="mb-16 grid grid-cols-[1fr_auto_1fr] items-center gap-3 border border-primary/60 bg-card p-5 md:gap-8 md:p-8">
          <div><div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">START</div><div className="mt-1 font-display text-2xl md:text-4xl">10:00 AM</div><div className="text-sm text-muted-foreground">Wed, 25 Nov</div></div>
          <div className="text-center"><div className="font-display text-5xl text-primary md:text-7xl">30</div><div className="font-mono text-[10px] tracking-[0.3em]">HOURS NON-STOP</div></div>
          <div className="text-right"><div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">END</div><div className="mt-1 font-display text-2xl md:text-4xl">4:00 PM</div><div className="text-sm text-muted-foreground">Thu, 26 Nov</div></div>
        </Reveal>
        <div className="space-y-28">
          <Day title="DAY 1" sub="Kickoff, Ideation & Build" items={DAY1} startHour={0} />
          <Day title="DAY 2" sub="Build, Test & Grand Finale" items={DAY2} startHour={16} />
        </div>
        <h3 className="mt-24 mb-10 font-display text-4xl uppercase md:text-5xl">Important <span className="text-primary">dates</span></h3>
        <div className="relative">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: "easeInOut" }} className="absolute left-0 right-0 top-[9px] hidden h-0.5 origin-left bg-primary lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.label} delay={0.2 + i * 0.12} className="relative lg:pt-8">
                <span className={cn("absolute left-0 top-0 hidden size-5 rotate-45 border-2 border-primary bg-background lg:block", m.status === "confirmed" && "bg-primary")} />
                <div className="border-l-2 border-primary pl-4 lg:border-0 lg:pl-0">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{m.label}</div>
                  <div className="mt-1 font-display text-2xl">{m.date}</div>
                  {m.status !== "confirmed" && <div className="mt-2"><Tag>{m.status === "tbc" ? "TBC" : "Proposed"}</Tag></div>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// Compact teaser on the home page; the full breakdown lives on /prizes.
export function PrizesTeaser() {
  const tilts = ["-rotate-2", "rotate-1", "rotate-2"];
  return (
    <section id="prizes" className="sec relative overflow-hidden">
      <div aria-hidden className="spotlight pointer-events-none absolute inset-0" />
      <div aria-hidden className="cta-stripes pointer-events-none absolute inset-0 opacity-30" />
      <div aria-hidden className="pointer-events-none absolute -right-10 top-0 select-none font-display text-[26vw] leading-none text-outline opacity-30">₹</div>
      <div className="wrap relative">
        <SectionHead center no="05" label="PRIZE POOL" title={<>Win big. <span className="text-primary">Build bigger.</span></>} sub={<>Total pool {EVENT.prizePoolLabel}. <Tag>Provisional</Tag> Amounts await formal approval.</>} />

        <div className="board relative mx-auto max-w-5xl p-6 md:p-12">
          <div aria-hidden className="hazard absolute inset-x-0 top-0" />
          {/* Big pool banner pinned on the board */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 220, damping: 16 }}
            className="mx-auto max-w-2xl"
          >
            <div className="pinned pinned-first -rotate-1 text-center">
              <span className="pin" aria-hidden />
              <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">TOTAL PRIZE POOL</div>
              <div className="mt-1 font-display text-6xl text-primary md:text-8xl">₹<Counter to={150000} /></div>
              <div className="mt-2 border-t border-dashed border-border pt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">+ trophies, certificates & special awards</div>
            </div>
          </motion.div>

          {/* Three pinned place cards */}
          <div className="mt-10 grid items-start gap-8 sm:grid-cols-3">
            {PRIZES.map((p, i) => {
              const first = p.place === "First";
              return (
                <motion.div key={p.place}
                  initial={{ opacity: 0, scale: 0.6, rotate: i % 2 ? 14 : -14 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 + i * 0.12 }}
                  className={cn(first && "sm:-mt-4")}
                >
                  <div className={cn("pinned group text-center", tilts[i], first && "pinned-first")}>
                    <span className="pin" aria-hidden />
                    <div className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">POSITION {first ? "01" : p.place === "Second" ? "02" : "03"}</div>
                    <div className={cn("mt-1 font-display uppercase", first ? "text-3xl text-primary" : "text-2xl")}>{p.place} Place</div>
                    <div className={cn("mt-3 font-display", first ? "text-5xl" : "text-4xl")}>₹<Counter to={p.amount} /></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.4} className="mt-12 text-center">
          <Link to="/prizes" className="btn-solid cta-pulse">See full prizes <span aria-hidden>→</span></Link>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Podium, special awards & judging breakdown on the prizes page</p>
        </Reveal>
      </div>
    </section>
  );
}

// Full aggressive prizes page (/prizes).
export function PrizesPage() {
  const podium = [
    { p: PRIZES.find((x) => x.place === "Second")!, h: "md:h-64", tag: "RUNNER-UP" },
    { p: PRIZES.find((x) => x.place === "First")!, h: "md:h-80", tag: "CHAMPION" },
    { p: PRIZES.find((x) => x.place === "Third")!, h: "md:h-52", tag: "2ND RUNNER-UP" },
  ];
  return (
    <>
      <section className="sec relative overflow-hidden pt-32 md:pt-40">
        <div aria-hidden className="spotlight pointer-events-none absolute inset-0" />
        <div aria-hidden className="cta-stripes pointer-events-none absolute inset-0 opacity-40" />
        <div aria-hidden className="pointer-events-none absolute -right-16 top-10 select-none font-display text-[30vw] leading-none text-outline opacity-30">₹1.5L</div>
        <div className="wrap relative text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-primary">
            <span className="h-px w-10 bg-primary" /> PRIZE POOL · PROVISIONAL <span className="h-px w-10 bg-primary" />
          </motion.p>
          <h1 className="mt-4 font-display text-6xl uppercase leading-[0.9] md:text-8xl">
            Win big. <span className="text-primary">Build bigger.</span>
          </h1>
          <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 140, damping: 14 }} className="mt-8">
            <div className="font-display text-[22vw] leading-none text-primary shadow-glow md:text-[12rem]">₹<Counter to={150000} /></div>
            <div className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Total pool · trophies · certificates · special awards</div>
          </motion.div>
        </div>
      </section>

      <section className="sec relative overflow-hidden bg-card/40">
        <div aria-hidden className="hazard absolute inset-x-0 top-0" />
        <div className="wrap relative">
          <SectionHead center no="01" label="THE PODIUM" title={<>Three spots. <span className="text-primary">One champion.</span></>} sub="Cash prizes for the top three teams. Every member of a winning team gets certificates." />
          <div className="mx-auto grid max-w-5xl items-end gap-6 md:grid-cols-3">
            {podium.map(({ p, h, tag }, i) => {
              const first = p.place === "First";
              return (
                <motion.div key={p.place}
                  initial={{ opacity: 0, y: 90 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.15, type: "spring", stiffness: 120, damping: 16 }}
                  className={cn("rm-card relative flex flex-col justify-end text-center", h, first && "rm-key")}
                >
                  {first && <Crown aria-hidden className="mx-auto mb-3 size-10 text-primary" />}
                  <span className={cn("mx-auto bg-primary px-2 py-0.5 font-mono text-[10px] font-bold tracking-[0.25em] text-primary-foreground", !first && "bg-border text-muted-foreground")}>{tag}</span>
                  <div className={cn("mt-3 font-display uppercase", first ? "text-4xl text-primary" : "text-2xl")}>{p.place} Place</div>
                  <div className={cn("mt-2 font-display", first ? "text-6xl md:text-7xl" : "text-5xl")}>₹<Counter to={p.amount} /></div>
                  <p className="mx-auto mt-3 max-w-xs border-t border-dashed border-border pt-3 text-sm text-muted-foreground">{p.note}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -left-10 bottom-0 select-none font-display text-[24vw] leading-none text-outline opacity-30">★</div>
        <div className="wrap relative">
          <SectionHead no="02" label="SPECIAL AWARDS" title={<>More ways to <span className="text-primary">win</span></>} sub="Beyond the podium, standout teams can take home these titles." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AWARDS.map((a, i) => (
              <motion.div key={a}
                initial={{ opacity: 0, y: 40, rotate: i % 2 ? 4 : -4 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 160, damping: 16 }}
                whileHover={{ y: -6 }}
                className="faq-card p-6 text-center"
              >
                <Star className="mx-auto size-8 text-primary" strokeWidth={1.5} />
                <div className="mt-3 font-display text-2xl uppercase">{a}</div>
                <div className="mt-2 font-mono text-[10px] tracking-[0.25em] text-muted-foreground">AWARD {String(i + 1).padStart(2, "0")}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec relative overflow-hidden bg-card/40">
        <div className="wrap relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHead no="03" label="HOW WINNERS ARE PICKED" title={<>Scored out of <span className="text-primary">100</span></>} sub="The same five criteria decide every prize. Details on the home page evaluation section." />
          <ul className="space-y-4">
            {CRITERIA.map((c, i) => (
              <motion.li key={c.name} initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold">{c.name}</span>
                  <span className="font-display text-2xl text-primary">{c.pct}%</span>
                </div>
                <div className="mt-2 h-2 bg-border">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${c.pct * 4}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 + i * 0.1 }} className="eval-bar h-full" />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="wrap relative mt-14 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Build something worth ₹1.5 Lakh.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <RegisterLink className="cta-pulse">Register on Unstop</RegisterLink>
            <Link to="/rules" className="btn-ghost">Read the rules</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function Evaluation() {
  const [active, setActive] = useState<number | null>(null);
  const R = 80, C = 2 * Math.PI * R;
  let acc = 0;
  return (
    <section className="sec relative overflow-hidden bg-card/40">
      <div aria-hidden className="pointer-events-none absolute -left-10 bottom-0 select-none font-display text-[26vw] leading-none text-outline opacity-30">100</div>
      <div className="wrap relative grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div>
          <SectionHead no="06" label="EVALUATION" title={<>How we <span className="text-primary">judge</span></>} sub="Every team is scored on the same five criteria. Final judging follows the official rulebook." />
          <div className="relative mx-auto mt-4 size-64 md:size-72">
            <motion.svg viewBox="0 0 200 200" className="size-full -rotate-90 overflow-visible" initial={{ rotate: -180, opacity: 0 }} whileInView={{ rotate: -90, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}>
              <circle cx="100" cy="100" r={R} fill="none" stroke="var(--border)" strokeWidth="18" />
              {CRITERIA.map((c, i) => {
                const len = (c.pct / 100) * C, off = acc; acc += len;
                return (
                  <circle key={c.name} cx="100" cy="100" r={R} fill="none" stroke="var(--primary)"
                    strokeWidth={active === i ? 26 : 18} strokeDasharray={`${Math.max(len - 3, 0)} ${C}`} strokeDashoffset={-off} opacity={active === null || active === i ? 1 - i * 0.13 : 0.2}
                    style={{ transition: "stroke-width .25s, opacity .25s", filter: active === i ? "drop-shadow(0 0 8px var(--primary))" : undefined }} />
                );
              })}
            </motion.svg>
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <div className="font-display text-6xl text-primary">{active === null ? 100 : CRITERIA[active]?.pct}</div>
                <div className="mt-1 max-w-[9rem] font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{active === null ? "Total points" : CRITERIA[active]?.name}</div>
              </div>
            </div>
          </div>
        </div>
        <ul className="space-y-4">
          {CRITERIA.map((c, i) => (
            <motion.li key={c.name} initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(i)} onBlur={() => setActive(null)} tabIndex={0}
              className={cn("rm-card group/c relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-primary", active === i && "rm-key")}>
              <span aria-hidden className="pointer-events-none absolute -bottom-8 right-2 font-display text-8xl text-outline opacity-40 transition-transform duration-500 group-hover/c:-translate-x-3">{String(i + 1).padStart(2, "0")}</span>
              <div className="relative flex items-end justify-between gap-4">
                <span className="text-lg font-semibold md:text-xl">{c.name}</span>
                <span className="font-display text-4xl leading-none text-primary"><Count to={c.pct} />%</span>
              </div>
              <div role="progressbar" aria-label={c.name} aria-valuenow={c.pct} aria-valuemin={0} aria-valuemax={100} className="relative mt-3 h-3 bg-border">
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${c.pct * 4}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.3 + i * 0.12, ease: "easeOut" }} className="eval-bar relative h-full">
                  <span className="absolute -right-1.5 top-1/2 size-3 -translate-y-1/2 rotate-45 bg-primary shadow-glow" />
                </motion.div>
              </div>
              <p className="relative mt-3 text-sm text-muted-foreground">{c.note}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => { if (!inView) return; const c = animate(0, to, { duration: 1.2, onUpdate: (x) => setV(Math.round(x)) }); return () => c.stop(); }, [inView, to]);
  return <span ref={ref}>{v}</span>;
}
