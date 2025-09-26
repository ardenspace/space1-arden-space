import { useZIndex } from "@/contexts/ZIndexContext";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { memo, useCallback, useMemo } from "react";

const WhoIsContent = memo(({ locale }: { locale: string }) => {
  return (
    <>
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
    </>
  );
});

WhoIsContent.displayName = "WhoIsContent";

const DraggableWindow = dynamic(() => import("./DraggableWindow"), {
  ssr: false,
});

// 스타일 객체를 컴포넌트 외부로 이동하여 매번 재생성 방지
const windowStyle = {
  boxShadow: "0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.5)",
};

function WhoIsArden({ locale }: { locale: string }) {
  const { isDesktop } = useBreakpoint();
  const { currentPosition, setCurrentPosition } = useZIndex();

  // initialY 계산을 메모이제이션
  const initialY = useMemo(() => {
    return typeof window !== "undefined" ? window.innerHeight * 0.14 : 120;
  }, []);

  // 클릭 핸들러 메모이제이션
  const handleClick = useCallback(() => {
    setCurrentPosition("port");
  }, [setCurrentPosition]);

  const handleDragStart = useCallback(() => {
    setCurrentPosition("port");
  }, [setCurrentPosition]);

  // 클래스명을 메모이제이션
  const windowClassName = useMemo(() => {
    const baseClasses =
      "h-[20vh] min-h-[12.5rem] max-h-[14rem] w-[40vw] min-w-[18.75rem] max-w-[19rem] border-2 border-[#fff] transition-transform duration-200 hover:scale-103";
    const zIndexClass = currentPosition === "blog" ? "" : "z-10";
    return `${baseClasses} ${zIndexClass}`;
  }, [currentPosition]);

  return (
    <div onClick={handleClick}>
      {isDesktop ? (
        <DraggableWindow
          initialPosition={{ x: 100, y: initialY }}
          headerHeight="h-[10%]"
          className={windowClassName}
          style={windowStyle}
          onDragStart={handleDragStart}
        >
          <WhoIsContent locale={locale} />
        </DraggableWindow>
      ) : (
        <div
          className={`absolute ${windowClassName}`}
          style={{
            left: 100,
            top: initialY,
            ...windowStyle,
          }}
        >
          <WhoIsContent locale={locale} />
        </div>
      )}
    </div>
  );
}

// React.memo로 불필요한 리렌더링 방지
export default memo(WhoIsArden);
