import { site } from "@/content/site";
import { EmailCopy } from "./EmailCopy";
import { Reveal } from "./Reveal";
import styles from "./ContactBlock.module.css";

export function ContactBlock({
  id = "contact",
  heading = "You made it to the bottom. That usually means something.",
}: {
  id?: string;
  heading?: string;
}) {
  return (
    <section id={id} className={`shell ${styles.contact}`} aria-label="Contact">
      <Reveal>
        <p className={`meta ${styles.eyebrow}`}>Contact — let’s talk</p>
        <h2 className={styles.big}>{heading}</h2>

        <div className={styles.emailLine}>
          <EmailCopy className={styles.email}>{site.email}</EmailCopy>
        </div>

        <div className={styles.grid}>
          <div className={styles.cell}>
            <p className={`meta ${styles.cellLabel}`}>Email</p>
            <EmailCopy className={`link ${styles.cellValue}`}>Copy address</EmailCopy>
          </div>
          <div className={styles.cell}>
            <p className={`meta ${styles.cellLabel}`}>LinkedIn</p>
            <a
              className={`link ${styles.cellValue}`}
              href={site.socials.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.socials.linkedin.handle} ↗
            </a>
          </div>
          <div className={styles.cell}>
            <p className={`meta ${styles.cellLabel}`}>Instagram</p>
            <a
              className={`link ${styles.cellValue}`}
              href={site.socials.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.socials.instagram.handle} ↗
            </a>
          </div>
          <div className={styles.cell}>
            <p className={`meta ${styles.cellLabel}`}>Location</p>
            <span className={styles.cellValue}>{site.location}</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
