import { Play, Silkscreen, Montserrat } from "next/font/google";

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

// mdx - code block font
export const montserrate = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-montserrate",
});
