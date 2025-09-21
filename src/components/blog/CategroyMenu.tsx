"use client";

import { Folder, FolderClosed } from "lucide-react";

interface Props {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryMenu({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) {
  return (
    <div className="sticky-div">
      <div className="w-full grid grid-cols-4 justify-center max-w-screen-md border-t-3 border-b-3 border-[var(--bgSecond)]">
        {categories.map((category, index) => (
          <div
            key={category}
            className={`flex items-center justify-center max-w-[200px] cursor-pointer hover:bg-[var(--footerBg)] ${
              index !== 0 &&
              categories.length === 4 &&
              categories.length - 1 === index
                ? ""
                : "border-r-3"
            } border-[var(--bgSecond)]`}
          >
            <div
              className="w-[100%] flex items-center justify-center py-1 text-sm text-[var(--ttBlack)] truncate overflow-hidden"
              onClick={() => onSelectCategory(category)}
            >
              <span className="mr-1 shrink-0">
                {selectedCategory === category ? (
                  <FolderClosed size={15} />
                ) : (
                  <Folder size={15} />
                )}
              </span>
              <span className="truncate overflow-hidden whitespace-nowrap">
                {category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
