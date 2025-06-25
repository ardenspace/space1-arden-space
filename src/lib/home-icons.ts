// icons.ts
import {
  Telescope,
  Satellite,
  Twitter,
  Github,
  LinkedinIcon,
} from "lucide-react";

export const homeIcons = [
  // {
  //   ICON: Telescope,
  //   design: "top-[20px] left-[10px]",
  //   filename: "BLOG",
  //   tolink: `/blog`,
  // },
  // {
  //   ICON: Satellite,
  //   design: "top-[20px] left-[90px]",
  //   filename: "ARDEN?",
  //   tolink: `/about`,
  // },
  {
    ICON: Twitter,
    design: "bottom-[1vh] right-[55px]",
    filename: "Twitter",
    size: "w-6 h-7",
    tolink: "https://twitter.com/ardenspace",
  },
  {
    ICON: Github,
    design: "bottom-[1vh] right-[0px]",
    filename: "GitHub",
    size: "w-6 h-7",
    tolink: "https://github.com/ardensgarden",
  },
  {
    ICON: LinkedinIcon,
    design: "top-[12vh] text-[var(--postHd)]",
    filename: "LinkedIn",
    size: "w-7 h-8",
    tolink: "https://www.linkedin.com/in/ardenspace/",
  },
];
