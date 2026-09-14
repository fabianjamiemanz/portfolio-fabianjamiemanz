import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  projects,
  getProject,
  getNextProject,
  getProjectIndex,
  PENDING,
} from "@/content/projects";
import { site } from "@/content/site";
import { Figure } from "@/components/Figure";
import { BlockRenderer } from "@/components/case/blocks";
import { StickyCaseNav } from "@/components/case/StickyCaseNav";
import { NextProject } from "@/components/case/NextProject";
import s from "@/components/case/CaseStudy.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: { absolute: project.seoTitle },
    description: project.seoDescription,
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url: `${site.url}/work/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle,
      description: project.seoDescription,
    },
    alternates: { canonical: `${site.url}/work/${project.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const next = getNextProject(slug);
  const index = getProjectIndex(slug);
  const hasProto = project.prototypeUrl && project.prototypeUrl !== PENDING;
  const hasLive = project.liveUrl && project.liveUrl !== PENDING;

  return (
    <article>
      <StickyCaseNav
        title={project.title}
        number={project.number}
        total={projects.length}
      />

      {/* Hero — text first, then large visuals */}
      <header className={`shell ${s.hero}`}>
        <div className={s.heroTop}>
          <span className="meta meta-strong">
            {project.number} / {project.title}
          </span>
          <span className="meta">{project.year}</span>
        </div>

        <h1 className={s.heroTitle}>{project.title}</h1>
        <p className={s.heroDescriptor}>{project.descriptor}</p>
        <p className={s.heroIntro}>{project.intro}</p>

        <div className={s.heroMeta}>
          {project.meta.map((m) => (
            <div key={m.label} className={s.heroMetaItem}>
              <p className={`meta ${s.k}`}>{m.label}</p>
              <p className={s.v}>{m.value}</p>
            </div>
          ))}
        </div>

        {(hasProto || hasLive) && (
          <div className={s.heroLinks}>
            {hasLive && (
              <a
                className="link"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live site ↗
              </a>
            )}
            {hasProto && (
              <a
                className="link"
                href={project.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore prototype ↗
              </a>
            )}
          </div>
        )}
      </header>

      <div className={`shell ${s.heroMediaWrap}`}>
        {project.heroMedia.map((m, i) => (
          <Figure key={i} media={m} priority={i === 0} />
        ))}
      </div>

      {/* Body */}
      <BlockRenderer blocks={project.blocks} />

      <NextProject project={next} />
      {/* index kept for potential ordering logic */}
      <span className="sr-only">Project {index + 1} of {projects.length}</span>
    </article>
  );
}
