export interface TimelineItem {
  org: string;
  role: string;
  period: string;
  kind: "work" | "education";
  note?: string;
}

/* Reverse-chronological by start date. */
export const timeline: TimelineItem[] = [
  {
    org: "Bridged",
    role: "Design Lead",
    period: "09/2025 — present",
    kind: "work",
    note: "Brand identity and digital presence, built from scratch.",
  },
  {
    org: "ZHAW",
    role: "BSc Business Administration — Behavioural Design",
    period: "09/2023 — 07/2026",
    kind: "education",
    note: "Where behaviour, psychology and product design met.",
  },
  {
    org: "Accenture Song",
    role: "Junior Consultant — Design & Digital Products",
    period: "09/2022 — present",
    kind: "work",
    note: "Research, concept, design and digital product work for clients.",
  },
  {
    org: "Accenture",
    role: "Mediamatiker EFZ / BM",
    period: "08/2018 — 08/2022",
    kind: "education",
    note: "A broad digital and media foundation — including a year in mobile development.",
  },
];

export interface Role {
  org: string;
  role: string;
  period: string;
  note?: string;
}

export const experience: Role[] = [
  {
    org: "Accenture Song",
    role: "Junior Consultant — Design & Digital Products",
    period: "09/2022 — present",
  },
  {
    org: "Accenture",
    role: "Mediamatiker EFZ / BM",
    period: "08/2018 — 08/2022",
  },
];

export const volunteering: Role[] = [
  {
    org: "Bridged",
    role: "Design Lead",
    period: "09/2025 — present",
  },
];

export const education: Role[] = [
  {
    org: "ZHAW",
    role: "BSc Business Administration",
    period: "09/2023 — 07/2026",
    note: "Major in Behavioural Design",
  },
];

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Design & Prototyping",
    skills: [
      "UI/UX Design",
      "Figma",
      "Prototyping",
      "Interaction Design",
      "Design Systems",
      "Visual Design",
    ],
  },
  {
    title: "Research & Strategy",
    skills: [
      "User Research",
      "Behavioural Design",
      "Consumer Psychology",
      "Customer Experience",
      "Marketing Strategy",
    ],
  },
  {
    title: "Creative",
    skills: [
      "Branding",
      "Graphic Design",
      "Motion Design",
      "Storyboarding",
      "Photography",
    ],
  },
  {
    title: "Tech",
    skills: ["HTML", "CSS", "JavaScript", "WordPress", "Mobile UI"],
  },
];

/* Large typographic skill words for the editorial treatment. */
export const skillWords = [
  "Research",
  "UX/UI",
  "Prototyping",
  "Behaviour",
  "Systems",
  "Branding",
  "Motion",
  "Photography",
];

export const journey = [
  "Media Technology",
  "Mobile Development",
  "Behavioural Design",
  "Digital Product Design",
];

export const funFacts = [
  "I have a slightly unreasonable love for MINI Coopers.",
  "I collect analog photographs like I have a plan for all of them.",
  "I can spend an embarrassing amount of time looking at mid-century furniture.",
  "I will probably redesign something nobody asked me to redesign.",
];
