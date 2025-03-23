import Link from "next/link";
import { Github, LinkedinIcon, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-auto h-[30px] border-bgWhite bg-bgWhite">
      <div className="w-full h-full flex items-center justify-between px-4">
        <div className="flex px-2 gap-1">
          <Link href="https://github.com/ardensgarden" target="_blank">
            <Github size={20} />
          </Link>
          <Link href="https://www.linkedin.com/in/ardenspace/" target="_blank">
            <LinkedinIcon size={20} />
          </Link>
        </div>
        <span className="text-xs">
          Copyright © {new Date().getFullYear()} Arden Lee
        </span>
      </div>
    </footer>
  );
}
