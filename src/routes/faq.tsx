import { createFileRoute } from "@tanstack/react-router";
import { FAQSection } from "@/components/algonex/Sections2";

const TITLE = "Hackathon FAQ | AlgoNex 1.0 — MDU Dehradun";
const DESC = "AlgoNex 1.0 hackathon FAQ: who can join, team size, ₹500 fee, registration, mentors, submissions and judging at the Maya Devi University 30-hour hackathon in Dehradun.";

export const Route = createFileRoute("/faq")({
  staticData: { sitemap: true },
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
