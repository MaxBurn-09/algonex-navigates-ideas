import { createFileRoute } from "@tanstack/react-router";
import { Rules } from "@/components/algonex/Sections2";

const TITLE = "Hackathon Rules & Eligibility | AlgoNex 1.0 — MDU Dehradun";
const DESC = "Official AlgoNex 1.0 hackathon rules: eligibility, team size, submission, judging criteria and code of conduct for the 30-hour student hackathon at Maya Devi University, Dehradun.";

export const Route = createFileRoute("/rules")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hackathon.mdu.edu.in/rules" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hackathon.mdu.edu.in/rules" }],
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
