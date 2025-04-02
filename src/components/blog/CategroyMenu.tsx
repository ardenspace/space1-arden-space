"use client";

import { Folder, FolderClosed } from "lucide-react";

interface CategoryMenuProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryMenu({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryMenuProps) {
  return (
    <div className="sticky top-30 z-10 bg-[var(--bgMain)]">
      <div className="w-full grid grid-cols-4 justify-center max-w-screen-md border-t-3 border-b-3 border-[var(--bgSecond)]">
        {categories.length > 0 ? (
          categories.map((category) => (
            <div
              key={category}
              className="flex items-center justify-center max-w-[200px] border-r-3 border-[var(--bgSecond)] cursor-pointer hover:bg-gray-200"
            >
              <div
                className="w-[90%] flex items-center justify-center py-1 text-sm text-[var(--ttBlack)] truncate overflow-hidden"
                onClick={() => onSelectCategory(category)}
              >
                {selectedCategory === category ? (
                  <FolderClosed size={15} className="mr-1" />
                ) : (
                  <Folder size={15} className="mr-1" />
                )}
                {category}
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center py-2">
            카테고리가 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
