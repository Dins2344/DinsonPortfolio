// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  // {
  //   name: "testimonials",
  //   path: "/testimonials",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// next tags
import Link from "next/link";
import { useRouter } from "next/router";

// framer motion
import { motion } from "framer-motion";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div
        className="glass rounded-t-2xl xl:rounded-full flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-6 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-3 xl:py-6 text-2xl xl:text-xl"
      >
        {navData.map((link, i) => {
          const active = link.path === pathname;
          return (
            <Link
              className={`${
                active ? "text-accent" : "text-white/70"
              } relative flex items-center justify-center w-16 h-10 xl:w-11 xl:h-16 rounded-full group hover:text-accent transition-colors duration-300`}
              href={link.path}
              key={i}
            >
              {/* sliding active pill */}
              {active && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {/* tooltip */}
              <div className="absolute pr-16 right-0 hidden xl:group-hover:flex">
                <div className="glass-sm rounded-md px-2.5 py-1.5 text-[12px] leading-none font-medium capitalize text-white">
                  {link.name}
                </div>
              </div>
              <span className="relative">{link.icon}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
