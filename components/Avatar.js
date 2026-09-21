// next image
import Image from "next/image";

// Only rendered on the home page, where it is the LCP element.
const Avatar = () => {
  return (
    <div className="h-full opacity-60 xl:opacity-100 [mask-image:linear-gradient(to_bottom,transparent,#000_35%)] xl:[mask-image:none]">
      <Image
        src={'/images/avatar3.webp'}
        width={1070}
        height={1470}
        alt="Dinson Davis"
        priority
        className="translate-z-0 h-full w-auto [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
      />
    </div>
  )
};

export default Avatar;
