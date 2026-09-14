import type { Metadata } from "next";
import { site } from "@/content/site";
import { ContactBlock } from "@/components/ContactBlock";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Fabian Jamie Manz — Digital Product Designer based in Zurich, Switzerland.",
  alternates: { canonical: `${site.url}/contact` },
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "clamp(3rem, 6vh, 4.5rem)" }}>
      <ContactBlock
        id="contact"
        heading="Let’s make something worth paying attention to."
      />
    </div>
  );
}
