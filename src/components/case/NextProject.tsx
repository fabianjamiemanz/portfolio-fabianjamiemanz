import Link from "next/link";
import type { Project } from "@/content/types";
import { Figure } from "@/components/Figure";
import { Reveal } from "@/components/Reveal";
import styles from "./NextProject.module.css";

export function NextProject({ project }: { project: Project }) {
  return (
    <section className={styles.next} aria-label="Next project">
      <Link href={`/work/${project.slug}`} className={`shell ${styles.link}`}>
        <Reveal className={styles.row}>
          <div className={styles.text}>
            <p className={`meta ${styles.eyebrow}`}>Next project →</p>
            <span className={styles.number}>
              {project.number} / {project.title}
            </span>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.descriptor}>{project.descriptor}</p>
            <span className={`link ${styles.cta}`}>View project →</span>
          </div>
          <div className={styles.media}>
            <Figure media={project.preview} showCaption={false} />
          </div>
        </Reveal>
      </Link>
    </section>
  );
}
