//next Image
import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse z-10">
      <Image
        className="w-full h-full"
        src={"/circles.webp"}
        width={260}
        height={200}
        alt="aboutCirclesImg"
      ></Image>
    </div>
  );
};

export default Circles;
