import Link from "next/link";

interface IconProps {
  ICON: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  design: string;
  filename: string;
  tolink: string;
}

export default function HomeIcon({
  ICON,
  design,
  filename,
  tolink,
}: IconProps) {
  return (
    <Link href={`${tolink}`} target="_blank">
      <div
        className={`flex flex-col absolute items-center min-w-[80px] ${design} "cursor-pointer z-9 border`}
      >
        <ICON className="w-8 h-9" />
        <div className="text-[var(--ttBlack)]">{filename}</div>
      </div>
    </Link>
  );
}
