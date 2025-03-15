"use client";

import { useEffect, useState } from "react";

export default function BlogPage() {
  return (
    <section className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-8">
        <div className="border-2 border-red-500">blog page 입니다</div>
        <div className="border-2 border-red-500">blog page 입니다</div>
        <div className="border-2 border-red-500">blog page 입니다</div>
      </div>
    </section>
  );
}
