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
    <div
      className={`flex flex-col absolute items-center min-w-[80px] ${design}`}
    >
      <Link href={`${tolink}`} target="_blank">
        <ICON className="w-8 h-9" />
      </Link>
      <div className="text-[var(--ttBlack)]">{filename}</div>
    </div>
  );
}
