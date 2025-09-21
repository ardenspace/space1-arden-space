import { useEffect, useState } from "react";

// 전역 브레이크포인트 상수
export const BREAKPOINT_MOBILE = 500;

export function useBreakpoint() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsDesktop(window.innerWidth >= BREAKPOINT_MOBILE);
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

// 개별 브레이크포인트 체크 함수들
export function useIsMobile() {
  const { isMobile } = useBreakpoint();
  return isMobile;
}

export function useIsDesktop() {
  const { isDesktop } = useBreakpoint();
  return isDesktop;
}
