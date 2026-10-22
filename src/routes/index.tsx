import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AlgoNex | Maya Devi University Hackathon" },
      { name: "description", content: "AlgoNex hackathon at Maya Devi University — themes, details and registration." },
      { property: "og:title", content: "AlgoNex | Maya Devi University Hackathon" },
      { property: "og:description", content: "AlgoNex hackathon at Maya Devi University — themes, details and registration." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/site/index.html"
      title="AlgoNex"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  );
}
