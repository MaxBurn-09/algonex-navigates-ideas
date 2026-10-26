import { createFileRoute } from "@tanstack/react-router";
import { PrizesPage } from "@/components/algonex/Sections";
import { EVENT } from "@/lib/event-config";

const TITLE = `Prizes — ${EVENT.prizePoolLabel} Pool | AlgoNex 1.0 — MDU Hackathon`;
const DESC = `Explore the ${EVENT.prizePoolLabel} total prize pool at AlgoNex 1.0, Maya Devi University, with podium prizes and special awards. Individual award amounts are provisional.`;

export const Route = createFileRoute("/prizes")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hackathon.mdu.edu.in/prizes" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hackathon.mdu.edu.in/prizes" }],
  }),
  component: PrizesRoute,
});

function PrizesRoute() {
  return (
    <main id="main">
      <PrizesPage />
    </main>
  );
}
