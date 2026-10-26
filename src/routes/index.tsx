import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/algonex/Hero";
import { About, Benefits, Evaluation, PrizesTeaser, Stats, Ticker, Timeline, Tracks } from "@/components/algonex/Sections";
import { Club, Contact, Mentors, RegistrationCTA, University } from "@/components/algonex/Sections2";

const TITLE = "AlgoNex 1.0 | Maya Devi University Hackathon 2026";
const DESC = "Join AlgoNex 1.0 at Maya Devi University, Dehradun, on 25–26 November 2026. Explore technology challenges, collaborate with builders, and develop innovative solutions at a 30-hour student hackathon.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://algonex-navigates-ideas.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://algonex-navigates-ideas.lovable.app/" }],
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
      <Contact />
    </main>
  );
}
