import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { Figure } from "@/components/Figure";
import { Reveal } from "@/components/Reveal";
import s from "./work.module.css";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Four projects: BRIDGED, NEON, PUMPIPUMPE and SPOTIFY — brand identity, neuroinclusive product design, mobile UX and concept work.",
  alternates: { canonical: `${site.url}/work` },
};

export default function WorkPage() {
  return (
    <div>
      <div className={`shell ${s.top}`}>
        <span className="meta meta-strong">
          My work — {projects.length} shareable projects
        </span>
        <p className={`meta ${s.topMeta}`}>
          The four I can show in full. Most of my professional work can’t be
          shared.
        </p>
      </div>

      <div className={`shell ${s.entries}`}>
        {projects.map((p, i) => (
          <Reveal key={p.slug} as="div">
            <Link
              href={`/work/${p.slug}`}
              className={s.entry}
              data-flip={i % 2 === 1}
              aria-label={`${p.title} — ${p.descriptor}`}
            >
              <div className={s.grid}>
                <div className={s.info}>
                  <span className={s.number}>
                    {p.number} / {p.title}
                  </span>
                  <h2 className={s.title}>{p.title}</h2>
                  <p className={s.descriptor}>{p.descriptor}</p>
                  <p className={s.summary}>{p.summary}</p>
                  <div className={s.tags}>
                    {p.discipline.map((d) => (
                      <span key={d} className={s.tag}>
                        {d}
                      </span>
                    ))}
                  </div>
                  <span className={`link ${s.cta}`}>View project →</span>
                </div>
                <div className={s.media}>
                  <div className={s.frameShift}>
                    <Figure media={p.preview} showCaption={false} />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
