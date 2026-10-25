import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { EVENT, NAV } from "@/lib/event-config";
import { RegisterLink } from "./ui";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      <motion.div style={{ scaleX: x }} className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary" />
      <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", solid ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent")}>
        <nav className="mx-auto flex h-18 max-w-7xl items-center gap-6 px-5 py-3" aria-label="Main">
          <a href="#home" className="flex items-center gap-3">
            <img src={EVENT.logo} alt="Maya Devi University logo" width={40} height={40} className="size-10" />
            <span className="leading-tight">
              <span className="block font-display text-lg tracking-wide">ALGONEX 1.0</span>
              <span className="block font-mono text-[9px] tracking-[0.2em] text-muted-foreground">MAYA DEVI UNIVERSITY</span>
            </span>
          </a>
          <ul className="ml-auto hidden items-center gap-5 xl:flex">
            {NAV.map((n) => (
              <li key={n.id}><a href={`#${n.id}`} className="nav-link">{n.label}</a></li>
            ))}
          </ul>
          <RegisterLink className="ml-auto hidden sm:inline-flex xl:ml-0">Register</RegisterLink>
          <button aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)} className="ml-auto grid size-11 place-items-center border border-border sm:ml-0 xl:hidden">
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
            className="fixed inset-0 z-[70] flex flex-col bg-background grid-bg px-6 py-5"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-xl">ALGONEX 1.0</span>
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid size-11 place-items-center border border-border"><X className="size-5" /></button>
            </div>
            <ul className="mt-10 flex-1 space-y-1">
              {NAV.map((n, i) => (
                <motion.li key={n.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.04 }}>
                  <a href={`#${n.id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-1.5 font-display text-4xl uppercase hover:text-primary">
                    <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>{n.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <RegisterLink className="w-full justify-center">Register on Unstop</RegisterLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
