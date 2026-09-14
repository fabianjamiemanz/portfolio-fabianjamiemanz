import type { Metadata } from "next";
import { site } from "@/content/site";
import {
  experience,
  volunteering,
  education,
  skillGroups,
  skillWords,
  funFacts,
  type Role,
} from "@/content/about";
import { Figure } from "@/components/Figure";
import { Reveal } from "@/components/Reveal";
import { PhotoScatter } from "@/components/PhotoScatter";
import { ContactBlock } from "@/components/ContactBlock";
import { portrait, collage } from "@/content/photos";
import s from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fabian Jamie Manz — Digital Product Designer in Zurich, working across UX, UI, behavioural design and visual design.",
  alternates: { canonical: `${site.url}/about` },
};

function Entry({ item }: { item: Role }) {
  return (
    <div className={s.entry}>
      <span className={`meta ${s.entryPeriod}`}>{item.period}</span>
      <p className={s.entryOrg}>{item.org}</p>
      <p className={s.entryRole}>{item.role}</p>
      {item.note && <p className={s.entryNote}>{item.note}</p>}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* Top — structured like the Work page */}
      <header className={`shell ${s.top}`}>
        <div className={s.topBar}>
          <span className="meta meta-strong">
            About me — Let me introduce myself.
          </span>
          <p className={`meta ${s.topMeta}`}>
            Digital Product Designer in Zurich — UX, UI, behavioural &amp;
            visual design.
          </p>
        </div>

        <div className={s.introRow}>
          <Reveal className={s.introText}>
            <h1 className={s.lead}>Hi, I’m Jamie.</h1>
            <p>
              I’m a Digital Product Designer based in Zurich, working across UX,
              UI, behavioural design and visual design.
            </p>
            <p>
              I like making digital products that are clear, useful and —
              ideally — a little more interesting than they need to be.
            </p>
            <p>
              When I’m not designing, I’m probably taking pictures on film,
              looking at mid-century furniture, or finding another reason to talk
              about MINI Coopers.
            </p>
          </Reveal>
          <Reveal className={s.introPhoto}>
            <Figure media={portrait} showCaption={false} />
          </Reveal>
        </div>
      </header>

      {/* Photography — hover-to-expand collage */}
      <section className={`shell ${s.section}`}>
        <Reveal className={s.photoIntro}>
          <p className="meta" style={{ marginBottom: "1rem" }}>
            By the way
          </p>
          <p className={s.photoIntroText}>
            I also enjoy taking pictures — mostly analog.
          </p>
          <a
            className={`link ${s.igLink}`}
            href={site.socials.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.socials.instagram.handle} ↗
          </a>
        </Reveal>
        <Reveal>
          <PhotoScatter items={collage} />
        </Reveal>
      </section>

      {/* Experience & Education — two columns */}
      <section className={`shell ${s.section}`}>
        <div className={s.sectionHead}>
          <h2 className={s.sectionTitle}>Experience &amp; education.</h2>
          <span className="meta">The path</span>
        </div>
        <div className={s.eduGrid}>
          <Reveal className={s.col}>
            <p className={`meta ${s.colHead}`}>Experience</p>
            {experience.map((e) => (
              <Entry key={`${e.org}-${e.period}`} item={e} />
            ))}
          </Reveal>
          <Reveal className={s.col}>
            <p className={`meta ${s.colHead}`}>Volunteering</p>
            {volunteering.map((e) => (
              <Entry key={`${e.org}-${e.period}`} item={e} />
            ))}
            <p className={`meta ${s.colHead} ${s.colHeadBreak}`}>Education</p>
            {education.map((e) => (
              <Entry key={`${e.org}-${e.period}`} item={e} />
            ))}
          </Reveal>
        </div>
      </section>

      {/* What I actually do */}
      <section className={`shell ${s.section}`}>
        <div className={s.sectionHead}>
          <h2 className={s.sectionTitle}>What I actually do.</h2>
          <span className="meta">In practice</span>
        </div>
        <div className={s.doGrid}>
          <Reveal className={s.doIntro}>
            <p>
              A practical mix of research, design and enough engineering to make
              things real — shaped by consulting work at Accenture Song and my
              own projects.
            </p>
          </Reveal>
          <Reveal className={s.doList} stagger>
            {[
              {
                t: "Research & strategy",
                b: "Market and user research, behavioural design, campaign and product strategy.",
              },
              {
                t: "Design & prototyping",
                b: "UX/UI, interaction design, design systems and Figma prototypes.",
              },
              {
                t: "Creative & content",
                b: "Branding, motion, storyboards, video, photography and social assets.",
              },
              {
                t: "Build",
                b: "Front-end for web and mobile UI implementation when a design needs to ship.",
              },
            ].map((d) => (
              <div key={d.t} className={s.doItem}>
                <h3 className={s.doItemTitle}>{d.t}</h3>
                <p className={s.doItemBody}>{d.b}</p>
              </div>
            ))}
          </Reveal>
          <p className={s.confidential}>
            Client work at Accenture Song spans research, campaign concepts,
            storyboards, mobile UI and digital products. It’s covered by
            confidentiality, so it’s described here rather than shown.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className={`shell ${s.section}`}>
        <div className={s.sectionHead}>
          <h2 className={s.sectionTitle}>Skills.</h2>
          <span className="meta">What I can do</span>
        </div>
        <Reveal className={s.skillWords} stagger>
          {skillWords.map((w, i) => (
            <span key={w} className={s.skillWord} data-alt={i % 3 === 1}>
              {w}
            </span>
          ))}
        </Reveal>
        <div className={s.skillCats}>
          {skillGroups.map((g) => (
            <Reveal key={g.title} className={s.skillCat}>
              <p className={`meta ${s.skillCatTitle}`}>{g.title}</p>
              <ul>
                {g.skills.map((sk) => (
                  <li key={sk}>{sk}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Fun facts */}
      <section className={`shell ${s.section}`}>
        <div className={s.sectionHead}>
          <h2 className={s.sectionTitle}>A few things, for the record.</h2>
          <span className="meta">Fun facts</span>
        </div>
        <div className={s.facts}>
          {funFacts.map((f, i) => (
            <Reveal key={i} className={s.fact}>
              <span className={s.factNum}>{String(i + 1).padStart(2, "0")}</span>
              <span className={s.factText}>{f}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactBlock heading="Still reading? Let’s talk." />
    </div>
  );
}
