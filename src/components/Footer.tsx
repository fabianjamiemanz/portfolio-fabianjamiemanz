import Link from "next/link";
import { site } from "@/content/site";
import { EmailCopy } from "./EmailCopy";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="shell">
        <div className={styles.top}>
          <div className={styles.identity}>
            <div className={styles.name}>{site.name}</div>
            <div className={styles.role}>
              {site.role} — {site.location}
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <span className={`meta ${styles.colHead}`}>Menu</span>
              {site.nav.map((n) => (
                <Link key={n.href} href={n.href} className={`link ${styles.item}`}>
                  {n.label}
                </Link>
              ))}
            </div>

            <div className={styles.col}>
              <span className={`meta ${styles.colHead}`}>Elsewhere</span>
              <a
                href={site.socials.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`link ${styles.item}`}
              >
                {site.socials.linkedin.label}
              </a>
              <a
                href={site.socials.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`link ${styles.item}`}
              >
                {site.socials.instagram.label}
              </a>
              <EmailCopy className={`link ${styles.item}`}>Email</EmailCopy>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={`meta ${styles.copyright}`}>
            © {site.year} {site.name}
          </span>
          <span className={`meta ${styles.copyright}`}>
            Designed &amp; built by Jamie
          </span>
        </div>
      </div>
    </footer>
  );
}
