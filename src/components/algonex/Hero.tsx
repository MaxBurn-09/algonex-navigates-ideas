import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { EVENT } from "@/lib/event-config";
import portalBg from "@/assets/portal-vortex.png.asset.json";
import { RegisterLink } from "./ui";

function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const start = new Date(EVENT.start).getTime();
  const end = new Date(EVENT.end).getTime();
  if (now === null) return <div className="h-[92px]" aria-hidden />;
  if (now >= end) return <p className="cd-state">AlgoNex 1.0 has concluded. Thank you, builders.</p>;
  if (now >= start) return <p className="cd-state"><span className="mr-2 inline-block size-2 animate-pulse rounded-full bg-primary" />Event in progress — the gate is open.</p>;
  const d = start - now;
  const parts = [
    ["Days", Math.floor(d / 864e5)],
    ["Hrs", Math.floor(d / 36e5) % 24],
    ["Min", Math.floor(d / 6e4) % 60],
    ["Sec", Math.floor(d / 1e3) % 60],
  ] as const;
  return (
    <div role="timer" aria-label="Countdown to event start" className="grid grid-cols-4 gap-2">
      {parts.map(([l, v]) => (
        <div key={l} className="border border-border bg-card/60 px-3 py-3 text-center backdrop-blur">
          <motion.div key={v} initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-display text-3xl tabular-nums">{String(v).padStart(2, "0")}</motion.div>
          <div className="font-mono text-[10px] tracking-widest text-muted-foreground">{l}</div>
        </div>
      ))}
    </div>
  );
}

const word = { hidden: { y: "110%" }, show: (i: number) => ({ y: 0, transition: { delay: 0.2 + i * 0.07, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const } }) };

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const yPortal = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 160]);
  const yBg = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 90]);
  const letters = "ALGONEX".split("");

  return (
    <section id="home" className="relative isolate flex min-h-svh items-center overflow-hidden pt-24 pb-16 grid-bg">
      <motion.div aria-hidden style={{ y: yBg, backgroundImage: `url(${portalBg.url})` }} className="hero-bg pointer-events-none absolute inset-0 -z-20" />
      <div aria-hidden className="hero-scrim pointer-events-none absolute inset-0 -z-10" />
      <div className="scanlines pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <motion.div style={{ y: yPortal }} aria-hidden className="portal pointer-events-none absolute -z-10 opacity-20 md:opacity-45 right-[-20%] top-1/2 -translate-y-1/2 md:right-[-6%]">
        <div className="portal-ring r1" /><div className="portal-ring r2" /><div className="portal-ring r3" />
        <div className="portal-core" />
        <div className="portal-x" />
      </motion.div>
      <div className="light-sweep pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div aria-hidden className="hero-ghost pointer-events-none absolute -z-10 bottom-[-4vw] left-[-2vw] select-none font-display leading-none">30H</div>
      <div aria-hidden className="hero-slash pointer-events-none absolute -z-10" />
      <div aria-hidden className="hazard pointer-events-none absolute inset-x-0 top-[72px] h-2" />

      <div className="hero-content mx-auto w-full max-w-7xl px-5">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-6 inline-flex items-center gap-3 bg-primary px-3 py-1.5 font-mono text-xs font-bold tracking-[0.3em] text-primary-foreground">
          <span className="size-2 animate-pulse bg-primary-foreground" />MAYA DEVI UNIVERSITY PRESENTS
        </motion.p>
        <h1 className="font-display uppercase leading-[0.82]">
          <span className="sr-only">AlgoNex 1.0</span>
          <span aria-hidden className="glitch flex overflow-hidden text-[20vw] md:text-[14vw] xl:text-[13rem]" data-text="ALGONEX">
            {letters.map((c, i) => (
              <motion.span key={i} custom={i} variants={word} initial={reduce ? false : "hidden"} animate="show" className="inline-block">{c}</motion.span>
            ))}
            <motion.span custom={8} variants={word} initial={reduce ? false : "hidden"} animate="show" className="ml-3 inline-block -skew-x-6 text-primary text-glow">1.0</motion.span>
          </span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-4 inline-block -skew-x-6 border-l-4 border-primary pl-4 font-display text-2xl uppercase tracking-wide md:text-5xl">
          {EVENT.tagline}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }} className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="max-w-xl text-lg text-muted-foreground">
              “The gate is open. Step into the unknown. Break the code, build the future, and create technology that solves real-world problems.”
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <RegisterLink>Register Now</RegisterLink>
              <a href="#about" className="btn-ghost">Explore Event ↓</a>
            </div>
             <dl className="hero-details mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-4">
              {([["Date", EVENT.datesLabel], ["Location", "MDU, Dehradun"], ["Format", "Team-based"], ["Fee", `${EVENT.fee} / member`]] as [string, string][]).map(([k, v]) => (
                <div key={k} className="border-l border-primary/60 pl-3"><dt className="font-mono text-[10px] tracking-widest text-muted-foreground">{k.toUpperCase()}</dt><dd className="font-semibold">{v}</dd></div>
              ))}
            </dl>
          </div>
           <div className="hero-countdown lg:justify-self-end lg:w-[360px]">
            <div aria-hidden className="mb-6 hidden text-right font-mono text-xs leading-6 text-primary/60 lg:block">
              <p>&gt; gate.open()</p><p>&gt; team.assemble()</p><p>&gt; build --hours 30</p>
            </div>
            <p className="mb-2 font-mono text-[10px] tracking-widest text-muted-foreground">GATE OPENS IN</p>
            <Countdown />
          </div>
        </motion.div>
      </div>
      <a href="#about" className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted-foreground" aria-label="Scroll to about">
        SCROLL<span className="scroll-dot" />
      </a>
    </section>
  );
}
