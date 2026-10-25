import { motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { EVENT } from "@/lib/event-config";
import { cn } from "@/lib/utils";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ no, label, title, sub, center }: { no: string; label: string; title: ReactNode; sub?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={cn("mb-12", center && "text-center")}>
      <div className={cn("mb-5 flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-primary", center && "justify-center")}>
        <span>{no}</span><span className="h-px w-10 bg-primary" /><span className="text-muted-foreground">{label}</span>
      </div>
      <h2 className="font-display text-5xl uppercase leading-[0.95] md:text-7xl">{title}</h2>
      {sub && <p className={cn("mt-5 max-w-2xl text-lg text-muted-foreground", center && "mx-auto")}>{sub}</p>}
    </Reveal>
  );
}

export function RegisterLink({ children = "Register Now", className, variant = "solid" }: { children?: ReactNode; className?: string; variant?: "solid" | "ghost" }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      href={EVENT.registrationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(variant === "solid" ? "btn-solid" : "btn-ghost", className)}
    >
      {children} <span aria-hidden>→</span>
    </motion.a>
  );
}

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q}>
            <h3>
              <button
                aria-expanded={isOpen}
                aria-controls={`acc-${it.q}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center gap-5 py-5 text-left text-lg font-semibold transition-colors hover:text-primary"
              >
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1">{it.q}</span>
                <ChevronDown className={cn("size-5 transition-transform", isOpen && "rotate-180 text-primary")} />
              </button>
            </h3>
            <div id={`acc-${it.q}`} role="region" hidden={!isOpen} className="pb-6 pl-10 text-muted-foreground">{it.a}</div>
          </div>
        );
      })}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="inline-block border border-primary/50 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">{children}</span>;
}
