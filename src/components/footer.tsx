import Link from "next/link";
import { Github, LinkedinIcon, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-auto border h-[30px]">
      <div className="flex items-center justify-between">
        <div className="flex px-2 gap-1">
          <Link href="https://github.com/ardensgarden" target="_blank">
            <Github size={17} />
          </Link>
          <Link href="https://www.linkedin.com/in/ardenspace/" target="_blank">
            <LinkedinIcon size={17} />
          </Link>
        </div>
        <span className="text-sm">
          Copyright © {new Date().getFullYear()} Arden Lee
        </span>
      </div>
    </footer>
  );
}
