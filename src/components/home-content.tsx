import { Diameter, Circle, Cat, Heart } from "lucide-react";

function HomeContent() {
  // 헤더 - home, about me, blog, theme changer,
  // 푸터 - copyright ~~~

  const icons = [1, 2, 3];

  return (
    <section className="home-section">
      <div className="w-full flex items-center justify-between px-4 bg-[#01027A] h-8">
        <span className="text-white font-bold text-md">hello, space!</span>
        <div className="flex">
          {icons.map((icon, index) => (
            <div
              key={index}
              className={`flex items-center justify-center h-6 w-6 bg-[#EBEBEB] ${
                icon === 3 ? "ml-1" : ""
              }`}
            >
              <Cat size={21} />
            </div>
          ))}
        </div>
      </div>
      <div>여기에 헤더</div>
      <div>여기에 내용</div>
    </section>
  );
}

export default HomeContent;
