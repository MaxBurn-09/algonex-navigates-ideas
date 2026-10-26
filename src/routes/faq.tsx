import { createFileRoute } from "@tanstack/react-router";
import { FAQSection } from "@/components/algonex/Sections2";

const TITLE = "FAQ | AlgoNex 1.0 — MDU Hackathon";
const DESC = "Quick answers about AlgoNex 1.0 — eligibility, team size, fees, mentors, submissions and judging at the Maya Devi University 30-hour hackathon.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hackathon.mdu.edu.in/faq" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hackathon.mdu.edu.in/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main id="main">
      <FAQSection />
    </main>
  );
}
