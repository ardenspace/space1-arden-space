import { useEffect, useState } from "react";

const ProgressBar = () => {
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
      // 마지막 칸까지 찬 후 1초 쉬었다가 초기화
      timeout = setTimeout(() => {
        setActiveIndex(0);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeIndex]);

  return (
    <div className="w-full flex border-1 border-[var(--blackTt)] p-1">
      {Array.from({ length: totalBars }).map((_, idx) => (
        <div
          key={idx}
          className={`w-8 h-2 mx-0.5 ${
            idx < activeIndex ? "bg-[#888888]" : "bg-[var(--footerBg)]"
          } transition-all`}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
