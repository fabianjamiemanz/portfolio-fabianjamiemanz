import Image from "next/image";
import type { Media } from "@/content/types";
import { FrameVideo } from "./FrameVideo";
import styles from "./Figure.module.css";

/* Presentational framing for imagery and elegant, clearly-replaceable
   placeholders. Scroll motion is handled by surrounding <Reveal> wrappers,
   so this component is static (and server-rendered). */
export function Figure({
  media,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 80vw",
  showCaption = true,
}: {
  media: Media;
  priority?: boolean;
  sizes?: string;
  showCaption?: boolean;
}) {
  const presentation = media.presentation ?? "plain";
  const ratio = `${media.w} / ${media.h}`;

  const inner = media.video ? (
    <FrameVideo src={media.video} label={media.alt} ratio={ratio} />
  ) : media.placeholder ? (
    <div className={styles.placeholder} style={{ aspectRatio: ratio }}>
      <span className={styles.placeholderLabel}>
        {media.label ?? media.alt}
      </span>
      <span className={styles.placeholderMeta}>
        {media.reconstruction ? "Reconstruction · " : ""}
        {media.w}×{media.h} · replace {media.src}
      </span>
    </div>
  ) : (
    <Image
      className={styles.img}
      src={media.src}
      alt={media.alt}
      width={media.w}
      height={media.h}
      sizes={sizes}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
    />
  );

  return (
    <figure className={`${styles.figure} ${styles[presentation]}`}>
      <div className={styles.frame}>
        {presentation === "browser" && (
          <div className={styles.chrome} aria-hidden="true">
            <div className={styles.dots}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <div className={styles.omni} />
          </div>
        )}
        {presentation === "device" && (
          <div className={styles.island} aria-hidden="true" />
        )}
        <div className={styles.media} style={{ aspectRatio: ratio }}>
          {media.reconstruction && (
            <span className={styles.tag}>Portfolio reconstruction</span>
          )}
          {inner}
        </div>
      </div>

      {showCaption && media.caption && (
        <figcaption className={styles.caption}>
          {media.caption}
          {media.reconstruction && (
            <span className={styles.reconNote}>
              {" "}
              (portfolio reconstruction — not an original artifact)
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
