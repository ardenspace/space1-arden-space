"use client";

import PageLayout from "@/components/page-layout";
import { useEffect, useState } from "react";

export default function AboutPage() {
  // title: arden?
  return (
    <PageLayout>
      <section>
        <div>arden? page 입니다</div>
        <div>내 기술</div>
        <div>내 장점</div>
        <div>컴포넌트화 / 재사용성 고려</div>
      </section>
    </PageLayout>
  );
}
