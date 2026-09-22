import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <SiTypescript key="ts" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiTailwindcss key="tailwind" />,
        ],
      },
      {
        title: "Backend",
        icons: [
          <FaNodeJs key="node" />,
          <SiExpress key="express" />,
          <SiNestjs key="nest" />,
          <SiGraphql key="graphql" />,
          <SiMongodb key="mongo" />,
          <SiPostgresql key="postgres" />,
          <SiRedis key="redis" />,
        ],
      },
      {
        title: "DevOps & Tools",
        icons: [
          <FaAws key="aws" />,
          <FaDocker key="docker" />,
          <FaGitAlt key="git" />,
          <FaFigma key="figma" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Freelance Full-Stack Developer - Self-employed",
        stage: "2026(Jan) - Present",
      },
      {
        title: "SDE 1 - Neutrinos, Bangalore, India",
        stage: "2023(Dec) - 2025(Dec)",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Bachelor of Computer Applications - Manipal University",
        stage: "Expected 2029",
      },
      {
        title: "MERN Stack Development - Brototype, Kochi, Kerala",
        stage: "2022 - 2023",
      },
      {
        title: "Diploma in Automobile Engineering - St. Mary's ITS, Palakkad",
        stage: "2015 - 2018",
      },
    ],
  },
];

//components
import Circles from "../../components/Circles";

//motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* shortStory */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Crafting <span className="text-accent">stories</span> Through Stunning Digital Designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I transform ideas into engaging digital experiences by blending creativity, technology, and user-focused design to build products that leave a lasting impression.

          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={2.5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={2.5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div> */}
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={2.5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* moreInfo */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[350px]"
        >
          <div className="flex gap-x-2 xl:gap-x-4 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <button
                  type="button"
                  key={itemIndex}
                  className={`${index === itemIndex ? "text-accent" : "text-white/70"} relative isolate px-4 py-1.5 rounded-full hover:text-accent capitalize xl:text-lg transition-colors duration-300`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {index === itemIndex && (
                    <motion.span
                      layoutId="about-tab"
                      className="glass-sm glass-pill absolute inset-0 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.title}
                </button>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* tittle */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* skillIcons */}
                    {item.icons?.map((icon, i) => {
                      return (
                        <div key={i} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
