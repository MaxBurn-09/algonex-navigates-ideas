import { createFileRoute } from "@tanstack/react-router";
import { Rules } from "@/components/algonex/Sections2";

const TITLE = "Rules & Regulations | AlgoNex 1.0 — MDU Hackathon";
const DESC = "The eight rule areas every AlgoNex 1.0 team must follow — originality, team participation, ethics, fair play, deadlines, AI use, judging and disqualification.";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://algonex-navigates-ideas.lovable.app/rules" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://algonex-navigates-ideas.lovable.app/rules" }],
  }),
  component: RulesPage,
});

function RulesPage() {
  return (
    <main id="main">
      <Rules />
    </main>
  );
}
