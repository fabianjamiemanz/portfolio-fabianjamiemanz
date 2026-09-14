/* ============================================================
   Content model
   Case studies are data-driven: each is a list of typed blocks
   rendered by a single block renderer. Adding a project or a
   section never requires touching page architecture.
   ============================================================ */

export type Presentation = "browser" | "device" | "plain" | "bleed" | "detail";

export interface Media {
  /** Path under /public. Only used when placeholder === false. */
  src: string;
  alt: string;
  /** Optional looping video (path under /public). Rendered inside the frame,
      replacing the placeholder/image. Autoplays muted; paused for
      reduced-motion users. */
  video?: string;
  /** Intrinsic size, used for aspect-ratio to avoid layout shift. */
  w: number;
  h: number;
  caption?: string;
  /** Short label shown inside the placeholder frame. */
  label?: string;
  /** When true (default until real assets land) an elegant labeled
      frame is rendered instead of a fabricated screenshot. */
  placeholder?: boolean;
  presentation?: Presentation;
  /** Marks reconstructions/visualisations that were not original artifacts. */
  reconstruction?: boolean;
}

export interface MetaItem {
  label: string;
  value: string;
}

/* ---- Block union ---- */

export interface TextBlock {
  type: "text";
  eyebrow?: string;
  heading?: string;
  /** Paragraphs. */
  body?: string[];
  /** "wide" pushes heading left, body right (editorial two-column). */
  layout?: "stacked" | "split";
  align?: "left" | "wide";
}

export interface StatementBlock {
  type: "statement";
  text: string;
  attribution?: string;
}

export interface MetaBlock {
  type: "meta";
  items: MetaItem[];
}

export interface FigureBlock {
  type: "figure";
  media: Media;
}

export interface GalleryBlock {
  type: "gallery";
  columns?: 2 | 3 | 4;
  items: Media[];
  eyebrow?: string;
  heading?: string;
}

export interface BeforeAfterBlock {
  type: "beforeAfter";
  before: Media;
  after: Media;
  eyebrow?: string;
  heading?: string;
  note?: string;
}

export interface Annotation {
  n: number;
  title: string;
  body: string;
  /** e.g. "Insight 03" or "Criterion: Focus". */
  tag?: string;
}

export interface AnnotatedBlock {
  type: "annotated";
  media: Media;
  eyebrow?: string;
  heading?: string;
  annotations: Annotation[];
}

export interface ListBlock {
  type: "list";
  eyebrow?: string;
  heading?: string;
  intro?: string;
  /** Numbered or plain structured items. */
  numbered?: boolean;
  items: { title: string; body?: string }[];
}

export interface PrototypeBlock {
  type: "prototype";
  eyebrow?: string;
  label?: string;
  href: string;
  note?: string;
  /** big immersive variant vs inline CTA */
  variant?: "inline" | "immersive";
}

export interface SpacerBlock {
  type: "spacer";
  size?: "m" | "l" | "xl";
}

export type Block =
  | TextBlock
  | StatementBlock
  | MetaBlock
  | FigureBlock
  | GalleryBlock
  | BeforeAfterBlock
  | AnnotatedBlock
  | ListBlock
  | PrototypeBlock
  | SpacerBlock;

export interface Project {
  slug: string;
  number: string; // "01"
  title: string; // "BRIDGED"
  descriptor: string; // "Brand Identity & Digital Experience"
  year: string;
  role: string;
  discipline: string[];
  /** One-line summary used on homepage/work previews. */
  summary: string;
  /** Homepage preview visual. */
  preview: Media;
  /** Case-study hero visual(s) shown directly under the intro text. */
  heroMedia: Media[];
  /** Short context paragraph shown in the case-study hero. */
  intro: string;
  meta: MetaItem[];
  blocks: Block[];
  prototypeUrl?: string;
  liveUrl?: string;
  /** SEO */
  seoTitle: string;
  seoDescription: string;
}
