import type {
  Block,
  TextBlock,
  StatementBlock,
  MetaBlock,
  FigureBlock,
  GalleryBlock,
  BeforeAfterBlock,
  AnnotatedBlock,
  ListBlock,
  PrototypeBlock,
} from "@/content/types";
import { PENDING } from "@/content/projects";
import { Figure } from "@/components/Figure";
import { Reveal, RevealItem } from "@/components/Reveal";
import s from "./CaseStudy.module.css";

function Text({ b }: { b: TextBlock }) {
  if (b.layout === "split") {
    return (
      <Reveal className={`shell ${s.block}`}>
        <div className={s.textSplit}>
          <div className={s.head}>
            {b.eyebrow && <p className={`meta ${s.eyebrow}`}>{b.eyebrow}</p>}
            {b.heading && <h2 className={s.textHeading}>{b.heading}</h2>}
          </div>
          {b.body && (
            <div className={s.bodyCol}>
              {b.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    );
  }
  return (
    <Reveal className={`shell ${s.block}`}>
      <div className={s.textStacked}>
        {b.eyebrow && <p className={`meta ${s.eyebrow}`}>{b.eyebrow}</p>}
        {b.heading && <h2 className={s.textHeading}>{b.heading}</h2>}
        {b.body && (
          <div className={s.textBody}>
            {b.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
      </div>
    </Reveal>
  );
}

function Statement({ b }: { b: StatementBlock }) {
  return (
    <Reveal className={`shell ${s.blockLg}`}>
      <div className={s.statement}>
        <p className={s.statementText}>{b.text}</p>
        {b.attribution && <p className={s.statementAttr}>{b.attribution}</p>}
      </div>
    </Reveal>
  );
}

function Meta({ b }: { b: MetaBlock }) {
  return (
    <Reveal className={`shell ${s.block}`}>
      <div className={s.metaGrid}>
        {b.items.map((it) => (
          <div key={it.label}>
            <p className="meta">{it.label}</p>
            <p className={s.v}>{it.value}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function FigureB({ b }: { b: FigureBlock }) {
  return (
    <Reveal className={`shell ${s.block}`}>
      <Figure media={b.media} />
    </Reveal>
  );
}

function Gallery({ b }: { b: GalleryBlock }) {
  return (
    <div className={`shell ${s.block}`}>
      {(b.eyebrow || b.heading) && (
        <Reveal className={s.galleryHead}>
          {b.eyebrow && <p className={`meta ${s.eyebrow}`}>{b.eyebrow}</p>}
          {b.heading && <h2 className={s.listHeading}>{b.heading}</h2>}
        </Reveal>
      )}
      <Reveal className={s.gallery} stagger {...{ ["data-cols"]: b.columns ?? 3 }}>
        {b.items.map((m, i) => (
          <RevealItem key={i} as="figure">
            <Figure media={m} />
          </RevealItem>
        ))}
      </Reveal>
    </div>
  );
}

function BeforeAfter({ b }: { b: BeforeAfterBlock }) {
  return (
    <div className={`shell ${s.block}`}>
      {(b.eyebrow || b.heading) && (
        <Reveal className={s.baHead}>
          {b.eyebrow && <p className={`meta ${s.eyebrow}`}>{b.eyebrow}</p>}
          {b.heading && <h2 className={s.listHeading}>{b.heading}</h2>}
        </Reveal>
      )}
      <div className={s.ba}>
        <div className={s.baItem} data-kind="before">
          <p className={`meta ${s.baLabel}`}>
            <span className={s.baDot} /> Before
          </p>
          <Figure media={b.before} showCaption={false} />
        </div>
        <div className={s.baItem} data-kind="after">
          <p className={`meta ${s.baLabel} meta-strong`}>
            <span className={s.baDot} /> After
          </p>
          <Figure media={b.after} showCaption={false} />
        </div>
      </div>
      {b.note && <p className={s.baNote}>{b.note}</p>}
    </div>
  );
}

function Annotated({ b }: { b: AnnotatedBlock }) {
  return (
    <div className={`shell ${s.blockLg}`}>
      {(b.eyebrow || b.heading) && (
        <Reveal className={s.galleryHead}>
          {b.eyebrow && <p className={`meta ${s.eyebrow}`}>{b.eyebrow}</p>}
          {b.heading && <h2 className={s.listHeading}>{b.heading}</h2>}
        </Reveal>
      )}
      <div className={s.annotated}>
        <div className={s.annMedia}>
          <Figure media={b.media} showCaption={false} />
        </div>
        <ol className={s.annList}>
          {b.annotations.map((a) => (
            <li key={a.n} className={s.ann}>
              <span className={s.annNum}>{a.n}</span>
              {a.tag && <span className={`meta ${s.annTag}`}>{a.tag}</span>}
              <h3 className={s.annTitle}>{a.title}</h3>
              <p className={s.annBody}>{a.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function List({ b }: { b: ListBlock }) {
  return (
    <div className={`shell ${s.block}`}>
      <Reveal className={s.listHead}>
        {b.eyebrow && <p className={`meta ${s.eyebrow}`}>{b.eyebrow}</p>}
        {b.heading && <h2 className={s.listHeading}>{b.heading}</h2>}
        {b.intro && <p className={s.listIntro}>{b.intro}</p>}
      </Reveal>
      <Reveal className={s.list} stagger>
        {b.items.map((it, i) => (
          <RevealItem key={i} className={s.listItem}>
            {b.numbered && (
              <span className={s.listItemNum}>
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
            <h3 className={s.listItemTitle}>{it.title}</h3>
            {it.body && <p className={s.listItemBody}>{it.body}</p>}
          </RevealItem>
        ))}
      </Reveal>
    </div>
  );
}

function Prototype({ b }: { b: PrototypeBlock }) {
  const pending = !b.href || b.href === PENDING;
  const label = b.label ?? "View prototype";

  if (b.variant === "immersive") {
    return (
      <div className={`shell ${s.blockLg}`}>
        <Reveal className={s.protoImmersive}>
          <p className="meta">{b.eyebrow ?? "Prototype"}</p>
          <p className={s.protoBig}>{b.note ?? "Walk the flow."}</p>
          {pending ? (
            <>
              <span className={`${s.protoBtn} ${s.protoPending}`} aria-disabled>
                {label} ↗
              </span>
              <p className={s.protoPendingNote}>
                Live prototype link — pending
              </p>
            </>
          ) : (
            <a
              className={s.protoBtn}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label} ↗
            </a>
          )}
        </Reveal>
      </div>
    );
  }

  return (
    <Reveal className={`shell ${s.block}`}>
      <div className={s.protoInline}>
        {pending ? (
          <span
            className={`${s.protoInlineLink} ${s.protoPending}`}
            aria-disabled
          >
            {label} ↗ <em style={{ fontSize: "0.5em", opacity: 0.7 }}>(pending)</em>
          </span>
        ) : (
          <a
            className={`link ${s.protoInlineLink}`}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label} ↗
          </a>
        )}
        {b.note && <span className={s.protoNote}>{b.note}</span>}
      </div>
    </Reveal>
  );
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "text":
            return <Text key={i} b={b} />;
          case "statement":
            return <Statement key={i} b={b} />;
          case "meta":
            return <Meta key={i} b={b} />;
          case "figure":
            return <FigureB key={i} b={b} />;
          case "gallery":
            return <Gallery key={i} b={b} />;
          case "beforeAfter":
            return <BeforeAfter key={i} b={b} />;
          case "annotated":
            return <Annotated key={i} b={b} />;
          case "list":
            return <List key={i} b={b} />;
          case "prototype":
            return <Prototype key={i} b={b} />;
          case "spacer":
            return (
              <div
                key={i}
                style={{
                  height:
                    b.size === "xl"
                      ? "12rem"
                      : b.size === "l"
                        ? "7rem"
                        : "3.5rem",
                }}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
