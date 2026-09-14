import type { Media } from "./types";

/* ============================================================
   Photography — @frames.jmie
   Analog work used as editorial colour interruptions.
   Files live in /public/photography (optimised JPGs; Next serves
   WebP/AVIF automatically).
   ============================================================ */

const P = "/photography";

function photo(
  file: string,
  alt: string,
  w: number,
  h: number,
  label: string
): Media {
  return {
    src: `${P}/${file}`,
    alt,
    w,
    h,
    label,
    placeholder: false,
    presentation: "plain",
  };
}

/* ---- Homepage carousel (auto-advancing) ---- */
export interface Slide extends Media {
  location: string;
}

export const carouselSlides: Slide[] = [
  {
    ...photo(
      "thailand-1.jpg",
      "A fisherman alone in a small boat at dusk on calm water, Thailand",
      1061,
      1600,
      "Thailand"
    ),
    location: "Koh Samui, Thailand",
  },
  {
    ...photo(
      "london-1.jpg",
      "Big Ben and Westminster in black and white, gulls crossing a grey sky",
      1280,
      1600,
      "London"
    ),
    location: "Westminster, London",
  },
  {
    ...photo(
      "singapore-1.jpg",
      "The lit canopy walkway among the Supertrees at night, Singapore",
      1060,
      1600,
      "Singapore"
    ),
    location: "Gardens by the Bay, Singapore",
  },
  {
    ...photo(
      "london-2.jpg",
      "The red pod lift on the façade of The Standard, London",
      1280,
      1600,
      "The Standard, London"
    ),
    location: "The Standard, London",
  },
];

/* ---- About / personal story — monochrome, London ---- */
export const londonPhoto = photo(
  "london-1.jpg",
  "Big Ben and Westminster in black and white, gulls crossing a grey sky",
  1280,
  1600,
  "London — Westminster"
);

/* ---- About / photography interruption — a trio, three places, three moods ---- */
export const interludeTrio: Media[] = [
  photo(
    "img-0567.jpg",
    "A mountain road winding through the pine-covered hills of Mallorca",
    1060,
    1600,
    "Mallorca — the road"
  ),
  photo(
    "thailand-2.jpg",
    "A 7-Eleven glowing at night with a scooter blurring past, Thailand",
    1200,
    1600,
    "Thailand — night"
  ),
  photo(
    "singapore-2.jpg",
    "Marina Bay Sands seen from below against a dramatic dusk sky",
    1199,
    1600,
    "Singapore — dusk"
  ),
];

/* ---- About / later single — Mallorca coast ---- */
export const coastPhoto = photo(
  "img-0560.jpg",
  "The Mallorca coastline: pine ridges meeting a deep blue sea under big clouds",
  1060,
  1600,
  "Mallorca — the coast"
);

/* ---- About: portrait (drop the real file at this path) ---- */
export const portrait: Media = {
  src: "/photography/portrait.jpg",
  alt: "Portrait of Fabian Jamie Manz",
  w: 928,
  h: 1400,
  label: "Portrait — Jamie",
  placeholder: false,
  presentation: "plain",
};

/* ---- About: photography collage (all frames, hover to expand) ---- */
export const collage: Media[] = [
  photo("thailand-1.jpg", "Fisherman at dusk, Thailand", 1061, 1600, "Thailand"),
  photo("img-0567.jpg", "Mountain road, Mallorca", 1060, 1600, "Mallorca"),
  photo("london-1.jpg", "Big Ben and gulls, London", 1280, 1600, "London"),
  photo("singapore-1.jpg", "Supertrees at night, Singapore", 1060, 1600, "Singapore"),
  photo("thailand-3.jpg", "Longtail boat, Bangkok", 1280, 1600, "Bangkok"),
  photo("london-2.jpg", "The Standard, London", 1280, 1600, "The Standard, London"),
  photo("img-0560.jpg", "Mallorca coastline", 1060, 1600, "Mallorca"),
  photo("thailand-2.jpg", "7-Eleven at night, Thailand", 1200, 1600, "Thailand"),
  photo("singapore-2.jpg", "Marina Bay Sands, Singapore", 1199, 1600, "Singapore"),
  photo("img-0564.jpg", "Lone sailboat", 1060, 1600, "At sea"),
  photo("img-0548.jpg", "Palms and a wall, Mallorca", 1060, 1600, "Mallorca"),
];

/* ---- Reserve (swap in freely) ---- */
export const reserve: Media[] = [
  photo("img-0548.jpg", "Two palm trees rising past a sunlit brick wall", 1060, 1600, "Palms"),
  photo("img-0564.jpg", "A lone sailboat on an open, hazy sea", 1060, 1600, "Sailboat"),
  photo("thailand-3.jpg", "A colourful longtail boat on the Chao Phraya, Bangkok skyline behind", 1280, 1600, "Bangkok — longtail"),
];
