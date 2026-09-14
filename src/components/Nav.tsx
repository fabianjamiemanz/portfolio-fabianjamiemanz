"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import styles from "./Nav.module.css";

export function Nav() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > last.current;
      // Reveal near the top; hide while scrolling down past a threshold.
      if (y < 80) setHidden(false);
      else if (goingDown && y - last.current > 6) setHidden(true);
      else if (!goingDown && last.current - y > 6) setHidden(false);
      last.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`${styles.nav} ${hidden ? styles.hidden : ""}`}>
      <Link href="/" className={styles.brand} aria-label={`Home — ${site.name}`}>
        {site.name}
      </Link>
      <nav className={styles.links} aria-label="Primary">
        {site.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.link}
            data-active={isActive(item.href)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
