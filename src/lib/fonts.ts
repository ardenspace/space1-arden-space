import { Play, Silkscreen, Orbit } from "next/font/google";

// header - title
export const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// body - english
export const play = Play({
  subsets: ["latin"],
  weight: ["400"],
});

// body - korean
export const orbit = Orbit({
  subsets: ["latin"],
  weight: ["400"],
});
