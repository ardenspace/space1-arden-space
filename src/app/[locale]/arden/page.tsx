"use client";

import PageLayout from "@/app/[locale]/page-layout";
import { useEffect, useState } from "react";

export default function AboutPage() {
  // title: arden?
  return (
    <PageLayout>
      <section>
        <div>arden? page 입니다</div>
        <div>내 기술</div>
        <div>React Native, React.js, Next.js, TypeScript, Tailwind</div>
        <div>내 장점</div>
        <div>컴포넌트화 / 재사용성 고려</div>
        <div>사용자 편의성? 끈질김, 집요함</div>
        <div>2023. 04. 17 ~</div>
        <div>(주) 쿳션</div>
        <div>부천 리빙랩 관리자 페이지</div>
        <div>FPP 관리자 페이지 서버와 프론트 둘 다 담당</div>
        <div>곰쿡 관리자 페이지</div>
        <div>휴먼앤로봇 제조현황 및 픽업 앱</div>
        <div>아이스크림 로봇 주문 앱</div>
      </section>
    </PageLayout>
  );
}
