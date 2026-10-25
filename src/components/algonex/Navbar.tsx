import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { EVENT, NAV } from "@/lib/event-config";
import { RegisterLink } from "./ui";
import { cn } from "@/lib/utils";

export function Navbar({ theme, onToggle }: { theme: "dark" | "light"; onToggle: () => void }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => { const el = document.getElementById(n.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      <motion.div style={{ scaleX: x }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-primary shadow-glow" />
      <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", solid ? "border-b border-primary/40 bg-background/90 backdrop-blur-xl" : "bg-transparent")}>
        <nav className={cn("mx-auto flex max-w-7xl items-center gap-6 px-5 transition-all duration-300", solid ? "h-14" : "h-18 py-3")} aria-label="Main">
          <a href="#home" className="group flex items-center gap-3">
            <img src={EVENT.logo} alt="Maya Devi University logo" width={40} height={40} className="size-10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110" />
            <span className="leading-tight">
              <span className="flex items-center gap-1.5 font-display text-lg tracking-wide">
                <span aria-hidden className="inline-block h-4 w-1 -skew-x-12 bg-primary transition-transform duration-300 group-hover:scale-y-125" />
                ALGONEX 1.0
              </span>
              <span className="block font-mono text-[9px] tracking-[0.2em] text-muted-foreground">MAYA DEVI UNIVERSITY</span>
            </span>
          </a>
          <ul className="ml-auto hidden items-center gap-6 xl:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className={cn("nav-link", active === n.id && "nav-active")}>{n.label}</a>
              </li>
            ))}
          </ul>
          <button onClick={onToggle} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="ml-auto grid size-11 place-items-center border border-border transition-colors hover:border-primary hover:text-primary xl:ml-0">
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
          <RegisterLink className="cta-pulse hidden sm:inline-flex">Register</RegisterLink>
          <button aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)} className="grid size-11 place-items-center border border-border transition-colors hover:border-primary hover:text-primary xl:hidden">
            <Menu className="size-5" />
          </button>
        </nav>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog" aria-modal="true" aria-label="Menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
            className="fixed inset-0 z-[70] flex flex-col overflow-hidden bg-background grid-bg px-6 py-5"
          >
            <div aria-hidden className="hazard absolute inset-x-0 top-0 h-1.5" />
            <div aria-hidden className="pointer-events-none absolute -right-8 bottom-0 select-none font-display text-[34vw] leading-none text-outline opacity-20">MENU</div>
            <div className="relative flex items-center justify-between">
              <span className="flex items-center gap-2 font-display text-xl">
                <span aria-hidden className="inline-block h-4 w-1 -skew-x-12 bg-primary" />
                ALGONEX 1.0
              </span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid size-11 place-items-center border border-border transition-colors hover:border-primary hover:text-primary"><X className="size-5" /></button>
            </div>
            <ul className="relative mt-10 flex-1 space-y-1">
              {NAV.map((n, i) => (
                <motion.li key={n.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.04 }}>
                  <a href={`#${n.id}`} onClick={() => setOpen(false)} className={cn("flex items-baseline gap-4 py-1.5 font-display text-4xl uppercase transition-colors hover:text-primary", active === n.id && "text-primary")}>
                    <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>{n.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <RegisterLink className="cta-pulse relative w-full justify-center">Register on Unstop</RegisterLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
