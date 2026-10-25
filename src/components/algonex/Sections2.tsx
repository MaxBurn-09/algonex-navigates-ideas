import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Eye, Rocket, Target, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { CLUB, EVENT, FAQ, MENTORS, NAV, RULES } from "@/lib/event-config";
import { Accordion, RegisterLink, Reveal, SectionHead } from "./ui";

export function Rules() {
  return (
    <section id="rules" className="sec">
      <div className="wrap max-w-4xl">
        <SectionHead no="07" label="RULEBOOK" title="Rules of conduct" sub="Eight areas every team must follow. Draft until the official rulebook is published — the organisers\u2019 version will take priority." />
        <Accordion items={RULES.map((r) => ({ q: r.title, a: r.body }))} />
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
  return (
    <section id="register" className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />
      <div className="wrap relative">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em]">FINAL STEP</p>
          <h2 className="mt-4 max-w-5xl font-display text-6xl uppercase leading-[0.9] md:text-8xl">Your idea could change everything.</h2>
          <p className="mt-6 max-w-xl text-xl opacity-90">30 hours. One team. A problem worth solving. What will you build?</p>
          <div className="mt-8 flex flex-wrap gap-6 font-mono text-sm uppercase">
            <span>{EVENT.datesLabel}</span><span>{EVENT.fee} per member</span><span>Team-based</span>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <RegisterLink className="btn-invert">Register on Unstop</RegisterLink>
            <a href="#rules" className="btn-outline-invert">View rules</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Mentors() {
  return (
    <section className="sec">
      <div className="wrap">
        <SectionHead no="08" label="MENTORS & JUDGES" title="Meet the minds" sub="Mentors and judges will be announced once confirmed." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(MENTORS.length ? MENTORS : Array.from({ length: 4 }, () => null)).map((m, i) => (
            <Reveal key={i} delay={i * 0.06} className="border border-border bg-card p-6">
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
                  <div className="grid aspect-square place-items-center border border-dashed border-border"><UserRound className="size-12 text-muted-foreground" strokeWidth={1} /></div>
                  <h3 className="mt-4 font-display text-2xl text-muted-foreground">To Be Announced</h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{i % 2 ? "Judge" : "Mentor"}</p>
                </>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function University() {
  return (
    <section className="sec bg-card/40">
      <div className="wrap grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <Reveal><img src={EVENT.logo} alt="Maya Devi University logo" width={200} height={200} className="size-40 md:size-52" /></Reveal>
        <Reveal delay={0.1}>
          <p className="font-mono text-xs tracking-[0.3em] text-primary">HOST INSTITUTION</p>
          <h2 className="mt-3 font-display text-5xl uppercase md:text-6xl">Maya Devi University</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Dehradun, Uttarakhand. AlgoNex is hosted on campus and organised by the {EVENT.organizer}, celebrating creativity, practical learning, collaboration and innovation.</p>
        </Reveal>
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
  return (
    <section id="faq" className="sec">
      <div className="wrap max-w-4xl">
        <SectionHead no="09" label="QUESTIONS" title="FAQ" sub="Quick answers. Official rules and organizer announcements always take priority." />
        <Accordion items={FAQ} />
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="sec bg-card/40">
      <div className="wrap grid gap-10 md:grid-cols-2">
        <SectionHead no="10" label="CONTACT" title="Talk to the organisers" sub="Questions about AlgoNex? Reach the organising team." />
        <Reveal className="space-y-5 self-center text-lg">
          <p className="flex gap-4"><MapPin className="mt-1 size-5 text-primary" />Maya Devi University<br />Dehradun, Uttarakhand, India</p>
          <p className="flex gap-4"><Mail className="mt-1 size-5 text-primary" /><a className="inline-flex min-h-11 items-center break-all underline-offset-4 hover:text-primary hover:underline" href={`mailto:${EVENT.email}`}>{EVENT.email}</a></p>
          {EVENT.phone && <p className="flex gap-4"><Phone className="mt-1 size-5 text-primary" /><a href={`tel:${EVENT.phone}`}>{EVENT.phone}</a></p>}
          {EVENT.contacts.length > 0 && (
            <div>
              <p className="font-mono text-xs tracking-[0.22em] text-primary">CALL US</p>
              <ul className="mt-2 space-y-1">
                {EVENT.contacts.map((c) => (
                  <li key={c.phone}>
                    <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="inline-flex min-h-11 items-center gap-3 hover:text-primary">
                      <Phone className="size-5 shrink-0 text-primary" />
                      <span className="font-semibold">{c.name}</span>
                      <span className="font-mono text-sm text-muted-foreground">{c.phone}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {EVENT.socials.length > 0 && <div className="flex gap-3">{EVENT.socials.map((s) => <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="btn-ghost">{s.label}</a>)}</div>}
        </Reveal>
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
