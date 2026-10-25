import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/algonex/Navbar";
import { Hero } from "@/components/algonex/Hero";
import { About, Benefits, Evaluation, Prizes, Stats, Ticker, Timeline, Tracks } from "@/components/algonex/Sections";
import { Contact, FAQSection, Footer, Mentors, RegistrationCTA, Rules, University } from "@/components/algonex/Sections2";

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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen overflow-x-clip bg-background text-foreground">
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-primary focus:p-3">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Stats />
        <About />
        <Benefits />
        <Tracks />
        <Timeline />
        <Prizes />
        <Evaluation />
        <Rules />
        <RegistrationCTA />
        <Mentors />
        <University />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
