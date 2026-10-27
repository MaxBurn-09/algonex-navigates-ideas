import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (n: (typeof NAV)[number]) =>
    n.hash ? isHome && activeSection === n.hash : n.to === "/" ? isHome && activeSection === "home" : pathname === n.to;

  const NavA = ({ n, className, children, onClick }: { n: (typeof NAV)[number]; className?: string; children: React.ReactNode; onClick?: () => void }) =>
    n.hash ? (
      <a href={`/#${n.hash}`} onClick={onClick} aria-current={isActive(n) ? "location" : undefined} className={className}>{children}</a>
    ) : (
      <Link to={n.to} onClick={onClick} aria-current={isActive(n) ? "page" : undefined} className={className}>{children}</Link>
    );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <header className={cn("site-header fixed inset-x-0 top-0 z-50", solid && "site-header-scrolled")}>
        <motion.div style={{ scaleX: x }} aria-hidden className="absolute inset-x-0 bottom-0 h-px origin-left bg-primary" />
        <nav className="site-header-inner mx-auto flex max-w-7xl items-center gap-3 px-5 xl:gap-5" aria-label="Main">
          <Link to="/" className="header-brand flex shrink-0 items-center" aria-label="Maya Devi University, home">
            <img src={theme === "dark" ? EVENT.headerLogoDark : EVENT.headerLogo} alt="Maya Devi University" className="header-logo object-contain object-left" />
          </Link>
          <ul className="ml-auto hidden items-center gap-1 xl:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <NavA n={n} className={cn("header-link", isActive(n) && "header-link-active")}>{n.label}</NavA>
              </li>
            ))}
          </ul>
          <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-1 xl:border-l xl:border-border xl:pl-4">
            <Button variant="ghost" size="icon" onClick={onToggle} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} className="size-11 rounded-md text-muted-foreground hover:text-primary">
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
            <RegisterLink className="header-register hidden sm:inline-flex">Register</RegisterLink>
            <Dialog.Trigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu" className="size-11 rounded-md bg-transparent xl:hidden"><Menu /></Button>
            </Dialog.Trigger>
          </div>
        </nav>
      </header>
      <Dialog.Content aria-describedby={undefined} className="header-menu fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-background px-6 py-5 text-foreground">
            <Dialog.Title className="sr-only">Main navigation</Dialog.Title>
            <div className="flex items-center justify-between border-b border-border pb-5">
              <Link to="/" onClick={() => setOpen(false)} aria-label="Maya Devi University, home"><img src={theme === "dark" ? EVENT.headerLogoDark : EVENT.headerLogo} alt="Maya Devi University" className="header-logo object-contain object-left" /></Link>
              <Dialog.Close asChild><Button variant="outline" size="icon" aria-label="Close menu" className="size-11"><X /></Button></Dialog.Close>
            </div>
            <ul className="my-5 flex-1 divide-y divide-border">
              {NAV.map((n, i) => (
                <li key={n.id}>
                  <NavA n={n} onClick={() => setOpen(false)} className={cn("group flex min-h-12 items-center gap-4 py-3 text-xl font-medium transition-colors hover:text-primary", isActive(n) && "text-primary")}>
                    <span aria-hidden className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>{n.label}<ArrowUpRight aria-hidden className="ml-auto size-4 text-muted-foreground group-hover:text-primary" />
                  </NavA>
                </li>
              ))}
            </ul>
            <RegisterLink className="header-register w-full shrink-0 justify-center">Register on Unstop</RegisterLink>
      </Dialog.Content>
    </Dialog.Root>
  );
}
