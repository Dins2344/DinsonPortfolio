//next link
import Link from "next/link";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
  RiDribbleLine,
  RiBehanceLine,
  RiPinterestLine,
  RiMailAddLine
} from 'react-icons/ri'

const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/Dins2344"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.instagram.com/dinzenn/"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/dinson.davis.10/"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/dinson-davis-61164b165/"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://mail.google.com/mail/u/0/?ogbl#inbox?compose=GTvVlcRwQZxmBGdwsprwVrkWlWCMTJCDDKGbhDMVGkpbPCtbntFVjRRpshrZxMDshFxhCqMjcTNfr"}
        target="blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailAddLine />
      </Link>
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link> */}
    </div>
  );
};

export default Socials;
