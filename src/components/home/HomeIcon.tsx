import Link from "next/link";

interface IconProps {
  ICON: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  design: string;
  filename: string;
  size: string;
  tolink: string;
}

export default function HomeIcon({
  ICON,
  design,
  filename,
  size,
  tolink,
}: IconProps) {
  return (
    <Link href={`${tolink}`}>
      <div
        className={`flex flex-col absolute items-center min-w-[80px] ${design} "cursor-pointer z-9`}
      >
        <ICON className={size} />
        <div
          className="text-sm text-bold text-[var(--ttBlack)]"
          style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
        >
          {filename}
        </div>
      </div>
    </Link>
  );
}
