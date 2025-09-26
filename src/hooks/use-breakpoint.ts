import { useEffect, useState } from "react";

// 전역 브레이크포인트 상수
export const BREAKPOINT_WIDTH = 500;
export const BREAKPOINT_HEIGHT = 667;

export function useBreakpoint() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const updateScreenSize = () => {
      const { innerWidth: w, innerHeight: h } = window;
      // 하나만 기준 미만이면 모바일
      setIsDesktop(!(w < BREAKPOINT_WIDTH || h < BREAKPOINT_HEIGHT));
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return {
    isDesktop,
    isMobile: !isDesktop,
  };
}
