import { useZIndex } from "@/contexts/ZIndexContext";
import ProgressBar from "./ProgressBar";
import { useRouter } from "next/navigation";

export default function ArdensBlog({ locale }: { locale: string }) {
  const router = useRouter();
  const { currentPosition, setCurrentPosition } = useZIndex();
  // 가장 최근에 완성한 프로젝트
  const currentProjectUrl = `${locale}/blog/side-quests/next-dev-log?fc=side-quests`;
  // 가장 최근에 작성한 포스팅
  const currentPostUrl = `${locale}/blog/side-quests/next-dev-log?fc=side-quests`;

  const onClickTakeAPeek = () => {
    router.push(currentProjectUrl);
  };
  const onClickVaultButton = () => {
    router.push(currentPostUrl);
  };

  return (
    <div
      className={`mini-main ${currentPosition === "blog" ? "z-9" : ""}`}
      onClick={() => setCurrentPosition("blog")}
    >
      <div className="stripe-background h-[5%] w-full flex justify-center items-center mb-[2px]">
        <span className="bg-[var(--footerBg)] px-2 text-[var(--ttBlack)] font-bold text-xs">
          WELCOME TO ARDEN&apos;SPACE!
        </span>
      </div>
      <div className="h-[91.5%] w-full">
        <div className="flex flex-wrap w-full h-full pt-[5px] pb-[5px] [container-type:size]">
          <div className="min-w-[250px] flex-1 px-2">
            <span className="text-[var(--ttBlack)] font-bold text-base">
              What I&apos;ve done?
            </span>
            <div className="custom-box flex mt-[5px] h-[90%] [@container(min-width:500px)]:flex-col border-2 border-dotted border-[var(--ttBlack)]">
              <div className="flex-[1] relative">
                <img
                  src="/thumbnails/nextjs-logo.png"
                  alt="attie-on-the-home"
                  className="saturate-50 absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div
                className="
            flex-[0.3] flex items-center justify-center text-base font-bold text-[var(--mainTt2)] p-2 bg-[var(--footerBg)] cursor-pointer 
            border-dotted border-[var(--ttBlack)]
            [@container(min-width:500px)]:border-t-2 
            [@container(max-width:500px)]:border-l-2
          "
                onClick={onClickTakeAPeek}
              >
                <span className="left-text bounce-up">
                  {"> > "} Enter the vault
                </span>
              </div>
            </div>
          </div>

          <div className="min-w-[250px] flex-1 px-2 relative border-[var(--ttBlack)] [@container(min-width:500px)]:border-l [@container(max-width:500px)]:border-t">
            <div className="absolute bottom-0 right-0 w-[30%] h-[auto] min-h-[100px]">
              <img
                src="/home/attie.png"
                alt="attie-on-the-home"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>

            <span className="text-[var(--ttBlack)] font-bold text-base">
              What I’m up to?
            </span>
            <div className="h-[65%] flex flex-col mt-[5px]">
              <ProgressBar />
              <button
                className="mt-[10px] h-full flex items-center justify-center border-b border-r border-2 border-[var(--bgWhite)] shadow-[2px_2px_1px_var(--mainTt2)] cursor-pointer"
                onClick={onClickVaultButton}
              >
                <span className="text-[var(--mainTt3)] text-[1.2rem] [@container(max-width:500px)]:text-[1rem]">
                  ▶▶
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="stripe-background h-[3.5%] w-full"></div>
    </div>
  );
}
