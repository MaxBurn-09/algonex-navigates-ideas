// Single source of truth for every AlgoNex event detail shown on the site.
// Edit values here; components read from this file only.

import mduLogo from "@/assets/mdu-logo.png.asset.json";
import mduBanner from "@/assets/mdu-banner.png.asset.json";
import mduWordmarkDark from "@/assets/mdu-wordmark-dark.png.asset.json";
import clubLogoAsset from "@/assets/searching-eye-club.png.asset.json";
import eventLogoAsset from "@/assets/algonex-emblem.png.asset.json";
import partnerIbm from "@/assets/partner-ibm.png.asset.json";
import partnerInfosys from "@/assets/partner-infosys-springboard.png.asset.json";
import partnerWave from "@/assets/partner-wave-techtronics.png.asset.json";


export interface Track { no: string; title: string; desc: string; detail: string; icon: string }
export interface ScheduleItem { time: string; title: string }
export interface Milestone { label: string; date: string; status: "confirmed" | "proposed" | "tbc" }
export interface Prize { place: string; amount: number; note: string }
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
  email: "hackathon@mdu.edu.in",
  phone: "", // shown only once confirmed
  contacts: [
    { name: "Yash", phone: "+91 9663516444" },
    { name: "Luv Gupta", phone: "+91 8218383750" },
    { name: "Vaibhav Singh", phone: "+91 9682424582" },
    { name: "Shivam Bhatnagar", phone: "+91 7668040718" },
  ] as { name: string; phone: string }[],

  showPrizePool: true,
  prizePoolAmount: 200000,
  prizePoolLabel: "₹2 Lakh+",
  socials: [] as { label: string; url: string }[], // add only real URLs
  logo: mduLogo.url,
  headerLogo: mduBanner.url,
  headerLogoDark: mduWordmarkDark.url,
  clubLogo: clubLogoAsset.url,
  eventLogo: eventLogoAsset.url,
};

export const PARTNERS = [
  { name: "IBM", logo: partnerIbm.url },
  { name: "Infosys Springboard", logo: partnerInfosys.url },
  { name: "Wave Techtronics", logo: partnerWave.url },
];

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
  { time: "2:00 PM", title: "Final testing, Git push and deployment" },
  { time: "4:00 PM", title: "Submission deadline — build clock stops" },
  { time: "4:30 PM", title: "Final presentations and live demos" },
  { time: "6:00 PM", title: "Closing ceremony and prize distribution" },
  { time: "7:00 PM", title: "Networking and event wrap-up" },
];

export const MILESTONES: Milestone[] = [
  { label: "Registration opens", date: "On Unstop", status: "confirmed" },
  { label: "Registration deadline", date: "18 Nov 2026", status: "confirmed" },
  { label: "Online shortlisting round", date: "20 Nov 2026", status: "confirmed" },
  { label: "Hackathon finals begin", date: "25 Nov 2026", status: "confirmed" },
  { label: "Final submission", date: "26 Nov 2026", status: "confirmed" },
  { label: "Results & prizes", date: "26 Nov 2026", status: "proposed" },
];

export const PRIZES: Prize[] = [
  { place: "Second", amount: 45000, note: "Runner-up team · certificates for all members" },
  { place: "First", amount: 65000, note: "Champion team · trophy & certificates" },
  { place: "Third", amount: 30000, note: "Second runner-up · certificates for all members" },
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
  { title: "Eligibility", body: "AlgoNex 1.0 is open to students who are passionate about building with technology.\nParticipants must be currently enrolled students; valid college ID may be checked at the venue.\nEvery participant must be individually registered on Unstop with the ₹500 fee paid.\nBeginners are welcome — curiosity matters more than experience." },
  { title: "Team", body: "AlgoNex is team-based: 3 to 5 members per team.\nEach team must designate one team leader for official communication.\nA participant cannot be a member of more than one team.\nTeams are encouraged to bring diverse skills: development, design, AI, product and business.\nTeam changes after registration need organiser approval." },
  { title: "Submission", body: "All code, design and content must be created during the 30-hour build window.\nSubmit a public repository link, a short description and demo material in the stated format.\nOnly commits made before the deadline will be evaluated — late entries are not accepted.\nOpen-source libraries, third-party APIs and AI coding assistants may be used and must be disclosed in your README.\nPre-existing personal code is allowed only as a small, declared starter or utility." },
  { title: "Judging", body: "Projects are scored on Innovation (25%), Technical Execution (25%), Impact (20%), UI/UX (15%) and Presentation (15%).\nEach team gets a fixed demo slot followed by judge questions.\nScores are combined across the judging panel; decisions of the judges are final.\nAny attempt to influence judges outside the official process is not allowed." },
  { title: "Code of Conduct", body: "Treat participants, mentors, volunteers and staff with respect.\nHarassment, discrimination, intimidation or inappropriate behaviour of any kind is prohibited.\nRespect campus property, equipment and safety instructions.\nAlcohol, drugs and smoking are not allowed at the venue.\nDo not sabotage, access or tamper with other teams' work or systems." },
  { title: "Do's & Don'ts", body: "DO: build something original, ask mentors for help and demo your work live.\nDO: keep your repository public and your README honest about tools used.\nDON'T: plagiarise, present pre-built or pre-recorded work as live, or submit false information.\nDON'T: miss the deadline — the build clock stops at 4:00 PM on 26 November.\nBreaking the rules may lead to disqualification without prior notice." },
];

export const CLUB = [
  { front: "Who we are", back: "Searching Eyes is a student tech club at Maya Devi University, Dehradun." },
  { front: "What we do", back: "Workshops, coding sessions and build nights where students learn by making real things." },
  { front: "Our role", back: "We organise AlgoNex 1.0 — planning tracks, mentors, schedule and the on-ground experience." },
  { front: "Join us", back: "Want to help build the next edition? Reach the team at the contact email below." },
];

export const FAQ: FaqItem[] = [
  { q: "Who can participate?", a: "Students passionate about building with technology. Final eligibility will be set by the official rules." },
  { q: "What is the team size?", a: "Teams of 3 to 5 members. Every member registers individually on Unstop." },
  { q: "Can beginners participate?", a: "Yes. Curiosity matters more than experience — mentors and workshops are planned to help first-timers." },
  { q: "Can I participate individually?", a: "No — AlgoNex is a team event. Form a team of 3 to 5 members before registering." },
  { q: "What technologies can we use?", a: "Any stack you like, unless the official rules restrict a specific track." },
  { q: "Is the hackathon free?", a: "No. The registration fee is ₹500 per member, subject to confirmation by the organizers." },
  { q: "Will mentors be available?", a: "Mentorship sessions are planned. Confirmed mentors will be announced by the organizing team." },
  { q: "What do we need to submit?", a: "Typically a working prototype, code repository and a short presentation. Final requirements will be in the rulebook." },
  { q: "How will judging work?", a: "Projects are scored on innovation, execution, impact, UI/UX and presentation, as per the official rulebook." },
  { q: "What happens after registration?", a: "Unstop will confirm your registration. Shortlisting and next steps will be shared by the organizers." },
];

export const MENTORS: Mentor[] = []; // populate when confirmed

// to = route path; hash = on-page section on the home page
export const NAV = [
  { id: "home", label: "Home", to: "/" },
  { id: "about", label: "About", to: "/", hash: "about" },
  { id: "tracks", label: "Tracks", to: "/", hash: "tracks" },
  { id: "timeline", label: "Timeline", to: "/", hash: "timeline" },
  { id: "prizes", label: "Prizes", to: "/prizes" },
  { id: "rules", label: "Rules", to: "/rules" },
  { id: "faq", label: "FAQ", to: "/faq" },
  { id: "contact", label: "Contact", to: "/", hash: "contact" },
] as { id: string; label: string; to: string; hash?: string }[];
