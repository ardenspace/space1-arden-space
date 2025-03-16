"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Diameter, Circle, Cat, Heart } from "lucide-react";

export default function BlogPage() {
  return (
    <section className="flex flex-col gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-8">
        <div className="flex flex-col pt-3 pb-3 hover:scale-103 hover:cursor-pointer">
          <div className="w-[85%] mx-auto pt-3 pb-4 px-3 border border-[#C7B3FF] rounded-sm bg-[#DCDBDF]">
            <div className="flex px-2 items-center justify-between h-6 bg-[#C7B3FF] rounded-tl-md rounded-tr-md">
              <span className="text-white">hello...</span>
              <div className="flex items-center space-x-1">
                <Cat size={13} className="text-white" />
                <Cat size={13} className="text-white" />
                <Cat size={13} className="text-white" />
              </div>
            </div>
            <Image
              width={250}
              height={150}
              src=""
              alt=""
              className="object-cover w-full h-full max-h-[150px] md:max-h-[150px] bg-white rounded-bl-md rounded-br-md border border-white"
            />
            <div className="flex px-1 justify-between items-center h-8 bg-[#DCDBDF]">
              <div className="flex">
                <Circle size={9} className="text-black mr-1" />
                <Circle size={9} className="text-black" />
              </div>
              <div className="flex items-center justify-center border-1 border-black-400 h-4 w-30">
                <div className="w-[80%] border-1 border-black-600"></div>
              </div>
            </div>
          </div>
          <div className="w-full mx-auto border-1 border-black-400 mt-2 h-8">
            내가 Next.js를 선택한 이유
          </div>
        </div>
      </div>
    </section>
  );
}
