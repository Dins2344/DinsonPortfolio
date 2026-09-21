
//components
import dynamic from 'next/dynamic'
import ProjectionBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

//framer motion
import { motion } from "framer-motion";

//fade in variants
import { fadeIn } from '../variants'

// particles are client-only and heavy; keep them off the SSR/hydration path
const ParticlesContainer = dynamic(() => import('../components/ParticlesContainer'), { ssr: false })


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text div */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="relative z-10 pointer-events-none text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming <span className="text-accent">Ideas</span> into<br />
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* description */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-0 xl:mb-16"
          >
            From imagination to implementation — scalable, secure, and user-centric digital solutions.
          </motion.p>
          {/* button */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectionBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectionBtn />
          </motion.div>
        </div>
      </div>

      {/* particles: absolute against .page, so they cover the whole viewport */}
      <ParticlesContainer />

      {/* image section */}

      {/* pointer-events-none so hover repulse still reaches the particles underneath */}
      <div className="absolute inset-0 pointer-events-none">
        {/* background */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat absolute inset-0 mix-blend-color-dodge translate-z-0">
        </div>
        {/* avatar: backdrop on the mobile nav bar (80px) below xl, beside the text from xl up */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{duration:1,ease:'easeInOut'}}
          className="absolute inset-x-0 bottom-20 xl:bottom-0 h-[50vh] xl:h-[85vh] flex justify-end xl:pr-[7%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
