import { Diameter, Circle, Cat, Heart } from "lucide-react";
import Image from "next/image";

function HomeContent() {
  // 헤더 - home, about me, blog, theme changer,
  // 푸터 - copyright ~~~

  const testList = [1, 2, 3, 4, 5, 6];

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="flex w-[90%] md:w-[80%] min-h-[250px] rounded-sm overflow-x-auto scrollbar border">
        {testList.map((_, idx) => (
          <div className="min-w-[300px] h-[250px] bg-bgWhite "></div>
        ))}

        {/* <Image
          unoptimized
          width={300}
          height={200}
          src={"/thumbnails/test-image.jpg"}
          alt={"home animation"}
        />
        <Image
          unoptimized
          width={300}
          height={200}
          src={"/thumbnails/test-image2.jpg"}
          alt={"home animation"}
        />
        <Image
          unoptimized
          width={300}
          height={200}
          src={"/thumbnails/test-image3.jpg"}
          alt={"home animation"}
        />
        <Image
          unoptimized
          width={300}
          height={200}
          src={"/thumbnails/test-image.jpg"}
          alt={"home animation"}
        />
        <Image
          unoptimized
          width={300}
          height={200}
          src={"/thumbnails/test-image2.jpg"}
          alt={"home animation"}
        />
        <Image
          unoptimized
          width={300}
          height={200}
          src={"/thumbnails/test-image3.jpg"}
          alt={"home animation"}
        /> */}
      </div>
    </section>
  );
}

export default HomeContent;
