import Link from "next/link";
import type { Project } from "@/content/types";
import { Figure } from "@/components/Figure";
import { Reveal } from "@/components/Reveal";
import styles from "./ProjectPreview.module.css";

export function ProjectPreview({
  project,
  flip = false,
}: {
  project: Project;
  flip?: boolean;
}) {
  return (
    <Reveal className="shell">
      <Link
        href={`/work/${project.slug}`}
        className={styles.link}
        aria-label={`${project.title} — ${project.descriptor}`}
      >
        <div
          className={styles.preview}
          data-flip={flip}
          data-device={project.preview.presentation === "device"}
        >
          <div className={styles.media}>
            <div className={styles.frameShift}>
              <Figure media={project.preview} showCaption={false} />
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.number}>
              {project.number} / {project.title}
            </span>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.descriptor}>{project.descriptor}</p>
            <p className={styles.summary}>{project.summary}</p>
            <div className={styles.tags}>
              {project.discipline.slice(0, 4).map((d) => (
                <span key={d} className={styles.tag}>
                  {d}
                </span>
              ))}
            </div>
            <span className={`link ${styles.cta}`}>View project →</span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
