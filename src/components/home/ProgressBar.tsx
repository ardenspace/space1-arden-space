import { useEffect, useState } from "react";
import { useWindowSize } from "@/hooks/use-size";

const ProgressBar = () => {
  const size = useWindowSize();
  const totalBars = 8;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    if (activeIndex < totalBars) {
      interval = setInterval(() => {
        setActiveIndex((prev) => prev + 1);
      }, 400);
    } else {
      // 마지막 칸까지 찬 후 쉬었다가 초기화
      timeout = setTimeout(() => {
        setActiveIndex(0);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeIndex]);

  // 렌더링만 조건적으로!
  if (!size) return null;

  return (
    <div
      className={`w-full flex flex-col ${size.width > 784 ? "items-end" : ""}`}
    >
      <div
        className="w-full
     flex border-1 border-[var(--ttBlack)] p-1"
      >
        {Array.from({ length: totalBars }).map((_, idx) => (
          <div
            key={idx}
            className={`${
              size.width > 500 && size.width < 849 ? "w-14" : "w-8"
            } h-2 mx-0.5 ${
              // idx < activeIndex ? "bg-[#545454]" : "bg-[var(--footerBg #f0f0ed)]"
              idx < activeIndex ? "bg-[var(--mainTt2)]" : "bg-[var(--footerBr)]"
            } transition-all`}
          />
        ))}
      </div>
      <span className="text-xs font-bold">Peeking into progress...</span>
    </div>
  );
};

export default ProgressBar;
