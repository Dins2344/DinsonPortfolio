// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div>
      <Image 
      src={'/avatar2.png'}
        width={737}
        height={678}
        alt="avatarImage"
        className="translate-z-0 w-full h-full"
      />
</div>
  )
};

export default Avatar;
