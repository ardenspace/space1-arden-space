import React, { useEffect, useRef, useState } from "react";

interface DraggableWindowProps {
  children: React.ReactNode;
  initialPosition?: { x: number; y: number };
  className?: string;
  headerHeight?: string;
  style?: React.CSSProperties;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

export default function DraggableWindow({
  children,
  initialPosition = { x: 0, y: 0 },
  className = "",
  style = {},
  headerHeight = "",
  onDragStart,
  onDragEnd,
}: DraggableWindowProps) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);

    dragOffsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };

    onDragStart?.();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    requestAnimationFrame(() => {
      const newX = e.clientX - dragOffsetRef.current.x;
      const newY = e.clientY - dragOffsetRef.current.y;

      const maxX =
        document.documentElement.clientWidth -
        (windowRef.current?.offsetWidth || 0);
      const maxY =
        document.documentElement.clientHeight -
        (windowRef.current?.offsetHeight || 0);

      setPosition({
        // 모든 경계 제한 제거: 창이 화면 밖으로 자유롭게 나갈 수 있음
        x: Math.min(newX, maxX),
        y: Math.min(newY, maxY),
      });
    });
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      onDragEnd?.();
    }
  };

  // initialPosition이 변경될 때 position 업데이트
  useEffect(() => {
    setPosition(initialPosition);
  }, [initialPosition]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={windowRef}
      className={`absolute ${className}`}
      style={{
        left: position.x,
        top: position.y,
        ...style,
      }}
    >
      {/* 드래그 오버레이 - 투명한 드래그 영역 */}
      <div
        className={`${headerHeight} absolute top-0 left-0 w-full cursor-grab active:cursor-grabbing`}
        onMouseDown={handleMouseDown}
        style={{ backgroundColor: "transparent" }}
      />

      {children}
    </div>
  );
}
