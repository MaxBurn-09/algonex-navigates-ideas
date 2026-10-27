import { createFileRoute } from "@tanstack/react-router";
import { EVENT } from "@/lib/event-config";
import { Hero } from "@/components/algonex/Hero";
import { About, Benefits, Evaluation, PrizesTeaser, Stats, Ticker, Timeline, Tracks } from "@/components/algonex/Sections";
import { Club, Contact, Mentors, Partners, RegistrationCTA, University } from "@/components/algonex/Sections2";

const TITLE = "AlgoNex 1.0 Hackathon 2026 | 30-Hour Student Hackathon in Dehradun — MDU";
const DESC = "AlgoNex 1.0 is a 30-hour student hackathon at Maya Devi University, Dehradun (Uttarakhand) on 25–26 November 2026. 8 open innovation tracks, ₹2 Lakh+ prize pool, team registration on Unstop.";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hackathon.mdu.edu.in/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hackathon.mdu.edu.in/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Event",
        name: "AlgoNex 1.0 Hackathon",
        description: DESC,
        startDate: EVENT.start,
        endDate: EVENT.end,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        url: "https://hackathon.mdu.edu.in/",
        location: { "@type": "Place", name: "Maya Devi University", address: { "@type": "PostalAddress", addressLocality: "Dehradun", addressRegion: "Uttarakhand", addressCountry: "IN" } },
        organizer: { "@type": "Organization", name: "Maya Devi University", url: "https://hackathon.mdu.edu.in/" },
        offers: { "@type": "Offer", price: "500", priceCurrency: "INR", availability: "https://schema.org/InStock", url: "https://hackathon.mdu.edu.in/" },
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main id="main" className="algonex-home">
      <Hero />
      <Ticker />
      <Stats />
      <About />
      <Benefits />
      <Tracks />
      <Timeline />
      <PrizesTeaser />
      <Evaluation />
      <RegistrationCTA />
      <Mentors />
      <University />
      <Club />
      <Partners />
      <Contact />
    </main>
  );
}
