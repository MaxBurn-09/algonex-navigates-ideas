import { createFileRoute } from "@tanstack/react-router";
import { PrizesPage } from "@/components/algonex/Sections";

const TITLE = "Prizes — ₹1.5 Lakh+ Pool | AlgoNex 1.0 — MDU Hackathon";
const DESC = "AlgoNex 1.0 prize pool: ₹65,000 for the champions, ₹45,000 and ₹30,000 for runners-up, plus special awards for UI/UX, innovation, social impact and beginner teams.";

export const Route = createFileRoute("/prizes")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://algonex-navigates-ideas.lovable.app/prizes" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://algonex-navigates-ideas.lovable.app/prizes" }],
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
