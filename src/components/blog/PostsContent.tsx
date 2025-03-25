import { CategoryPost } from "@/app/blog/page";
import Image from "next/image";
import { Dog } from "lucide-react";

interface PostContentProps {
  posts?: CategoryPost[];
}

const PostsContent: React.FC<PostContentProps> = ({ posts = [] }) => {
  return (
    <section className="flex flex-col pt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-4 gap-8 px-1 sm:px-4">
        {posts.map((post) => (
          <div
            key={post.title}
            className="shadow-[3px_3px_3px_rgba(0,0,0,0.2)] p-[2px] hover:scale-102 rounded-sm hover:cursor-pointer"
          >
            <div className="flex items-center justify-between px-2 pr-1 bg-[#01027a] h-6">
              <span className="text-white font-bold text-sm">{post.date}</span>
              <div className="flex items-center justify-center h-4 w-4 bg-bgWhite">
                <Dog size={18} />
              </div>
            </div>
            <div className="flex flex-col bg-[#fdecf7] pt-4 px-3 pb-4">
              <div className="h-[200px] border-t border-l border-3 border-[rgba(35,196,175,0.7)]">
                <Image
                  unoptimized
                  width={300}
                  height={200}
                  src={post.thumbnail}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="pt-5 font-bold text-lg leading-6 line-clamp-1 break-keep">
                {post.title}
              </div>
              <div
                className="pt-1 text-sm tracking-tight line-clamp-2"
                style={{ minHeight: "3.3em" }}
              >
                {post.description}
              </div>
              <div className="w-full flex items-center justify-center border-b border-r border-1 border-[rgba(0,0,0,0.4)] h-8 shadow-[3px_3px_2px_rgba(35,196,175,0.7)] mt-3 rounded-xs">
                play now!
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PostsContent;
