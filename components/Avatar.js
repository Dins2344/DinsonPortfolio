// next image
import Image from "next/image";

// Only rendered on the home page, where it is the LCP element.
const Avatar = () => {
  return (
    <div className="h-full">
      <Image
        src={'/images/avatar3.webp'}
        width={1070}
        height={1470}
        alt="Dinson Davis"
        priority
        className="translate-z-0 h-full w-auto ml-auto lg:mx-auto [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
      />
    </div>
  )
};

export default Avatar;
