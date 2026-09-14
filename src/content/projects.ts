import type { Project } from "./types";

/* Sentinel for links not yet supplied. Components render a clear
   "pending" state rather than inventing a URL. */
export const PENDING = "PENDING";

/* ============================================================
   01 — BRIDGED
   ============================================================ */
const bridged: Project = {
  slug: "bridged",
  number: "01",
  title: "BRIDGED",
  descriptor: "Brand Identity & Digital Experience",
  year: "2025",
  role: "Design Lead",
  discipline: ["Brand Identity", "Web Design", "Web Build", "Templates"],
  summary:
    "Building the brand identity and digital presence of a student-led consulting association from the ground up.",
  preview: {
    src: "/projects/bridged/preview.webp",
    video: "/projects/bridged/website.mp4",
    alt: "Bridged website — screen recording",
    w: 1727,
    h: 979,
    label: "Bridged — brand & website",
    placeholder: false,
    presentation: "browser",
  },
  heroMedia: [
    {
      src: "/projects/bridged/hero.webp",
      video: "/projects/bridged/website.mp4",
      alt: "Bridged website — screen recording",
      w: 1727,
      h: 979,
      label: "Bridged website — homepage",
      placeholder: false,
      presentation: "browser",
    },
  ],
  intro:
    "Bridged is a student-led consulting association. As Design Lead I established the brand and its entire digital presence from scratch — identity, website, and the everyday templates the organisation runs on.",
  meta: [
    { label: "Role", value: "Design Lead" },
    { label: "Year", value: "2025 — present" },
    { label: "Type", value: "Brand + Digital" },
    { label: "Scope", value: "Identity, Website, Applications" },
  ],
  blocks: [
    {
      type: "text",
      eyebrow: "Context",
      heading: "A young organisation needed a voice before it had a look.",
      body: [
        "Bridged is a student-led consulting association connecting students with real project work. When I joined, the organisation had ambition and momentum but no coherent identity — every document, slide and touchpoint looked like it came from a different place.",
        "The brief was open: give Bridged a look and a system that feels credible to clients and members alike, and make it something the team can actually maintain without a designer in the room.",
      ],
      layout: "split",
    },
    {
      type: "text",
      eyebrow: "Approach",
      heading: "Brand and website, built as one system.",
      body: [
        "Rather than design a logo and hand it off, I built the identity and the site in parallel, so each decision reinforced the other. The type moved from a soft, generic Avenir to Space Grotesk — precise enough for consulting, warm enough for a student community — with a strict grid and a monochrome base carrying it across every surface.",
      ],
      layout: "split",
    },
    {
      type: "text",
      eyebrow: "Website",
      heading: "Designed and built the live site.",
      body: [
        "bridged.ch is the organisation's front door. I designed and built it end to end — layout, motion and responsive behaviour — confident and current without over-designing, and always close to the identity: monochrome, typographic, calm.",
      ],
      layout: "split",
    },
    {
      type: "text",
      eyebrow: "Beyond the screen",
      heading: "A system the team can keep.",
      body: [
        "The identity had to survive everyday use, so I built Word and PowerPoint templates and the recurring brand applications. The team now turns out on-brand proposals, decks and documents by default — the brand holds even when no designer is in the room.",
      ],
      layout: "split",
    },
    {
      type: "text",
      eyebrow: "Takeaway",
      heading: "Owning the whole thing.",
      body: [
        "Bridged is where I owned everything from first sketch to shipped site and the templates behind it. It taught me that a brand is only as good as the system that keeps it consistent once the designer steps away.",
      ],
      layout: "split",
    },
    {
      type: "prototype",
      variant: "immersive",
      eyebrow: "Live site",
      label: "Visit bridged.ch",
      href: "https://bridged.ch/de",
      note: "See the brand and website live.",
    },
  ],
  liveUrl: "https://bridged.ch/de",
  prototypeUrl: undefined,
  seoTitle: "BRIDGED — Brand Identity & Digital Experience | Fabian Jamie Manz",
  seoDescription:
    "Building the brand identity, website and template system of a student-led consulting association from the ground up.",
};

/* ============================================================
   02 — NEON  (flagship UX case study)
   ============================================================ */
const neon: Project = {
  slug: "neon",
  number: "02",
  title: "NEON",
  descriptor: "Neuroinclusive Design in Mobile Banking",
  year: "2026",
  role: "Researcher & Designer",
  discipline: ["UX Research", "Neuroinclusive Design", "UI Design", "Prototyping"],
  summary:
    "A bachelor thesis investigating how mobile banking can work better for people with ADHD — research, an evaluation framework, and a redesign.",
  preview: {
    src: "/projects/neon/preview.webp",
    video: "/projects/neon/app.mp4",
    alt: "Neon neuroinclusive redesign — screen recording",
    w: 588,
    h: 1280,
    label: "Neon — redesign",
    placeholder: false,
    presentation: "device",
  },
  heroMedia: [
    {
      src: "/projects/neon/hero.webp",
      video: "/projects/neon/app.mp4",
      alt: "Neon redesigned mobile banking — screen recording",
      w: 588,
      h: 1280,
      label: "Neon — redesign overview",
      placeholder: false,
      presentation: "device",
    },
  ],
  intro:
    "My bachelor thesis: a neuroinclusive UI/UX analysis of the Neon mobile banking app, focused on users with ADHD. I ran research with neurodivergent participants, built a custom evaluation framework, and translated the findings into a redesign. The work received a strong academic result.",
  meta: [
    { label: "Role", value: "Researcher & Designer (sole)" },
    { label: "Year", value: "2026" },
    { label: "Type", value: "Bachelor thesis · ZHAW" },
    { label: "Subject", value: "Neon (mobile banking)" },
    { label: "Focus", value: "ADHD · Neuroinclusive UX" },
  ],
  blocks: [
    {
      type: "text",
      eyebrow: "Context",
      heading: "Banking apps assume a kind of attention not everyone has.",
      body: [
        "Mobile banking is where people make fast, consequential decisions — yet most apps are built for a calm, focused, neurotypical user. For people with ADHD, that creates friction exactly where the stakes are highest.",
        "Using Neon as the subject, I asked whether those issues could be fixed through concrete, defensible design changes — not surface tweaks.",
      ],
      layout: "split",
    },
    {
      type: "text",
      eyebrow: "Framework",
      heading: "A framework, not an opinion.",
      body: [
        "I built a catalogue of neuroinclusive criteria from the research, then assessed every screen against it. Each redesign decision traces back to a criterion — and each criterion back to a finding.",
        "The criteria catalogue was part of the thesis and can't be shared publicly.",
      ],
      layout: "split",
    },
    {
      type: "text",
      eyebrow: "Outcome",
      heading: "What it produced.",
      body: [
        "Research — a reusable set of neuroinclusive evaluation criteria, grounded in interviews with ADHD users. Design — a concept showing how those issues can be addressed in a real banking interface. A thesis concept: not shipped by Neon, no metrics claimed.",
      ],
      layout: "split",
    },
    {
      type: "gallery",
      columns: 3,
      eyebrow: "Final UI",
      heading: "The redesigned screens.",
      items: [
        {
          src: "/projects/neon/neon-1.jpg",
          alt: "Redesigned Neon budget and spending screen",
          w: 552,
          h: 1200,
          label: "Budget & Ausgaben",
          placeholder: false,
          presentation: "device",
        },
        {
          src: "/projects/neon/neon-2.jpg",
          alt: "Neon payment success screen",
          w: 552,
          h: 1200,
          label: "Zahlung erfolgreich",
          placeholder: false,
          presentation: "device",
        },
        {
          src: "/projects/neon/neon-3.jpg",
          alt: "Redesigned Neon home and account screen",
          w: 552,
          h: 1200,
          label: "Hauptkonto",
          placeholder: false,
          presentation: "device",
        },
      ],
    },
    {
      type: "prototype",
      variant: "immersive",
      eyebrow: "Figma",
      label: "Open the Figma file",
      href: "https://www.figma.com/design/W8LlkXXVvzVsw3XWExQXe4/Neon_BA--Copy-?node-id=1-2&t=qCtFLpF57O1FGZ2k-1",
      note: "The full Neon redesign — screens, components and flows.",
    },
  ],
  prototypeUrl: PENDING,
  liveUrl: undefined,
  seoTitle:
    "NEON — Neuroinclusive Design in Mobile Banking | Fabian Jamie Manz",
  seoDescription:
    "A bachelor thesis investigating how mobile banking can work better for people with ADHD: research with neurodivergent participants, a custom evaluation framework, and a redesign.",
};

/* ============================================================
   03 — PUMPIPUMPE
   ============================================================ */
const pumpipumpe: Project = {
  slug: "pumpipumpe",
  number: "03",
  title: "PUMPIPUMPE",
  descriptor: "Reimagining Neighbourhood Sharing",
  year: "Concept",
  role: "Product & UI Designer",
  discipline: ["Mobile UX", "Information Architecture", "UI System", "Prototyping"],
  summary:
    "A mobile-app concept that turns a sticker-based neighbourhood sharing platform into a real product experience.",
  preview: {
    src: "/projects/pumpipumpe/preview.webp",
    video: "/projects/pumpipumpe/app.mp4",
    alt: "Pumpipumpe app concept — screen recording",
    w: 588,
    h: 1280,
    label: "Pumpipumpe — app concept",
    placeholder: false,
    presentation: "device",
  },
  heroMedia: [
    {
      src: "/projects/pumpipumpe/hero.webp",
      video: "/projects/pumpipumpe/app.mp4",
      alt: "Pumpipumpe app concept overview — screen recording",
      w: 588,
      h: 1280,
      label: "Pumpipumpe — concept overview",
      placeholder: false,
      presentation: "device",
    },
  ],
  intro:
    "Pumpipumpe is a Swiss initiative where neighbours advertise what they're willing to lend using stickers on their mailboxes. This university project reimagines it as a mobile app — keeping the warmth of the original idea while giving it the structure of a real product.",
  meta: [
    { label: "Role", value: "Product & UI Designer" },
    { label: "Type", value: "University project" },
    { label: "Platform", value: "iOS" },
    { label: "Scope", value: "IA, UI system, prototype" },
  ],
  blocks: [
    {
      type: "text",
      eyebrow: "Context",
      heading: "A lovely idea that stops at the mailbox.",
      body: [
        "Pumpipumpe is a Swiss initiative where neighbours show what they'll lend — a drill, a ladder, a raclette grill — with stickers on their mailbox. It builds trust through proximity, but it stops there: no way to search what's nearby, ask, or arrange a handover.",
        "This university project reimagines it as a mobile app — keeping the neighbourly warmth while adding the structure of a real product.",
      ],
      layout: "split",
    },
    {
      type: "text",
      eyebrow: "The concept",
      heading: "Find, borrow, trust — close to home.",
      body: [
        "The app is map-first: see what neighbours are lending nearby, filter by category and borrowing duration, and open an item to arrange it. Trust is designed in — light-touch ratings, identity verification and approximate location instead of exact addresses — so lending to a stranger two streets away feels safe.",
        "It leans on familiar iOS patterns and a small, consistent component set, so every screen feels immediately learnable.",
      ],
      layout: "split",
    },
    {
      type: "gallery",
      columns: 3,
      eyebrow: "Final UI",
      heading: "The concept, realised.",
      items: [
        {
          src: "/projects/pumpipumpe/pp-1.jpg",
          alt: "Pumpipumpe home screen: search and browse categories nearby",
          w: 555,
          h: 1200,
          label: "Discover",
          placeholder: false,
          presentation: "device",
        },
        {
          src: "/projects/pumpipumpe/pp-2.jpg",
          alt: "Pumpipumpe item detail: a borrowable Bosch drill",
          w: 552,
          h: 1200,
          label: "Item",
          placeholder: false,
          presentation: "device",
        },
        {
          src: "/projects/pumpipumpe/pp-3.jpg",
          alt: "Pumpipumpe new-listing form: share an item to lend",
          w: 539,
          h: 1200,
          label: "New listing",
          placeholder: false,
          presentation: "device",
        },
      ],
    },
    {
      type: "text",
      eyebrow: "Takeaway",
      heading: "Designing trust, not just screens.",
      body: [
        "The hard part wasn't the UI — it was the invisible stuff: distance, privacy and reputation, the signals that make people comfortable lending to a stranger. A concept, not adopted by Pumpipumpe, but where I learned that information architecture and trust are the same problem in different clothes.",
      ],
      layout: "split",
    },
    {
      type: "prototype",
      variant: "immersive",
      eyebrow: "Figma",
      label: "Open the Figma file",
      href: "https://www.figma.com/design/JNgiiZliTwEzFuIADsp0k8/Pumpipumpe?node-id=3-2&t=Ru0AR44aP8Du5shA-1",
      note: "The full Pumpipumpe concept — screens, components and flows.",
    },
  ],
  prototypeUrl: PENDING,
  liveUrl: undefined,
  seoTitle: "PUMPIPUMPE — Reimagining Neighbourhood Sharing | Fabian Jamie Manz",
  seoDescription:
    "A self-initiated mobile-app concept turning a sticker-based neighbourhood sharing platform into a real product experience: IA, UI system and prototype.",
};

/* ============================================================
   04 — SPOTIFY
   ============================================================ */
const spotify: Project = {
  slug: "spotify",
  number: "04",
  title: "SPOTIFY",
  descriptor: "Rethinking the Listening Experience",
  year: "Concept",
  role: "Researcher & UI Designer",
  discipline: ["Survey Research", "Concept Development", "Feature Design", "UI Design"],
  summary:
    "A university project that starts with a survey about how people really use Spotify and ends in a redesigned, feature-forward concept.",
  preview: {
    src: "/projects/spotify/preview.webp",
    video: "/projects/spotify/app.mp4",
    alt: "Spotify light-mode redesign concept — screen recording",
    w: 588,
    h: 1280,
    label: "Spotify — light-mode concept",
    placeholder: false,
    presentation: "device",
  },
  heroMedia: [
    {
      src: "/projects/spotify/hero.webp",
      video: "/projects/spotify/app.mp4",
      alt: "Spotify redesign concept overview — screen recording",
      w: 588,
      h: 1280,
      label: "Spotify — concept overview",
      placeholder: false,
      presentation: "device",
    },
  ],
  intro:
    "A university project exploring how people actually use Spotify. It began with a survey, turned the findings into feature opportunities, and ended in a light-mode redesign concept built around them.",
  meta: [
    { label: "Role", value: "Researcher & UI Designer" },
    { label: "Type", value: "University project" },
    { label: "Method", value: "Survey → concept" },
    { label: "Subject", value: "Spotify" },
  ],
  blocks: [
    {
      type: "text",
      eyebrow: "Survey",
      heading: "It started with a survey.",
      body: [
        "We asked people how they actually use Spotify — what they reach for, what they ignore, and which new features they'd want most. Every feature that followed was designed off those answers, not our own taste.",
      ],
      layout: "split",
    },
    {
      type: "text",
      eyebrow: "Flagship feature — Sessions",
      heading: "Play a mood without breaking your algorithm.",
      body: [
        "Sessions is a temporary listening profile you can shape into anything — a party, a focus block, a road trip, a dinner, a specific decade or mood. Play to it all you want without teaching your recommendations you've changed taste; when it ends, your normal mixes are untouched.",
        "Name a session and it suggests a genre and occasion — both fully customisable, so it becomes exactly the thing you want. While it's active, your profile icon top-left expands to show you're in one, and the home screen adapts to match the session instead of pushing your usual Discover Weekly. End it anytime from that same indicator.",
      ],
      layout: "split",
    },
    {
      type: "text",
      eyebrow: "More features",
      heading: "A real profile, and a little more social.",
      body: [
        "The pop-over profile becomes a proper home: your playlists, your friends' listening activity, and your sessions in one place.",
        "Songs get timestamped comments, next to the share and output controls on the now-playing screen, so you can point at the exact bridge you love. A community tab keeps friends' comments together with new releases and tour dates from artists you follow. Light, music-focused social — not a full feed.",
      ],
      layout: "split",
    },
    {
      type: "text",
      eyebrow: "Takeaway",
      heading: "Research earns the right to redesign.",
      body: [
        "Starting from a survey meant every feature had a reason behind it — easier to defend, sharper to build. A concept: no features were adopted by Spotify, and no metrics are claimed.",
      ],
      layout: "split",
    },
    {
      type: "prototype",
      variant: "immersive",
      eyebrow: "Figma",
      label: "Open the Figma file",
      href: "https://www.figma.com/design/iaiFPs92FgbovhWfBvXYzA/Mockup_Spotify?node-id=0-1&t=lmOQRVk7LkDevjBZ-1",
      note: "The full Spotify concept — screens, features and flows.",
    },
  ],
  prototypeUrl: PENDING,
  liveUrl: undefined,
  seoTitle: "SPOTIFY — Rethinking the Listening Experience | Fabian Jamie Manz",
  seoDescription:
    "A university project: a survey on how people use Spotify, turned into feature opportunities and a light-mode redesign concept.",
};

export const projects: Project[] = [bridged, neon, pumpipumpe, spotify];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectIndex(slug: string): number {
  return projects.findIndex((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const i = getProjectIndex(slug);
  return projects[(i + 1) % projects.length];
}
