import { CategoryPost } from "@/app/blog/page";
import { Diameter, Circle, Cat, Heart } from "lucide-react";

interface PostContentProps {
  posts?: CategoryPost[];
}

const PostsContent: React.FC<PostContentProps> = ({ posts = [] }) => {
  console.log(posts, "????????????????");
  return (
    <section className="flex flex-col mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 px-5">
        {posts.map((post) => (
          <div
            key={post.title}
            className="border shadow-[2px_2px_2px_rgba(0,0,0,0.9)] p-[1px] hover:scale-103"
          >
            <div className="flex items-center justify-between px-2 pr-1 bg-[#01007A] h-6">
              <span className="text-white font-bold text-sm">{post.date}</span>
              <div className="flex items-center justify-center h-4 w-4 bg-[#EBEBEB]">
                <Cat size={18} />
              </div>
            </div>
            <div className="flex flex-col bg-[#C0C0C0] pt-4 px-3 pb-4">
              <div className="h-[150px] border bg-white shadow-[-2px_-2px_1px_rgba(0,0,0,1)] border-t border-l border-3 border-[#EBEBEB]">
                사진 들어갑니다
              </div>
              <div className="pt-4 font-bold text-lg leading-6 line-clamp-1 break-keep">
                {post.title}
              </div>
              <div className="pt-1 text-sm tracking-tight line-clamp-2">
                {post.description}
              </div>
              <div className="w-full flex items-center justify-center border-b border-r border-3 border-[#EBEBEB] hover:cursor-pointer h-8 shadow-[3px_3px_2px_rgba(0,0,0,1)] mt-3">
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
