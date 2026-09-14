import Link from "next/link";
import { projects } from "@/content/projects";
import { Hero } from "@/components/home/Hero";
import { WorkAboutSplit } from "@/components/home/WorkAboutSplit";
import { ProjectPreview } from "@/components/home/ProjectPreview";
import { ContactBlock } from "@/components/ContactBlock";
import { Reveal } from "@/components/Reveal";
import { Carousel } from "@/components/Carousel";
import { carouselSlides } from "@/content/photos";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <Hero />

      <WorkAboutSplit />

      {/* Personal visual moment */}
      <section className={`shell ${styles.section}`}>
        <Reveal className={styles.personal}>
          <div className={styles.personalText}>
            <p className="meta" style={{ marginBottom: "1.5rem" }}>
              By the way
            </p>
            <p className={styles.personalStatement}>
              I also take pictures. Mostly on film, so I only find out weeks
              later how they turned out.
            </p>
            <p className={styles.personalSub}>
              More of it lives on the{" "}
              <Link href="/about" className="link">
                about page
              </Link>
              .
            </p>
          </div>
          <div className={styles.personalPhoto}>
            <Carousel slides={carouselSlides} />
          </div>
        </Reveal>
      </section>

      {/* Selected project previews */}
      <section className={styles.section} aria-label="Selected work">
        <div className="shell">
          <div className={styles.workHead}>
            <h2 className={styles.workHeadTitle}>Selected work</h2>
            <Link href="/work" className="link meta meta-strong">
              All projects →
            </Link>
          </div>
        </div>

        <div className={styles.previews}>
          {projects.map((p, i) => (
            <ProjectPreview key={p.slug} project={p} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="shell">
          <div className={styles.viewAll}>
            <Link href="/work" className={`link ${styles.viewAllLink}`}>
              See the full portfolio →
            </Link>
          </div>
        </div>
      </section>

      <ContactBlock />
    </>
  );
}
