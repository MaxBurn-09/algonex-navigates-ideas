import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { EVENT, NAV } from "@/lib/event-config";
import { RegisterLink } from "./ui";
import { cn } from "@/lib/utils";

export function Navbar({ theme, onToggle }: { theme: "dark" | "light"; onToggle: () => void }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Section highlight only applies on the home page.
  useEffect(() => {
    if (!isHome) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => { if (n.hash) { const el = document.getElementById(n.hash); if (el) obs.observe(el); } });
    const home = document.getElementById("home");
    if (home) obs.observe(home);
    return () => obs.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const isActive = (n: (typeof NAV)[number]) =>
    n.hash ? isHome && activeSection === n.hash : n.to === "/" ? isHome && activeSection === "home" : pathname === n.to;

  const NavA = ({ n, className, children, onClick }: { n: (typeof NAV)[number]; className?: string; children: React.ReactNode; onClick?: () => void }) =>
    n.hash ? (
      <a href={`/#${n.hash}`} onClick={onClick} className={className}>{children}</a>
    ) : (
      <Link to={n.to} onClick={onClick} className={className}>{children}</Link>
    );

  return (
    <>
      <motion.div style={{ scaleX: x }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-primary shadow-glow" />
      <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", solid ? "border-b border-primary/40 bg-background/90 backdrop-blur-xl" : "bg-transparent")}>
        <nav className={cn("mx-auto flex max-w-7xl items-center gap-6 px-5 transition-all duration-300", solid ? "h-14" : "h-18 py-3")} aria-label="Main">
          <Link to="/" className="group flex items-center" aria-label="AlgoNex 1.0 — Maya Devi University, home">
            <img src={EVENT.headerLogo} alt="Maya Devi University" className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-11" />
          </Link>
          <ul className="ml-auto hidden items-center gap-6 xl:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <NavA n={n} className={cn("nav-link", isActive(n) && "nav-active")}>{n.label}</NavA>
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
                  <NavA n={n} onClick={() => setOpen(false)} className={cn("flex items-baseline gap-4 py-1.5 font-display text-4xl uppercase transition-colors hover:text-primary", isActive(n) && "text-primary")}>
                    <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>{n.label}
                  </NavA>
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
