import { FC } from "react";
import { Redo2, Reply } from "lucide-react";

type Props = {
  Post: FC;
};

export default function SlugDetailPage({ Post }: Props) {
  const onHandleBack = () => {
    console.log("뒤로 가기기");
  };
  return (
    <article>
      <div className="sticky-div">
        <div className="flex items-center border-t-3 border-b-3 border-[var(--bgSecond)] h-10">
          <Reply
            size={24}
            color="var(--ttBlack)"
            style={{ width: 80, cursor: "pointer" }}
            onClick={onHandleBack}
          />
        </div>
      </div>
      <Post />
    </article>
  );
}
