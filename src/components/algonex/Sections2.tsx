import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Eye, Rocket, Target, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { CLUB, EVENT, FAQ, MENTORS, NAV, RULES } from "@/lib/event-config";
import { RegisterLink, Reveal, SectionHead } from "./ui";

export function Rules() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="rules" className="sec relative overflow-hidden">
      <div aria-hidden className="hazard absolute inset-x-0 top-0" />
      <div aria-hidden className="faq-ghost pointer-events-none absolute -left-4 top-24 select-none font-display leading-none">§</div>
      <div className="wrap relative max-w-4xl">
        <SectionHead no="07" label="RULEBOOK" title="Rules of conduct" sub="Eight areas every team must follow. Draft until the official rulebook is published — the organisers’ version will take priority." />
        <div className="space-y-3">
          {RULES.map((r, i) => {
            const isOpen = open === i;
            const lines = r.body.split("\n");
            const dq = i === 7;
            return (
              <motion.div key={r.title} className={`faq-card ${isOpen ? "faq-open" : ""}`}
                initial={{ opacity: 0, y: 40, rotateX: -25 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 4) * 0.07, type: "spring", stiffness: 150, damping: 18 }}>
                <h3>
                  <button aria-expanded={isOpen} aria-controls={`rule-${i}`} onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-14 w-full items-center gap-4 px-5 py-4 text-left text-lg font-semibold">
                    <span className="faq-no font-display text-3xl">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1">{r.title}</span>
                    <span className="hidden font-mono text-[10px] tracking-widest text-muted-foreground sm:inline">{lines.length} POINTS</span>
                    {dq && <span className="bg-primary px-2 py-0.5 font-mono text-[10px] tracking-widest text-primary-foreground">STRICT</span>}
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="faq-plus grid size-9 shrink-0 place-items-center font-display text-2xl">+</motion.span>
                  </button>
                </h3>
                <motion.div id={`rule-${i}`} role="region" initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <ul className="mx-5 mb-5 space-y-2 border-l-2 border-primary pl-4">
                    {lines.map((l, j) => (
                      <motion.li key={l} className="flex gap-3 text-muted-foreground" initial={false} animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }} transition={{ delay: isOpen ? 0.1 + j * 0.06 : 0 }}>
                        <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-primary" />{l}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {EVENT.rulebookUrl ? (
            <a href={EVENT.rulebookUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">Download rulebook (PDF)</a>
          ) : (
            <span className="font-mono text-xs text-muted-foreground">Official rulebook PDF: coming soon.</span>
          )}
          
        </div>
      </div>
    </section>
  );
}

export function RegistrationCTA() {
  const words = ["Your", "idea", "could", "change", "everything."];
  const facts: [string, string][] = [["DATES", EVENT.datesLabel], ["FEE", `${EVENT.fee} / member`], ["FORMAT", "Team-based"], ["BUILD", "30 hours"]];
  return (
    <section id="register" className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
      <div aria-hidden className="cta-stripes absolute inset-0" />
      <div aria-hidden className="cta-ghost pointer-events-none absolute -bottom-10 right-0 select-none whitespace-nowrap font-display uppercase leading-none">REGISTER</div>
      <motion.div aria-hidden className="cta-beam absolute inset-y-0 w-1/3" initial={{ x: "-120%" }} animate={{ x: "420%" }} transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }} />
      <div className="wrap relative">
        <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.3em]">
          <span className="relative flex size-2.5"><span className="absolute inset-0 animate-ping rounded-full bg-primary-foreground" /><span className="relative size-2.5 rounded-full bg-primary-foreground" /></span>
          FINAL STEP · REGISTRATIONS OPEN
        </motion.p>
        <h2 className="mt-4 max-w-5xl font-display text-6xl uppercase leading-[0.9] md:text-8xl">
          {words.map((w, i) => (
            <motion.span key={i} className="mr-[0.2em] inline-block" initial={{ opacity: 0, y: 60, rotate: 6 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.09, type: "spring", stiffness: 180, damping: 16 }}>
              {i === 4 ? <span className="cta-outline">{w}</span> : w}
            </motion.span>
          ))}
        </h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 0.9 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="mt-6 max-w-xl border-l-4 border-primary-foreground pl-4 text-xl">30 hours. One team. A problem worth solving. What will you build?</motion.p>
        <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
          {facts.map(([k, v], i) => (
            <motion.div key={k} className="cta-fact" initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.7 + i * 0.1 }} whileHover={{ y: -4 }}>
              <p className="font-mono text-[10px] tracking-[0.25em] opacity-75">{k}</p>
              <p className="mt-1 font-display text-xl uppercase leading-tight">{v}</p>
            </motion.div>
          ))}
        </div>
        <motion.div className="mt-10 flex flex-wrap gap-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.1 }}>
          <RegisterLink className="btn-invert cta-pulse">Register on Unstop →</RegisterLink>
          <a href="#rules" className="btn-outline-invert">View rules</a>
        </motion.div>
      </div>
    </section>
  );
}

export function Mentors() {
  return (
    <section className="sec relative overflow-hidden">
      <div aria-hidden className="faq-ghost pointer-events-none absolute -right-4 top-6 select-none font-display leading-none">TBA</div>
      <div className="wrap relative">
        <SectionHead no="08" label="MENTORS & JUDGES" title="Meet the minds" sub="Mentors and judges will be announced once confirmed." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(MENTORS.length ? MENTORS : Array.from({ length: 4 }, () => null)).map((m, i) => (
            <motion.div key={i} className="faq-card group p-6" initial={{ opacity: 0, y: 50, rotateY: -30 }} whileInView={{ opacity: 1, y: 0, rotateY: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: "spring", stiffness: 140, damping: 16 }} whileHover={{ y: -6 }}>
              {m ? (
                <>
                  {m.photo ? <img src={m.photo} alt={m.name} className="aspect-square w-full object-cover" /> : null}
                  <h3 className="mt-4 font-display text-2xl">{m.name}</h3>
                  <p className="text-sm text-primary">{m.role} · {m.org}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
                  {m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-mono text-xs text-primary">LinkedIn →</a>}
                </>
              ) : (
                <>
                  <div className="relative grid aspect-square place-items-center overflow-hidden border border-dashed border-primary/40">
                    <UserRound className="size-14 text-muted-foreground transition-colors group-hover:text-primary" strokeWidth={1} />
                    <span aria-hidden className="club-scan absolute inset-0" />
                    <span className="absolute left-2 top-2 font-mono text-[10px] tracking-widest text-primary">ID_{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-muted-foreground">To Be Announced</h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">{i % 2 ? "Judge" : "Mentor"} · Loading…</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function University() {
  return (
    <section className="sec relative overflow-hidden bg-card/40">
      <div aria-hidden className="hazard absolute inset-x-0 top-0" />
      <div className="wrap grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <motion.div className="relative grid place-items-center" initial={{ opacity: 0, scale: 0.6, rotate: -20 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 120, damping: 14 }}>
          <span aria-hidden className="absolute inset-[-14px] animate-[spin_14s_linear_infinite] rounded-full border-2 border-dashed border-primary/50" />
          <span aria-hidden className="absolute inset-[-14px] rounded-full shadow-[0_0_60px_-10px_var(--primary)]" />
          <img src={EVENT.logo} alt="Maya Devi University logo" width={200} height={200} className="relative size-40 md:size-52" />
        </motion.div>
        <div>
          <motion.p initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-mono text-xs tracking-[0.3em] text-primary">HOST INSTITUTION</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-3 font-display text-5xl uppercase md:text-6xl">Maya Devi <span className="cta-outline" style={{ WebkitTextStroke: "2px var(--primary)" }}>University</span></motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="mt-4 max-w-2xl border-l-4 border-primary pl-4 text-lg text-muted-foreground">Dehradun, Uttarakhand. AlgoNex is hosted on campus and organised by the {EVENT.organizer}, celebrating creativity, practical learning, collaboration and innovation.</motion.p>
        </div>
      </div>
    </section>
  );
}

const CLUB_ICONS = [Eye, Code2, Target, Rocket];
export function Club() {
  const [flipped, setFlipped] = useState<number | null>(null);
  return (
    <section id="club" className="sec relative overflow-hidden">
      <div aria-hidden className="club-marquee pointer-events-none absolute inset-x-0 top-1/2 -z-0 -translate-y-1/2 -rotate-3 select-none">
        <div className="ticker-track font-display text-[14vw] leading-none text-outline opacity-40"><span>SEARCHING EYES ✦ SEARCHING EYES ✦ </span><span>SEARCHING EYES ✦ SEARCHING EYES ✦ </span></div>
      </div>
      <div className="wrap relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <motion.div initial={{ scale: 0.6, opacity: 0, rotate: -90 }} whileInView={{ scale: 1, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 120, damping: 14 }} className="club-logo relative mb-8 w-full max-w-md">
              <span className="club-scan" aria-hidden />
              <img src={EVENT.clubLogo} alt="Searching Eyes Club logo" className="relative w-full" />
            </motion.div>
            <SectionHead no="—" label="THE ORGANISERS" title={<>Searching <span className="text-primary">Eyes</span> Club</>} sub="The student tech club behind AlgoNex. Tap or hover a card to reveal more." />
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-10">
            {CLUB.map((c, i) => {
              const on = flipped === i;
              const I = CLUB_ICONS[i] ?? Eye;
              return (
                <motion.div key={c.front}
                  initial={{ opacity: 0, scale: 0.4, rotate: i % 2 ? 120 : -120 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true, margin: "-80px" }}
                  transition={{ type: "spring", stiffness: 110, damping: 13, delay: i * 0.12 }}
                  className={i % 2 ? "sm:translate-y-12" : ""}
                >
                  <button onClick={() => setFlipped(on ? null : i)} aria-pressed={on} aria-label={`${c.front}: ${c.back}`} className={`flip club-card relative mx-auto block aspect-square w-full max-w-[240px] ${on ? "is-flipped" : ""}`}>
                    <span className="club-orbit" aria-hidden />
                    <span className="flip-inner">
                      <span className="flip-face border-2 border-primary bg-card">
                        <I className="size-8 text-primary" strokeWidth={1.5} />
                        <span className="mt-2 font-display text-2xl uppercase sm:text-3xl">{c.front}</span>
                        <span className="mt-2 flex items-center gap-2 font-mono text-[10px] tracking-widest text-muted-foreground"><span className="text-primary">0{i + 1}</span>/ TAP TO FLIP</span>
                      </span>
                      <span className="flip-face flip-back bg-primary text-primary-foreground club-back">
                        <span className="text-sm font-medium leading-snug sm:text-base">{c.back}</span>
                      </span>
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="sec relative overflow-hidden">
      <div aria-hidden className="faq-ghost pointer-events-none absolute -right-6 top-10 select-none font-display leading-none">?</div>
      <div className="wrap relative max-w-4xl">
        <SectionHead no="09" label="QUESTIONS" title="FAQ" sub="Quick answers. Official rules and organizer announcements always take priority." />
        <div className="space-y-3">
          {FAQ.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={it.q} className={`faq-card ${isOpen ? "faq-open" : ""}`}
                initial={{ opacity: 0, x: i % 2 ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: (i % 5) * 0.06, type: "spring", stiffness: 160, damping: 20 }}>
                <h3>
                  <button aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-14 w-full items-center gap-4 px-5 py-4 text-left text-lg font-semibold">
                    <span className="faq-no font-display text-2xl">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1">{it.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="faq-plus grid size-9 shrink-0 place-items-center font-display text-2xl">+</motion.span>
                  </button>
                </h3>
                <motion.div id={`faq-${i}`} role="region" initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                  <p className="border-l-2 border-primary mx-5 mb-5 pl-4 text-muted-foreground">{it.a}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const cards = [
    { icon: MapPin, k: "VENUE", v: "Maya Devi University, Dehradun, Uttarakhand", href: undefined as string | undefined },
    { icon: Mail, k: "EMAIL", v: EVENT.email, href: `mailto:${EVENT.email}` },
  ];
  return (
    <section id="contact" className="sec relative overflow-hidden bg-card/40">
      <div aria-hidden className="cta-ghost pointer-events-none absolute -bottom-8 left-0 select-none whitespace-nowrap font-display uppercase leading-none" style={{ WebkitTextStroke: "2px color-mix(in oklab, var(--primary) 18%, transparent)" }}>CONTACT</div>
      <div className="wrap relative grid gap-10 md:grid-cols-2">
        <SectionHead no="10" label="CONTACT" title="Talk to the organisers" sub="Questions about AlgoNex? Reach the organising team." />
        <div className="space-y-3 self-center">
          {cards.map((c, i) => {
            const Inner = (
              <>
                <span className="faq-plus grid size-11 shrink-0 place-items-center"><c.icon className="size-5" /></span>
                <span className="min-w-0"><span className="block font-mono text-[10px] tracking-[0.25em] text-primary">{c.k}</span><span className="block break-all text-lg font-semibold">{c.v}</span></span>
              </>
            );
            return (
              <motion.div key={c.k} className="faq-card" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, type: "spring", stiffness: 160, damping: 18 }}>
                {c.href ? <a href={c.href} className="flex items-center gap-4 p-4">{Inner}</a> : <div className="flex items-center gap-4 p-4">{Inner}</div>}
              </motion.div>
            );
          })}
          {EVENT.contacts.length > 0 && (
            <>
              <p className="pt-3 font-mono text-xs tracking-[0.22em] text-primary">CALL US — TAP TO DIAL</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {EVENT.contacts.map((c, i) => (
                  <motion.a key={c.phone} href={`tel:${c.phone.replace(/\s/g, "")}`} className="faq-card group block p-4"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}>
                    <Phone className="size-5 text-primary transition-transform group-hover:rotate-12" />
                    <span className="mt-2 block font-display text-xl uppercase">{c.name}</span>
                    <span className="block font-mono text-xs text-muted-foreground">{c.phone}</span>
                  </motion.a>
                ))}
              </div>
            </>
          )}
          {EVENT.socials.length > 0 && <div className="flex gap-3">{EVENT.socials.map((s) => <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="btn-ghost">{s.label}</a>)}</div>}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border grid-bg pt-20 pb-8">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={EVENT.logo} alt="Maya Devi University logo" className="size-12" />
              <img src={EVENT.clubLogo} alt="Searching Eyes Club logo" className="h-14 w-auto object-contain md:h-16" />
            </div>
            <p className="mt-4 text-muted-foreground">Powered by {EVENT.organizer} · {EVENT.university}</p>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => <li key={n.id}><a href={`#${n.id}`} className="nav-link inline-flex min-h-11 items-center">{n.label}</a></li>)}
          </ul>
          <div className="space-y-3 text-sm">
            <a href={`mailto:${EVENT.email}`} className="flex min-h-11 items-center break-all hover:text-primary">{EVENT.email}</a>
            <RegisterLink>Register on Unstop</RegisterLink>
          </div>
        </div>
        <div aria-hidden className="mt-16 select-none font-display text-[22vw] leading-[0.8] text-outline md:text-[17vw]">ALGONEX</div>
        <p className="mt-6 font-mono text-xs text-muted-foreground">© 2026 {EVENT.name} · {EVENT.university}, Dehradun</p>
      </div>
    </footer>
  );
}
