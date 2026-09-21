// next image
import Image from "next/image";

const Avatar = ({ priority = false }) => {
  return (
    <div>
      <Image
        src={'/images/avatar2.webp'}
        width={737}
        height={678}
        alt="avatarImage"
        priority={priority}
        className="translate-z-0 w-full h-full"
      />
    </div>
  )
};

export default Avatar;
