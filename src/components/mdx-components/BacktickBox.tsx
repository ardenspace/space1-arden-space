import React from "react";

export function BacktickBox({ children }: { children: React.ReactNode }) {
  console.log("BacktickBox children", children);
  return (
    <div className="rounded-md bg-[black] text-[var(--mainTt1)] text-sm">
      {children}
    </div>
  );
}
