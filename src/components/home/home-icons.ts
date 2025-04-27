// icons.ts
import {
  Telescope,
  Satellite,
  Twitter,
  Github,
  LinkedinIcon,
} from "lucide-react";

export const homeIcons = [
  {
    ICON: Telescope,
    design: "top-[20px] left-[10px]",
    filename: "BLOG",
    tolink: `/blog`,
  },
  {
    ICON: Satellite,
    design: "top-[20px] left-[90px]",
    filename: "ARDEN?",
    tolink: `/arden`,
  },
  {
    ICON: Twitter,
    design: "bottom-[200px] right-[20px]",
    filename: "Twitter",
    tolink: "https://twitter.com/ardenspace",
  },
  {
    ICON: Github,
    design: "bottom-[30px] right-[20px]",
    filename: "GitHub",
    tolink: "https://github.com/ardensgarden",
  },
  {
    ICON: LinkedinIcon,
    design: "bottom-[100px] right-[20px]",
    filename: "linkedIn",
    tolink: "https://www.linkedin.com/in/ardenspace/",
  },
];
