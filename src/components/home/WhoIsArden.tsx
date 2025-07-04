import { useZIndex } from "@/contexts/ZIndexContext";
import Link from "next/link";
import Image from "next/image";

export default function WhoIsArden({ locale }: { locale: string }) {
  const { currentPosition, setCurrentPosition } = useZIndex();

  return (
    <div
      onClick={() => setCurrentPosition("port")}
      className={`${
        currentPosition === "blog" ? "" : "z-9"
      } absolute top-[14vh] left-[100px] h-[20vh] min-h-[200px] max-h-[220px] w-[40vw] min-w-[300px] max-w-[320px] border-2 border-[#fff] transition-transform duration-200 hover:scale-103`}
      style={{
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="h-[10%] bg-[var(--ttBlack)] text-[var(--portTt)] flex items-center px-2 border-b-2 border-[#fff] font-bold text-xs">
        WHO IS ARDEN?
      </div>
      <div className="checkerboard">
        <div className="w-[90%] h-[90%] bg-white relative overflow-hidden rotate-[4deg] cursor-pointer">
          <Link href={`/${locale}/arden`}>
            <Image
              src="/home/profile2.jpeg"
              alt="for-home-portfolio"
              fill
              className="object-cover"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
