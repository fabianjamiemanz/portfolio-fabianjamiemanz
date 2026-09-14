import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      className="shell"
      style={{
        minHeight: "82svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p className="meta" style={{ marginBottom: "1.5rem" }}>
        Error 404
      </p>
      <h1
        style={{
          fontSize: "clamp(4rem, 18vw, 16rem)",
          lineHeight: 0.85,
          letterSpacing: "-0.05em",
          fontWeight: 500,
        }}
      >
        404
      </h1>
      <p
        style={{
          marginTop: "1.75rem",
          fontSize: "var(--fs-l)",
          letterSpacing: "-0.02em",
          fontWeight: 500,
          maxWidth: "22ch",
        }}
      >
        Well, this wasn’t part of the user flow.
      </p>
      <Link
        href="/"
        className="link"
        style={{
          marginTop: "2.5rem",
          fontSize: "var(--fs-m)",
          width: "fit-content",
        }}
      >
        Back home →
      </Link>
    </section>
  );
}
