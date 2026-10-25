import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EVENT } from "@/lib/event-config";
import portal from "@/assets/portal-vortex.png.asset.json";

export function Opener({ onClose }: { onClose: () => void }) {
  const reduceMotion = useReducedMotion();
  const skipRef = useRef<HTMLButtonElement>(null);
  const enterRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    skipRef.current?.focus({ preventScroll: true });
    const timeout = window.setTimeout(onClose, 6000);
    return () => {
      window.clearTimeout(timeout);
      document.body.style.overflow = overflow;
      if (previous instanceof HTMLElement) previous.focus({ preventScroll: true });
    };
  }, [onClose]);

  const reveal = (delay: number) => ({
    initial: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 24, scale: reduceMotion ? 1 : 0.94 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { delay: reduceMotion ? 0 : delay, duration: 0.65 },
  });

  return (
    <motion.div className="dark opener" role="dialog" aria-modal="true" aria-labelledby="opener-title"
      initial={{ opacity: 1 }} exit={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }} transition={{ duration: 0.45 }}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose();
        if (event.key === "Tab") {
          event.preventDefault();
          (document.activeElement === skipRef.current ? enterRef : skipRef).current?.focus();
        }
      }}>
      <img className="opener-backdrop" src={portal.url} alt="" aria-hidden="true" />
      <div className="opener-shade" aria-hidden="true" />
      <div className="absolute inset-0 scanlines pointer-events-none" aria-hidden="true" />
      <div className="opener-rail opener-rail-left" aria-hidden="true" />
      <div className="opener-rail opener-rail-right" aria-hidden="true" />
      <div className="opener-top">
        <span className="font-mono text-xs text-muted-foreground">ALGONEX / 1.0</span>
        <Button ref={skipRef} variant="ghost" className="min-h-11 text-foreground" onClick={onClose}>Skip intro <ChevronsRight /></Button>
      </div>
      <div className="opener-stage">
        <motion.div {...reveal(0.15)} className="opener-partners">
          <div className="opener-partner">
            <img className="opener-mdu" src={EVENT.logo} alt={EVENT.university} />
            <span className="font-mono text-xs text-muted-foreground">PRESENTS</span>
          </div>
          <span className="opener-cross text-primary" aria-hidden="true">×</span>
          <div className="opener-partner">
            <img className="opener-club" src={EVENT.clubLogo} alt={EVENT.organizer} />
            <span className="font-mono text-xs text-muted-foreground">ORGANISED BY</span>
          </div>
        </motion.div>
        <motion.div {...reveal(0.65)} className="opener-emblem">
          <h1 id="opener-title" className="sr-only">{EVENT.name}</h1>
          <img src={EVENT.eventLogo} alt={EVENT.name} />
          <div className="opener-logo-sweep" aria-hidden="true" />
        </motion.div>
        <motion.div {...reveal(1.1)} className="text-center">
          <p className="font-sans text-lg md:text-2xl text-foreground">{EVENT.tagline}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span>{EVENT.datesLabel}</span><span className="text-primary">{EVENT.durationHours} HOURS</span><span>DEHRADUN</span>
          </div>
        </motion.div>
        <Button ref={enterRef} onClick={onClose} className="opener-enter min-h-12 mt-8 px-8 rounded-none font-mono">Enter AlgoNex <ArrowRight /></Button>
      </div>
      <div className="opener-bottom" aria-hidden="true"><span className="font-mono text-xs text-muted-foreground">{EVENT.university}</span><div className="opener-countdown"><div /></div></div>
    </motion.div>
  );
}