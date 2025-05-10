import { useZIndex } from "@/contexts/ZIndexContext";
import Link from "next/link";

export default function WhoIsArden({ locale }: { locale: string }) {
  const { currentPosition, setCurrentPosition } = useZIndex();

  return (
    <div
      onClick={() => setCurrentPosition("port")}
      className={`${
        currentPosition === "blog" ? "" : "z-9"
      } absolute top-[15vh] left-[100px] h-[25vh] min-h-[220px] w-[40vw] min-w-[320px] max-w-[360px] border-2 border-[#fff] transition-transform duration-200 hover:scale-103`}
    >
      <div className="h-[10%] bg-[var(--ttBlack)] text-[var(--mainTt1)] flex items-center px-2 border-b-2 border-[#fff] font-bold text-xs">
        WHO IS ARDEN?
      </div>
      <div className="checkerboard">
        <div className="w-[85%] h-[85%] bg-white relative overflow-hidden rotate-[8deg] cursor-pointer">
          <Link href={`http://localhost:3000/${locale}/arden`}>
            <img
              src="/home/wemadeit.jpg"
              alt="for-home-portfolio"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
