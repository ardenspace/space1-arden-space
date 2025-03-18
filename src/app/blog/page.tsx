"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Diameter, Circle, Cat, Heart } from "lucide-react";
import { allPosts } from "@/contentlayer/generated";

export default function BlogPage() {
  return (
    <section className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-8">
        <div className="border shadow-[2px_2px_2px_rgba(0,0,0,0.9)] p-[1px] hover:scale-103">
          <div className="flex items-center justify-between px-2 pr-1 bg-[#01007A] h-6">
            <span className="text-white font-bold text-sm">2025-03-17</span>
            <div className="flex items-center justify-center h-4 w-4 bg-[#EBEBEB]">
              <Cat size={18} />
            </div>
          </div>
          <div className="flex flex-col bg-[#C0C0C0] pt-4 px-3 pb-4">
            <div className="h-[150px] border bg-white shadow-[-2px_-2px_1px_rgba(0,0,0,1)] border-t border-l border-3 border-[#EBEBEB]">
              사진 들어갑니다
            </div>
            <div className="pt-4 font-bold text-lg leading-6 line-clamp-1 break-keep">
              타이틀 적겠습니다 타이틀 적겠습니다 타이틀 적겠습니다 타이틀
              적겠습니다 타이틀 적겠습니다
            </div>
            <div className="pt-1 text-sm tracking-tight line-clamp-2">
              블라블라 내용이 들어갑니다 내용 들어갑니다 내용 들어갑니다 내용
              들어갑니다 내용 들어갑니다 내용 들어갑니다 내용 들어갑니다
            </div>
            <div className="w-full flex items-center justify-center border-b border-r border-3 border-[#EBEBEB] hover:cursor-pointer h-8 shadow-[3px_3px_2px_rgba(0,0,0,1)] mt-3">
              play now!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
