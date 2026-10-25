// Single source of truth for every AlgoNex event detail shown on the site.
// Edit values here; components read from this file only.

export interface Track { no: string; title: string; desc: string; detail: string; icon: string }
export interface ScheduleItem { time: string; title: string }
export interface Milestone { label: string; date: string; status: "confirmed" | "proposed" | "tbc" }
export interface Prize { place: string; amount: number }
export interface FaqItem { q: string; a: string }
export interface Mentor { name: string; role: string; org: string; bio: string; photo?: string; linkedin?: string }
export interface RuleBlock { title: string; body: string }

export const EVENT = {
  name: "AlgoNex 1.0",
  tagline: "Where Algorithm Meets Imagination",
  organizer: "Searching Eyes Club",
  university: "Maya Devi University",
  location: "Maya Devi University, Dehradun, Uttarakhand, India",
  datesLabel: "25–26 November 2026",
  // Build clock: 30 hours (IST)
  start: "2026-11-25T10:00:00+05:30",
  end: "2026-11-26T16:00:00+05:30",
  durationHours: 30,
  fee: "₹500",
  registrationUrl: "https://unstop.com/", // TODO: replace with official Unstop event URL
  registrationOpen: false,
  rulebookUrl: "", // official rulebook PDF link when available
  email: "mdu.hackathon@mdu.edu.in",
  phone: "", // shown only once confirmed
  showPrizePool: true,
  prizePoolLabel: "₹1.5 Lakh+",
  socials: [] as { label: string; url: string }[], // add only real URLs
  logo: "/site/logo.png",
  clubLogo: "/site/searching-eyes.png",
};

export const TRACKS: Track[] = [
  { no: "01", icon: "Brain", title: "AI & Machine Learning", desc: "Intelligent solutions for real-world challenges.", detail: "Models, agents and data pipelines that make decisions useful for people." },
  { no: "02", icon: "Wallet", title: "FinTech", desc: "Rethinking financial technology and accessibility.", detail: "Payments, literacy and inclusion tools for users the system often misses." },
  { no: "03", icon: "HeartPulse", title: "Healthcare", desc: "Technology for better health and care delivery.", detail: "Diagnostics, access, records and wellbeing products that reduce friction in care." },
  { no: "04", icon: "GraduationCap", title: "EdTech", desc: "Improving learning and education.", detail: "Tools that make learning more personal, accessible and measurable." },
  { no: "05", icon: "ShieldCheck", title: "Cybersecurity", desc: "Building safer digital ecosystems.", detail: "Detection, privacy and awareness solutions that protect real users." },
  { no: "06", icon: "Building2", title: "Smart Campus", desc: "Smarter, more connected campus experiences.", detail: "Attendance, navigation, energy and community systems for university life." },
  { no: "07", icon: "Leaf", title: "Sustainability", desc: "Technology for a more sustainable future.", detail: "Climate, waste, water and energy projects with measurable impact." },
  { no: "08", icon: "Sparkles", title: "Open Innovation", desc: "Build something unexpected.", detail: "No box. Bring a problem you care about and prove it matters." },
];

export const DAY1: ScheduleItem[] = [
  { time: "8:00 AM", title: "Check-in, welcome kits and breakfast" },
  { time: "9:00 AM", title: "Opening ceremony and keynote" },
  { time: "10:00 AM", title: "Hackathon officially begins" },
  { time: "1:30 PM", title: "Lunch and networking" },
  { time: "4:30 PM", title: "Technical learning session or workshop" },
  { time: "7:00 PM", title: "Mentorship session" },
  { time: "9:00 PM", title: "Dinner and recharge" },
  { time: "11:30 PM", title: "Coding activities and community interaction" },
];
export const DAY2: ScheduleItem[] = [
  { time: "2:00 AM", title: "Development and debugging" },
  { time: "7:30 AM", title: "Breakfast and energizer" },
  { time: "10:30 AM", title: "Mentorship and presentation preparation" },
  { time: "1:00 PM", title: "Lunch and final development sync" },
  { time: "2:00 PM", title: "Final testing and deployment" },
  { time: "3:00 PM", title: "Submission deadline" },
  { time: "3:30 PM", title: "Final presentations and live demos" },
  { time: "6:00 PM", title: "Closing ceremony and prize distribution" },
  { time: "7:00 PM", title: "Networking and event wrap-up" },
];

export const MILESTONES: Milestone[] = [
  { label: "Registration opens", date: "To be confirmed", status: "tbc" },
  { label: "Registration closes", date: "To be confirmed", status: "tbc" },
  { label: "Team shortlisting", date: "18 Nov 2026", status: "proposed" },
  { label: "Hackathon begins", date: "25 Nov 2026", status: "confirmed" },
  { label: "Final submission", date: "26 Nov 2026", status: "confirmed" },
  { label: "Results", date: "26 Nov 2026", status: "proposed" },
];

export const PRIZES: Prize[] = [
  { place: "Second", amount: 45000 },
  { place: "First", amount: 65000 },
  { place: "Third", amount: 30000 },
];
export const AWARDS = ["Best UI/UX", "Best Innovation", "Best Social Impact", "Best Beginner Team"];

export const CRITERIA = [
  { name: "Innovation", pct: 25, note: "How original and bold is the idea?" },
  { name: "Technical Execution", pct: 25, note: "Does it work, and is it built well?" },
  { name: "Impact and Relevance", pct: 20, note: "Does it solve a real problem for real people?" },
  { name: "UI/UX", pct: 15, note: "Is it clear and pleasant to use?" },
  { name: "Presentation", pct: 15, note: "Can the team explain and demo it with confidence?" },
];

export const RULES: RuleBlock[] = [
  { title: "Eligibility", body: "Draft: Open to enrolled students. Final eligibility will be defined in the official rulebook." },
  { title: "Team Size", body: "Draft: Team-based participation. Minimum and maximum team size will be announced by the organizers." },
  { title: "Originality", body: "All work must be built during the 30-hour window. Pre-built projects are not allowed; open-source libraries are fine with attribution." },
  { title: "Technology Usage", body: "Any language, framework or platform may be used unless the official rules state otherwise." },
  { title: "Submission Requirements", body: "Draft: Public repository, short demo and presentation before the submission deadline. Exact format to be confirmed." },
  { title: "Intellectual Property", body: "Draft: Teams retain ownership of their work. Final IP terms will be in the official rulebook." },
  { title: "Code of Conduct", body: "Be respectful, inclusive and safe. Harassment or misconduct of any kind is not tolerated." },
  { title: "Judging", body: "Projects are scored on the published evaluation criteria. Judges' decisions are final." },
  { title: "Disqualification", body: "Plagiarism, misconduct, late submission or rule violations may lead to disqualification." },
];

export const FAQ: FaqItem[] = [
  { q: "Who can participate?", a: "Students passionate about building with technology. Final eligibility will be set by the official rules." },
  { q: "What is the team size?", a: "AlgoNex is team-based. The exact team size will be confirmed in the official rulebook." },
  { q: "Can beginners participate?", a: "Yes. Curiosity matters more than experience — mentors and workshops are planned to help first-timers." },
  { q: "Can I participate individually?", a: "The event is team-based. Whether solo entries are allowed will be decided by the organizers." },
  { q: "What technologies can we use?", a: "Any stack you like, unless the official rules restrict a specific track." },
  { q: "Is the hackathon free?", a: "No. The registration fee is ₹500 per member, subject to confirmation by the organizers." },
  { q: "Will mentors be available?", a: "Mentorship sessions are planned. Confirmed mentors will be announced by the organizing team." },
  { q: "What do we need to submit?", a: "Typically a working prototype, code repository and a short presentation. Final requirements will be in the rulebook." },
  { q: "How will judging work?", a: "Projects are scored on innovation, execution, impact, UI/UX and presentation, as per the official rulebook." },
  { q: "What happens after registration?", a: "Unstop will confirm your registration. Shortlisting and next steps will be shared by the organizers." },
];

export const MENTORS: Mentor[] = []; // populate when confirmed

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "themes", label: "Themes" },
  { id: "timeline", label: "Timeline" },
  { id: "prizes", label: "Prizes" },
  { id: "tracks", label: "Tracks" },
  { id: "rules", label: "Rules" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];
